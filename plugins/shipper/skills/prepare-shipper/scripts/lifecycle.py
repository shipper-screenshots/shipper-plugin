"""Task-local, deterministic preparation policy. No MCP, launch or filesystem effects.
The caller supplies fresh observations correlated to actionID, executes only the
returned action, and retains state (including creationAttemptID) until completion.
"""
import copy
import ctypes
import time
import json
import math
import re
import sys
import uuid

APP = "/Applications/Shipper.app"
BASE_TOOLS = {"get_connection_status", "get_automation_capabilities", "inspect_project"}
PHASES = {"PREPARING", "READY", "USER_DECISION_REQUIRED", "FAILED", "CANCELLED"}
KEYS = {"phase", "pending", "serial", "intent", "requiredTools", "time", "launchUsed",
        "probes", "waitSince", "readRetries", "openCount", "createCount", "decisionUsed",
        "bound", "candidate", "template"}


def valid_uuid(value):
    try:
        return isinstance(value, str) and str(uuid.UUID(value)) == value.lower()
    except (ValueError, AttributeError):
        return False


def compatible(status, capabilities, tools, intent, required):
    """Presence/compatible semantics, never an exact total inventory count."""
    version = status.get("serverVersion", "")
    match = re.fullmatch(r"(\d+)\.(\d+)\.(\d+)", version)
    needed = BASE_TOOLS | set(required)
    if intent != "environment":
        needed |= {"list_projects", "open_project", "list_locales"}
    if intent == "new":
        needed.add("create_project")
    if intent == "new_from_template":
        needed |= {"list_project_templates", "create_project_from_template"}
    lifecycle = capabilities.get("projectLifecycle", {})
    return bool(match and int(match[1]) == 6
                and status.get("bridgeVersion") == "v7"
                and status.get("serverStatus") == "Ready" and status.get("codexStatus") == "Connected"
                and capabilities.get("contract") == "mcp-project-lifecycle-04"
                and needed <= set(tools)
                and (intent == "environment" or (lifecycle.get("discovery") is True
                     and lifecycle.get("authorizedOpen") is True))
                and (intent not in {"new", "new_from_template"} or lifecycle.get("creation") is True)
                and (intent != "new_from_template" or (lifecycle.get("templateDiscovery") is True
                     and lifecycle.get("templateCreation") is True)))


def emit(s, action, reason=None, preserve=False):
    if not preserve:
        s["pending"] = action
        s["serial"] += 1
    out = {"state": s, "action": action, "actionID": s["serial"]}
    if reason:
        out["reason"] = reason
    if action == "launch_shipper":
        out["application"] = APP
    if action == "wait_connection":
        out["delaySeconds"] = 3
    if action == "list_projects":
        out["arguments"] = {"name": s["intent"]["name"]}
    if action == "list_projects" and s["readRetries"]:
        out["delaySeconds"] = 1
    if action == "open_project":
        out["arguments"] = {"candidateRef": s["candidate"]}
    if action == "create_project":
        out["arguments"] = {"name": s["intent"]["name"],
                            "creationAttemptID": s["intent"]["creationAttemptID"]}
    if action == "list_project_templates":
        out["arguments"] = {"query": s["intent"]["templateIntent"]}
    if action == "create_project_from_template":
        out["arguments"] = {"name": s["intent"]["name"],
                            "creationAttemptID": s["intent"]["creationAttemptID"],
                            "templateID": s["template"]}
    if action == "probe_context":
        out["tool"] = "list_locales"
        out["arguments"] = {k: s["bound"][k] for k in ("projectID", "projectSessionID")}
    if action == "continue_workflow":
        out["context"] = s["bound"]
    return out


def stop(s, reason, phase="FAILED"):
    s["phase"] = phase
    return emit(s, "stop", reason)


def decision(s, reason):
    s["phase"] = "USER_DECISION_REQUIRED"
    s["bound"] = None
    if s["decisionUsed"]:
        return emit(s, "stop", reason)
    s["decisionUsed"] = True
    return emit(s, "user_decision", reason)


def retry_read(s, action, reason):
    if s["readRetries"] >= 2:
        return stop(s, reason)
    s["readRetries"] += 1
    return emit(s, action, reason)


