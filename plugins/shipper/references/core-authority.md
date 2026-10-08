# Core Authority and Compatibility

These rules apply to every Shipper Skill.

## Live authority

- Shipper Core and the active Shipper MCP server are authoritative. Skills teach workflow; they do not define executable capability.
- Use `get_connection_status`, `inspect_project`, `get_automation_capabilities` when mutation planning requires it, and the current MCP schemas and results as live authority.
- `phase-7.3-cleanup` is the historical minimum compatibility baseline, not an exact-version lock. The current source/package contract is `mcp-project-lifecycle-04` (server 6.4.0, bridge v7; native template project creation plus Adaptive mcp-adaptive-01, Primary Metadata and Shipping mcp-shipping-01). Internal prepare-shipper orchestration supplies exact workable context to Create/Localize/Metadata; total tool count is not readiness authority. Require lifecycle-04 candidate and template semantics for preparation; older lifecycle contracts are incompatible. Known candidates are not AVAILABLE; only acquisition/open establishes exact trusted context. Primary Metadata additionally requires the live 6.2-compatible `set_source_metadata` tool and all three `inspect_localization.sourceMetadata` modes; a 6.1 runtime must refuse only that capability.
- Do not copy or reconstruct the MCP tool schemas in Skill instructions.
- Stop instead of emulating an unsupported capability or substituting a different operation.

## Technical mutation schema exposure

Some Codex code-mode declarations replace nested mutation inputs with `unknown`.
Before constructing `create_canvas`, `edit_canvas`, `inspect_localization`,
`apply_localization`, `set_source_metadata`, `adapt_screenshot_spec`, `prepare_shipping`, `execute_shipping`, `observe_shipping`, exact `inspect_project`, scoped
`set_screenshot_source` or scoped `list_mockups` arguments, read the relevant
complete declaration in [Generated mutation types](mcp-mutation-contract.d.ts)
whenever the host declaration hides any relevant structure. The companion
[Canonical mutation JSON Schema](mcp-mutation-contract.json) preserves all enum,
required-field, object, array, range, and conditional constraints; consult the
relevant `inputSchemas` entry (or `shipping[].inputSchema` for Shipping) for constraints that TypeScript cannot express.

These files are generated packaging artifacts from Shipper's canonical
`tools/list` response, not independent Skill rules. Compare their `serverVersion`
with the live MCP `get_connection_status.serverVersion` before using them. For
screenshot work, also compare every editable ID returned by `list_screenshot_specs`
and every returned native default with the relevant packaged input-schema enums.
Version equality alone is insufficient: an installed snapshot can be stale while
reporting the same server version. If versions differ, the live version is
unavailable, a discovered ID/default is absent from a required packaged enum,
or the exposed live schema conflicts with the packaged schema, stop and report
the compatibility gap. Do not substitute an older format or retry alternate
payload shapes to get past a local schema rejection.
Do not use the snapshot to override a newer or conflicting live contract.

The generated declaration supplies types and required fields; it does not supply
project IDs, revisions, references, asset authority, value aliases, or permission
to guess corrections. Obtain runtime authority through the existing read workflow
and preserve the bounded deterministic recovery rules below.

## Project identity and freshness

- Before any mutation, inspect the exact prepared project and verify that it is the project the user intends to change.
- If context is unavailable or wrong, obtain the intended exact context through [internal Autonomy preparation](../skills/prepare-shipper/SKILL.md) before mutation. Ask a product identification question only for genuine ambiguity.
- Resolve human names, roles, and order against the current observation, then use the returned IDs.
- Use fresh project session, project revision, Canvas ID, and Canvas revision values. Never guess or synthesize them.
- For sequential dependent mutations, start with the current authoritative revision and dispatch with that `expectedProjectRevision`. After each confirmed success, consume the exact returned `projectRevision` as authority for the next dependent mutation, even when the number is unchanged; also consume returned scoped or Canvas revisions when required. Never calculate a revision or assume it advanced by one.
- If a confirmed-success response lacks an authoritative revision, re-observe before another dependent mutation. If the outcome is uncertain, reconcile or re-observe before dependent work and never infer success. If a request using the correctly chained authority still conflicts, treat it as external or unknown concurrency: stop/reinspect under the existing conflict rules and do not automatically retry.
- Deterministic chaining fixture: dispatch with `expectedProjectRevision: 7`; a confirmed response returning `projectRevision: 8` makes 8 the next expected revision. A confirmed response returning 9 makes 9 the next expected revision, and a confirmed response returning 10 makes 10 authoritative. Do not re-observe between these confirmed dependent successes. External-conflict fixture: after authority 8 is obtained, an external change to 9 must leave an `expectedProjectRevision: 8` request rejected; stop, do not retry, and reinspect.
- Treat runtime references as scoped authority. In particular, `folderRef` and `authorizedSourceRef` are valid only within their documented live scope.
- Never use a filename, user path, App Group path, or other filesystem path as Screenshot Source authority.
- `hasUnsavedChanges` reports current persistence state only. It does not prove whether a requested mutation did or did not occur.

