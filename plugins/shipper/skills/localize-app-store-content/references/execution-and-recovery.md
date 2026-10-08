# Localization execution and recovery

Read this at request construction or recovery. The [generated argument/result types](../../../references/mcp-mutation-contract.d.ts) and [canonical schemas](../../../references/mcp-mutation-contract.json) supply structure; the [shared Core authority](../../../references/core-authority.md) supplies compatibility and freshness. Consult inputSchemas/outputSchemas for inspect_localization and apply_localization. Use live contracts over guessed shapes; a packaged/live mismatch is a stop, not permission to override runtime.

## Request authority

- Resolve project/session through current project inspection. Obtain snapshotRef, exact addresses and authorizationRef from localization inspection. Consume all required pages on that snapshot. Use returned nextCursor, never compute identity from pagination position.
- A new target is inspected against source content without creating it. An existing target exposes its mapped source values; use durable correspondence. An existing Metadata-only locale does not imply target Canvases exist. If requested structural expansion is unsupported by UPDATE, stop and explain the actual capability gap; do not recreate or fabricate mappings.
- Use the actual sourceLocale (including und when unresolved identity remains); resolvedSourceLanguage provides evidenced language context only where accepted. Normalize target intent through current project locale observations and the live identity contract; do not derive regional identity from folder spelling.
- For CREATE, addresses refer to selected source Canvases/Text. For UPDATE, they refer to existing target Canvases/Text. Only returned mappings establish newly created target IDs. Coverage includes intentional preserve decisions and explicit nonapplicable empty arrays; Metadata-only and screenshot-only requests must not silently expand scope.
- `overwrite: true` needs the current authorizationRef for that exact protected value and actual user approval. A Preserved Word exception additionally uses the source occurrence index and exact spelling from inspected preservedOccurrences. The index addresses an occurrence, not a Canvas identity. Never reuse a reference across values, locales, sessions or changed snapshots; no overwriteAll.
- For an explicit FILL/create request, empty edited Metadata is not meaningful content to overwrite: include the requested empty field as a normal value decision and do not send `overwrite: true`. Preserve non-empty edited or otherwise protected Metadata siblings unless exact scoped replacement is explicitly authorized. Core inspection is final authority for whether overwrite authorization is required; this rule never applies to screenshot Text or bypasses Preserved Words.
- Source choices are primary or an authorizedSourceRef. Match catalog candidates through actual product evidence. Never substitute folderRef, checksum, filename, path, bytes or a staged ref for authorizedSourceRef. Existing source relationships are context, not permission to invent source authority. UPDATE preserves valid existing sources by omitting source decisions; no catalog scan is needed for Text, Metadata or style-only work. CREATE screenshot work still discovers sources. UPDATE discovery is reserved for explicit screenshot changes, missing/invalid sources or genuinely new mapping.
- The transactionID is caller-generated once before dispatch. Keep it in working context through receipt recovery. Consume the resulting project revision and actual mapping. A content commit and subsequent layout refinements have separate Undo/persistence generations.
- Existing Canvas tools accept scope with locale/specification. Read the scoped Canvas revision before preview/edit and consume returned revisions. No native locale/selection switch or structural operation is required for addressing.

## Error recovery

| Signal | Required next action |
| --- | --- |
| requires_pro | Stop before translation or writes; explain Shipper PRO requirement. No low-level or conversational injection bypass. |
| entitlement_unknown | Stop; Shipper needs to verify PRO access. Do not infer Free or bypass verification. |
| no active project / application unavailable | For read/pre-dispatch availability, obtain the exact context through [internal Autonomy preparation](../../prepare-shipper/SKILL.md), then repeat the accepted preflight. Transport absence is not consent OFF. Any uncertain mutation still requires the receipt recovery below; preparation never authorizes replay. |
| source_locale_unresolved | Establish language from authoritative content only where resolved context is supported; otherwise ask. |
| wrong_project_session | Reinspect the intended project; old refs/receipts do not authorize another session. |
| stale_revision / stale_pagination_snapshot | Reinspect all necessary current state and reconcile intent; do not reuse stale pages or payloads. |
| target_already_exists / target_missing | Reinspect; select CREATE/UPDATE according to current existence and requested scope. Do not delete/recreate to force a mode. |
| unmatched_source_target | Preserve affected values; resolve actual correspondence or report the limitation. Approval cannot repair missing identity. |
| manual_overwrite_authorization_required | Preserve and ask before replacing the exact affected protected content, unless that precise approval already exists. |
| stale_overwrite_authorization | Reinspect; reconstruct exact authority. Ask again only if current content/scope is no longer covered by the user's approval. |
| preserved_word_violation | Restore the required spellings/occurrences, or use a fresh targeted exception already explicitly requested by the user. Do not silently drop terms. |
| invalid_metadata | Read current limits/semantics, rewrite the invalid value, then revalidate within the bounded confirmed-noncommit recovery rule. No truncation. |
| `$.metadata[…].content.direction is not allowed` or `$.text[…].content.direction is not allowed` | Remove only that agent-authored field before dispatch. Direction is automatic; never replace it with another direction value or ask the user to choose one. |
| generic invalid_argument without a precise cause | Stop. Do not change source language, unrelated fields, or retry an equivalent payload. |
| ambiguous Screenshot Source | Ask which candidate/collection or whether primary fallback is intended. Do not treat ambiguity as no candidates. |
| invalid_screenshot_source / stale catalog authority | Rediscover current authorized sources and reassess evidence; no path substitution or blind retry. |
| request_too_large / response_too_large | Use smaller inspection pages if applicable; do not truncate content or split a single locale commit. Report an indivisible contract limit. |
| interactive_edit_in_progress | Let the user finish/cancel their edit; never close it or its Undo group. |
| mutation_outcome_unknown / transaction_already_committed | Inspect transactionID and canonical locale/revision state. If applied, continue review/persistence; never replay. If unresolved, stop. |
| save failure | Report applied content and failed disk save; use native recovery, not another apply. |
| needsUserAction: chooseDestination | Ask the user to choose a writable destination through Shipper Save/Save As. |
| needsUserAction: authorizeAccess | Ask the user to restore access through Shipper's native folder/file authorization, then re-observe. |
| destinationUnavailable / serializationFailed / writeFailed | Report the safe reason; use native Save/Save As or retry after the native problem is resolved. Never expose private paths or raw NSError. |