def project_action(s):
    if s["bound"]:
        return emit(s, "inspect_project")
    if s["intent"]["kind"] == "environment":
        s["phase"] = "READY"
        return emit(s, "continue_workflow")
    if s["intent"]["kind"] == "new":
        if s["createCount"] >= 3:
            return stop(s, "creation_unresolved_do_not_start_new_attempt")
        s["createCount"] += 1
        return emit(s, "create_project")
    if s["intent"]["kind"] == "new_from_template":
        return emit(s, "list_project_templates")
    # Existing-project preparation observes the current native context first.
    # Discovery/open is acquisition for absent or different projects, never a
    # verification ritual for an already-correct active project.
    return emit(s, "inspect_project")


def project_name(value):
    if not isinstance(value, str):
        return None
    value = value.strip()
    if value.lower().endswith(".shipper"):
        value = value[:-8].rstrip()
    return value.casefold() or None


def context(value):
    if not isinstance(value, dict) or not all(valid_uuid(value.get(k)) for k in ("projectID", "projectSessionID")):
        raise ValueError("invalid_context")
    if type(value.get("projectRevision")) is not int or value["projectRevision"] < 1:
        raise ValueError("invalid_revision")
    result = {k: value.get(k) for k in ("projectID", "projectSessionID", "projectRevision", "committedGeneration")}
    if result["committedGeneration"] is None:
        result["committedGeneration"] = (value.get("persistence") or {}).get("committedGeneration")
    return result


