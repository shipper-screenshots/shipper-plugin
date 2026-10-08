"""Pure Plugin orchestration decisions. No I/O, content validation or authority.

Intent is model-interpreted, not a keyword parser. Evidence comes from the live
contracts. Returned actions name workflow steps, never authorize MCP execution.
"""

COMPOSITION = {
    "create_metadata": "author-app-store-metadata:source_fill",
    "translate_metadata": "localize-app-store-content:metadata",
    "create_screenshots": "create-screenshot-set",
    "localize_screenshots": "localize-app-store-content:screenshots",
    "adapt_screenshots": "agent-adaptive-screenshots",
}


def plan(intent):
    """Keep interpreted explicit scope; eligibility is exclusively Core's work."""
    if intent.get("fields"):
        return {"action": "clarify_metadata_category"}
    content = intent.get("content", "infer")
    if content not in ("infer", "screenshots", "metadata", "both"):
        return {"action": "clarify_content"}
    if intent.get("localeResolution", "resolved") != "resolved":
        return {"action": "clarify_locale"}
    actions = intent.get("preceding", [])
    if any(action not in COMPOSITION for action in actions):
        return {"action": "clarify_preceding_capability"}
    steps = ["exact_project_session"]
    for action in actions:
        steps.extend([COMPOSITION[action], "verify_canonical_saved"])
    if not actions:
        steps.append("verify_canonical_saved")
    steps.extend(["fresh_prepare", "review_core", "execute_if_prepared", "observe_same"])
    return {"action": "workflow", "content": content,
            "localeScope": intent.get("localeScope", "core_default"), "steps": steps}


def next_action(observation, *, known_operation=False, continuation_seen=False):
    """Safety ordering over observed workflow state, not a Core recovery algorithm."""
    if observation.get("mcp") == "off":
        return "wait_mcp_enable"
    if observation.get("uncertain") or observation.get("resumed") and known_operation:
        return "observe_same" if known_operation else "stop_missing_operation"
    if observation.get("publishing") == "off":
        return "observe_same" if known_operation else "enable_publishing_in_shipper"
    if observation.get("boundary") in ("pro", "keychain", "target", "sparse"):
        return "stop_" + observation["boundary"]
    if observation.get("persistence", "saved") != "saved":
        return "reconcile_local_no_ship"
    status = observation.get("status")
    if status == "preparing":
        return "poll_same_preparation"
    if status == "prepared":
        return "execute_once" if known_operation and observation.get("reviewMatches") is True else "stop_review"
    if status == "no_change":
        return "report_up_to_date"
    if status in ("executing", "partial", "unknown") or observation.get("reconciling"):
        if not known_operation:
            return "stop_missing_operation"
        if observation.get("reconciling") or status == "executing":
            return "observe_same"
        if observation.get("recoveryBlocked"):
            return "stop_recovery_preserve_outcomes"
        if observation.get("continuationRef") and observation.get("fromObservation") and not continuation_seen:
            return "execute_exact_continuation_then_observe"
        return "observe_same" if status == "unknown" else "stop_partial_preserve_outcomes"
    if status in ("applied", "failed", "cancelled"):
        return "report_core_outcomes"
    return "stop_core_reason"