For an interrupted process, absent receipt/not_found_in_session alone never proves non-commit. Inspect durable locale/content/mappings and current authority; if still inconclusive, report unknown and stop. Do not rollback already successful locales. A deterministic correction is allowed only when the diagnostic names the actual cause and the next payload changes that exact cause under still-valid authority. Shared bounded correction rules apply to proven pre-dispatch noncommits; they do not authorize source-language experiments, unrelated payload changes, equivalent invalid requests, repeated shape probing or uncertain replay.

## Call-sequence examples

These are instruction-contract scenarios, not an executable adapter or a claim about model behavior. `translate`, `ask`, `confirm`, `review`, `set_consistency`, `primary`, `stop` and `report` are reasoning/user events, not MCP tools. Reinspection after a question is necessary when freshness may have changed. Unless shown, examples assume an already verified current project/session; reinspect it if needed. Ordinary catalog/pagination/detail reads are omitted from paths that do not need them. Check capability again before applying after a delay.

| Scenario | Ordered events |
| --- | --- |
| PRO | get_automation_capabilities → inspect_project → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| Free | get_automation_capabilities → stop → report |
| UNKNOWN | get_automation_capabilities → stop → report |
| Manual overwrite | get_automation_capabilities → inspect_localization → ask → confirm → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| Source ambiguity | get_automation_capabilities → inspect_localization → browse_authorized_screenshot_catalog → ask → confirm → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| No localized source | get_automation_capabilities → inspect_localization → browse_authorized_screenshot_catalog → primary → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| RTL refinement | get_automation_capabilities → inspect_localization → translate → apply_localization → get_canvas_state → preview_canvas → review → edit_canvas → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| Metadata only | get_automation_capabilities → inspect_localization → translate → apply_localization → inspect_project → report |
| Lost response already applied | get_automation_capabilities → inspect_localization → translate → apply_localization → inspect_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| Multi-locale FR, DE, AR | get_automation_capabilities → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| CREATE screenshot sources | get_automation_capabilities → inspect_localization → browse_authorized_screenshot_catalog → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| UPDATE Text-only valid sources | get_automation_capabilities → inspect_localization → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| UPDATE Metadata-only valid sources | get_automation_capabilities → inspect_localization → translate → apply_localization → inspect_project → report |
| UPDATE typography-only valid sources | get_automation_capabilities → inspect_localization → get_canvas_state → preview_canvas → edit_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| UPDATE invalid source | get_automation_capabilities → inspect_localization → browse_authorized_screenshot_catalog → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| UPDATE explicit screenshot change | get_automation_capabilities → inspect_localization → browse_authorized_screenshot_catalog → translate → apply_localization → preview_canvas → review → set_consistency → preview_canvas → inspect_project → report |
| Set harmonization | get_automation_capabilities → inspect_localization → translate → apply_localization → preview_canvas → edit_canvas → review → set_consistency → edit_canvas → preview_canvas → inspect_project → report |


In the lost-response example, the second localization inspection includes the original transactionID and proves the transaction is applied; the trace deliberately contains no second apply. In the multi-locale example each apply has its own target and transactionID, and each next inspection consumes current revisions. If FR and DE succeed but AR is rejected, report FR/DE applied and AR not applied; if AR's outcome is uncertain, report unknown instead. Metadata-only has no affected Canvas to preview. Targeted layout/source feedback starts with fresh capability and scoped observations, not wholesale retranslation.

## Target locale authority

Discover with inspect_localization before translation, using no target or targetIntent. Use the exact resolved targetLocale for subsequent inspection, apply and completion verification. target_locale_ambiguous requires the user to select among candidates. For target_locale_unavailable with project-only authority, follow the conditional Target reassessment in [the Skill](../SKILL.md) using read_target_context and refresh_target_context; do not ask the user to connect or perform the refresh manually. If the locale remains unavailable after that bounded handoff, stop its unsupported localization. Do not substitute a generic language or edit_canvas workaround. Availability changes invalidate snapshots; reinspect after target changes. Existing unavailable locales remain readable for diagnosis, not authorized for apply.

The typography-only trace deliberately performs no translation/content transaction. `set_consistency` is a single bounded reasoning pass, not a new tool. Use the source hierarchy, correct unjustified font-size divergence, retain length-justified exceptions, and preserve protected text during style-only changes. Final preview follows harmonization and precedes persistence. Completion omits source commentary for unchanged valid sources.