def transition(previous, event, now, data=None):
    if type(now) not in (int, float) or not math.isfinite(now) or now < 0 or not isinstance(event, str):
        raise ValueError("invalid_observation")
    data = data or {}
    if not isinstance(data, dict):
        raise ValueError("invalid_data")
    if previous is None:
        if event != "start":
            raise ValueError("start_required")
        intent = data.get("intent", {})
        kind = intent.get("kind")
        expected = {"kind"} if kind == "environment" else {"kind", "name"}
        if kind in {"new", "new_from_template"}:
            expected.add("creationAttemptID")
        if kind == "new_from_template":
            expected.add("templateIntent")
        if kind not in {"environment", "existing", "new", "new_from_template"} or set(intent) != expected:
            raise ValueError("invalid_intent")
        if kind != "environment" and (not isinstance(intent["name"], str) or not intent["name"].strip()):
            raise ValueError("name_required")
        if kind in {"new", "new_from_template"} and (not valid_uuid(intent["creationAttemptID"]) or intent["creationAttemptID"] != intent["creationAttemptID"].lower()):
            raise ValueError("attempt_required_before_dispatch")
        if kind == "new_from_template" and (not isinstance(intent["templateIntent"], str) or not intent["templateIntent"].strip()):
            raise ValueError("template_required")
        required = data.get("requiredTools", [])
        if not isinstance(required, list) or not all(isinstance(t, str) for t in required):
            raise ValueError("invalid_tools")
        s = dict(phase="PREPARING", pending="", serial=0, intent=copy.deepcopy(intent), requiredTools=required,
                 time=now, launchUsed=False, probes=0, waitSince=None, readRetries=0,
                 openCount=0, createCount=0, decisionUsed=False, bound=None, candidate=None, template=None)
        return emit(s, "check_connection")
    if not isinstance(previous, dict) or set(previous) != KEYS:
        raise ValueError("invalid_state")
    s = copy.deepcopy(previous)
    if (s["phase"] not in PHASES or type(s["time"]) not in (int, float)
            or not math.isfinite(s["time"]) or now < s["time"]
            or any(type(s[k]) is not int or s[k] < 0 for k in ("serial", "probes", "readRetries", "openCount", "createCount"))
            or any(type(s[k]) is not bool for k in ("launchUsed", "decisionUsed"))):
        raise ValueError("invalid_state")
    s["time"] = now
    if s["phase"] in {"READY", "FAILED", "CANCELLED"} or s["pending"] == "stop":
        return emit(s, "stop", "terminal", preserve=True)
    if event == "start" or data.get("actionID") != s["serial"]:
        return emit(s, "await_pending", "stale_or_pending", preserve=True)
    if event == "cancelled":
        return stop(s, "cancelled", "CANCELLED")
    if event == "mutation_unknown":
        return stop(s, "workflow_reconciliation_required")
    pending = s["pending"]
    if pending == "user_decision":
        if event == "completed":
            if "name" in data:
                if s["intent"]["kind"] != "existing" or not isinstance(data["name"], str) or not data["name"].strip():
                    return stop(s, "new_intent_requires_separate_invocation")
                s["intent"]["name"] = data["name"]
            s["phase"] = "PREPARING"
            s["waitSince"] = None
            s["probes"] = 0
            return emit(s, "check_connection")
        return emit(s, "await_pending", preserve=True)
    if event == "disabled":  # only proven RESET-C OFF, never transport absence
        return decision(s, "enable_codex_access")
    if event == "configuration_missing":
        return decision(s, "repair_shipper_setup")
    if pending in {"check_connection", "wait_connection"}:
        if event == "connection":
            if not compatible(data.get("status", {}), data.get("capabilities", {}), data.get("tools", []),
                              s["intent"]["kind"], s["requiredTools"]):
                return stop(s, "incompatible_capabilities")
            s["waitSince"] = None
            return project_action(s)
        if event == "unavailable":
            if s["waitSince"] is None:
                s["waitSince"] = now
            return emit(s, "observe_host")
    if pending == "observe_host":
        if event == "stopped_validated" and not s["launchUsed"]:
            s["launchUsed"] = True
            return emit(s, "launch_shipper")
        if event in {"running", "launching", "stopped_validated"}:
            if s["probes"] >= 6 or now - s["waitSince"] >= 30:
                return stop(s, "readiness_timeout")
            s["probes"] += 1
            return emit(s, "wait_connection")
    if pending == "launch_shipper":
        if event == "launch_failed":
            return stop(s, "launch_failed")
        if event == "launch_dispatched":
            s["waitSince"] = now  # single reserved launch, not old preflight timer
            s["probes"] = 0
            return emit(s, "check_connection")
    if pending == "list_projects" and event == "projects":
        # Core's exact-name filter owns accepted comparison semantics and global ambiguity.
        matches = [p for p in data.get("projects", []) if isinstance(p, dict)]
        if not matches:
            return decision(s, "identify_intended_project")
        if len(matches) != 1 or matches[0].get("resolution") == "AMBIGUOUS":
            return decision(s, "ambiguous_project")
        if data.get("nextCursor") is not None:
            return decision(s, "ambiguous_project")
        candidate = matches[0]
        if candidate.get("resolution") != "EXACT_UNIQUE":
            return retry_read(s, "list_projects", "project_unresolved")
        ref = candidate.get("candidateRef", "")
        if not isinstance(ref, str) or not re.fullmatch(r"[a-f0-9]{64}", ref):
            return stop(s, "invalid_project_reference")
        if s["openCount"] >= 3:
            return stop(s, "open_unresolved")
        s["candidate"] = ref
        s["openCount"] += 1
        return emit(s, "open_project")
    if pending == "list_project_templates" and event == "templates":
        matches = [t for t in data.get("templates", []) if isinstance(t, dict)]
        if not matches:
            return decision(s, "identify_intended_template")
        if len(matches) != 1 or matches[0].get("resolution") != "EXACT_UNIQUE":
            return decision(s, "ambiguous_template")
        template_id = matches[0].get("templateID", "")
        if not isinstance(template_id, str) or not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]{0,239}", template_id):
            return stop(s, "invalid_template_reference")
        if s["template"] is not None and s["template"] != template_id:
            return stop(s, "template_identity_changed")
        if s["createCount"] >= 3:
            return stop(s, "creation_unresolved_do_not_start_new_attempt")
        s["template"] = template_id
        s["createCount"] += 1
        return emit(s, "create_project_from_template")
    if pending in {"open_project", "create_project", "create_project_from_template"}:
        if event == "opened":
            if data.get("result", {}).get("status") != "OPENED":
                return stop(s, "unverified_open")
            s["bound"] = context(data["result"])
            return emit(s, "inspect_project")
        if event == "access_missing":
            return decision(s, "configure_projects_folder" if pending in {"create_project", "create_project_from_template"} else "restore_project_access")
        if event == "unknown" or (pending == "open_project" and event == "ref_expired"):
            if pending in {"create_project", "create_project_from_template"}:
                # D.1 is the only allowed replay: same attempt, fresh readiness first.
                return retry_read(s, "check_connection", "reconcile_same_creation_attempt")
            return retry_read(s, "list_projects", "reconcile_exact_open")
        if event == "refused":
            return stop(s, data.get("reason", "core_refused"))
    if pending == "inspect_project" and event == "no_active_project" and not s["bound"]:
        return emit(s, "list_projects")
    if pending == "inspect_project" and event == "inspection":
        result = data.get("result")
        observed = context(result)
        if not s["bound"]:
            if s["intent"]["kind"] != "existing" or project_name(result.get("title")) != project_name(s["intent"]["name"]):
                return emit(s, "list_projects")
            s["bound"] = observed
        elif any(observed[k] != s["bound"][k] for k in ("projectID", "projectSessionID")):
            return stop(s, "project_context_mismatch")
        persistence = data["result"].get("persistence") or {}
        if persistence.get("state") in {"needsUserAction", "failed"}:
            return decision(s, "project_persistence_attention")
        s["bound"] = observed
        return emit(s, "probe_context")
    if pending == "probe_context" and event == "active_context_stale":
        if s["readRetries"] >= 1:
            return stop(s, "active_context_changed")
        s["readRetries"] += 1
        s["bound"] = None
        return emit(s, "inspect_project", "reobserve_active_context")
    if pending == "probe_context" and event == "probe":
        # Correlation to actionID binds this successful exact-context read to its dispatch.
        if not isinstance(data.get("result", {}).get("locales"), list) or "code" in data["result"]:
            return stop(s, "context_not_workable")
        s["phase"] = "READY"
        return emit(s, "continue_workflow")
    if pending in {"list_projects", "list_project_templates", "inspect_project", "probe_context"} and event == "unavailable":
        return retry_read(s, "check_connection", "read_recovery_exhausted")
    if event == "refused":
        return stop(s, data.get("reason", "core_refused"))
    return emit(s, "await_pending", "unexpected_observation", preserve=True)