## Availability and project targeting — Phase 11 authority

The canonical Phase 11 Autonomy contract supersedes the older manual launch/open prerequisites. The product requirement is user intent → autonomous Shipper preparation → requested work, with zero normal technical user actions under existing sufficient authority. The ON/OFF connection grant includes Create + Read + Edit; no new permission hierarchy or Create prompt.

A closed app/project, expired ref or safely recoverable authority is not a normal user handoff. Genuine absent/revoked access, new external scope, disabled consent and unresolved product ambiguity remain boundaries. Exact project/resource/session identity, live revisions, entitlements, source authority and the accepted Core ASC authorization policy remain unchanged.

Use [internal Autonomy preparation](../skills/prepare-shipper/SKILL.md) for workflow environment/project prerequisites. It consumes Core recovery, durable create_project and exact request-scoped routing, then verifies inspection and an exact-context read before continuing. Do not bypass live refusals or present technical recovery as a normal user prerequisite. The accepted downstream workflow rules in this document are unchanged.

## Conflict and interruption recovery

- On a stale project session, project revision, or Canvas revision, re-run the necessary observations, reconsider the user's intent against the new canonical state, and construct a fresh mutation.
- Never blindly retry a mutation whose result is stale or uncertain. First determine from canonical observations whether it committed; stop if the outcome remains ambiguous.
- On `folder_ref_not_found`, rediscover the authorized folder and obtain a new `folderRef`.
- On `authorized_source_changed`, rediscover the source. Never silently bind a replacement by filename.
- On `interactive_edit_in_progress`, stop and let the user finish or cancel the edit.
- Never force-close an interactive edit or an Undo group.
- Never invoke Undo or Redo autonomously.

## Deterministic pre-dispatch validation recovery

- A local MCP input-validation rejection that is explicitly confirmed to occur before bridge dispatch is a proven non-commit: no Core mutation, revision transition, or Undo unit occurred.
- After such a rejection, a Skill may submit at most one corrected new request without user confirmation only when the invalid field and value are known, the current authoritative schema supplies one unique correction, the invalid value was agent-authored, and the correction preserves the user's intent and the requested operation.
- The corrected request must preserve the same authoritative IDs, revisions, references, and atomic operation, with only the minimum payload diff required by the schema. This is a corrected new request, not a blind replay.
- A second validation rejection stops the automatic recovery path. Do not probe alternative payload shapes.
- Never use this recovery for `mutation_outcome_unknown`, any post-dispatch ambiguity, `interactive_edit_in_progress`, stale authority without re-observation, an ambiguous constraint, an unsupported capability, an explicit user-authored value, or a correction that changes a destructive or product decision.

## Verification

- Preview each meaningful visual change using the exact committed state returned by MCP.
- A refusal, failed mutation, or read-only check does not justify a visual preview.
- External effects must remain behind the authorization boundaries exposed by Shipper Core/MCP; Skill prose is not authorization. Agent Shipping uses durable native Agent Publishing delegation and exact Core admission, with no mandatory second human confirmation. MCP OFF closes every tool including observe; Publishing OFF permits observation only while MCP is ON.

## Technical inbound transfer

When the live server exposes `transfer_inbound_artifact`, use its generated
[MCP-native transfer contract](inbound-transfer-contract.md),
[canonical schema](inbound-transfer-contract.json) and [types](inbound-transfer-contract.d.ts).
This is technical transport in the connected helper; the existing
[CLI staging contract](inbound-staging-contract.md) remains supported.
Verify live capability/version before orchestration. No payload enters model context.

## Shipping candidate

The dedicated [Ship to App Store Connect Skill](../skills/ship-to-app-store-connect/SKILL.md) orchestrates the three existing Shipping tools. Shipping means existing content, not authoring. Core owns generic inference, six-field category-level Metadata, screenshot locale/spec matrix validation and recovery. Unknown execution is observed through the same operation, never blindly replayed. Repository availability is not installed acceptance; a runtime without the Shipping tools must refuse this workflow.

Repository authority citation (documentation provenance; not a packaged runtime dependency): `docs/v1.1/Shipper Plugin/02-Architecture/Autonomy/Phase-11-Autonomy-Contract.md`.