def system_time():
    """Boot-relative seconds shared by processes; never a caller clock origin.

    macOS sandboxed executions can expose process-relative mach_absolute_time
    through Python monotonic(). mach_continuous_time retains the system basis
    and includes sleep. A reboot/backward clock fails closed in transition().
    """
    if sys.platform == "darwin":
        class Timebase(ctypes.Structure):
            _fields_ = [("numer", ctypes.c_uint32), ("denom", ctypes.c_uint32)]
        lib = ctypes.CDLL(None)
        lib.mach_continuous_time.restype = ctypes.c_uint64
        lib.mach_continuous_time.argtypes = []
        lib.mach_timebase_info.argtypes = [ctypes.POINTER(Timebase)]
        scale = Timebase()
        if lib.mach_timebase_info(ctypes.byref(scale)) != 0 or not scale.denom:
            raise ValueError("clock_unavailable")
        return lib.mach_continuous_time() * scale.numer / scale.denom / 1e9
    return time.monotonic_ns() / 1e9


def main():
    category = "request"
    try:
        raw = sys.stdin.read(32769)
        req = json.loads(raw)
        if len(raw) > 32768 or not isinstance(req, dict) or not {"state", "event"} <= set(req) or set(req) - {"state", "event", "data"}:
            raise ValueError("invalid_request")
        category = "clock"
        now = system_time()
        category = "observation"
        print(json.dumps(transition(req["state"], req["event"], now, req.get("data")), allow_nan=False))
    except (ValueError, TypeError, KeyError, AttributeError, OSError) as error:
        # Only reducer-owned fixed reason tokens can enter diagnostics. Never
        # echo arbitrary exception strings, request values or authority data.
        safe_reasons = {"invalid_request", "invalid_observation", "invalid_data", "start_required",
                        "invalid_intent", "name_required", "attempt_required_before_dispatch",
                        "invalid_tools", "invalid_state", "invalid_context", "invalid_revision",
                        "clock_unavailable"}
        reason = str(error) if str(error) in safe_reasons else "malformed_" + category
        print(json.dumps({"action": "stop", "reason": "invalid_policy_input",
                          "diagnostic": {"category": category, "validationClass": type(error).__name__,
                                         "validationReason": reason}}))
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
