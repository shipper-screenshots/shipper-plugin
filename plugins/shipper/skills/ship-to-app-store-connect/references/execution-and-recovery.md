# Shipping execution and recovery

Read the relevant complete [generated types](../../../references/mcp-mutation-contract.d.ts) and [canonical schemas](../../../references/mcp-mutation-contract.json) when host declarations hide structure. These are generated from the actual registry, not a substitute authority. Preserve exact projectID/projectSessionID for every call. Never send fields, effects, raw ASC identities, authorization booleans or credentials.

## Preparation and dispatch

`prepare_shipping`: pass `content` (`infer` for generic Ship and “ship everything”; `screenshots` for device screenshots only; `assets` for Header/Search only; `media` for both image categories; `metadata`, `both` and `everything` for their exact named combinations), and only current resolved `locales`/`specifications` when requested. Omitted scope uses Core semantics, not guessed defaults. Explicit all-localizations requires the full currently authorized list, not just the locales that happen to have content. Core decides eligibility and blockers. Metadata-only requests must not include specifications. There is no field filter.

Preparation performs remote reads and private local preparation, not publication. If `preparing`, poll the same arguments without scope changes until Core returns a review, blocker or no-change. Do not execute before `prepared`. Retain the exact returned operationRef before dispatch. For `review.api = asset_library`, inspect every typed `destinations` entry: locale, specification, category, placement type, Apple group, count and replacement count. `screenshots` is empty in that review. `review.api = legacy` identifies an old operation being observed under its original reference; only then does `screenshots[].displayType` retain the old API meaning. Check the full review against intent, including localesToCreate. A deterministic authorized `prepared` response needs no second confirmation. `no_change` means up to date; do not execute.

`execute_shipping`: use only the retained Core operationRef (and exact returned continuationRef for a later Core-authorized continuation). One dispatch per admission; `executing` is not success. Immediately observe the same operation. Do not let automatic retry wrappers replay execution.

`observe_shipping`: use the known operationRef and exact context. Poll while executing or reconciling with paced checks and backoff; never rapid-spin. Scale the observation horizon to the admitted work, especially multi-locale screenshot batches. Unchanged execution is expected, is not user-facing progress, and must not be narrated repeatedly. Expiration of a local wait budget alone is neither terminal nor actionable: continue observing the same operation in the same task without replay or replacement. Finish only when Core returns a terminal result, or when a genuine boundary such as unavailable MCP access or required user action prevents further observation. At such a boundary, retain the reference and report only proven per-locale outcomes plus explicitly unconfirmed scope; never claim or imply probable completion, and never claim background monitoring that was not scheduled.

For each requested locale/category outcome, use Core's `state`, `progress`, `rootCause` and `recoveryState` independently. `progress.verified` is the completed screenshot count; planned, reserved, uploaded or committed alone is not terminal proof. `rootCause` explains the original failure and must remain visible even when `recoveryState` says the old set is intact or a new preparation is required. Render exact locale results as Done, Failed, Not sent or Unconfirmed in the user's language. Never summarize a global dispatch as though all locale units completed, and never let the first active locale stand in for the rest of the batch.

## Boundaries and recovery

| Observation | Next step |
| --- | --- |
| Execute response lost, timeout, `mutation_outcome_unknown`, or `unknown` | Observe the SAME operationRef. No blind execute, new prepare, new Ship or failure claim. |
| MCP OFF / connection inaccessible | Stop all MCP calls, including observe. Core retains evidence internally; do not claim continued MCP observation. After reactivation, recover exact context and observe the known operation first. |
| Publishing OFF | Stop preparation/new mutation. Direct user to enable Agent Publishing in Shipper; no MCP enable, substitute tool approval or manufactured Keychain prompt. With MCP ON, known operations may still be observed/reconciled. |
| PRO required/unknown | Report the actual entitlement action; no bypass or Plugin monetization logic. Never describe unknown as Free. |
| Keychain interaction required, or a result saying Shipper may be waiting for a macOS Keychain authorization | Ask the user once to answer the Keychain prompt shown by Shipper; it is credential access only, never Ship approval. Then call the same tool again with the same arguments or operationRef. This is not a failure. Never manufacture a prompt. |
| Target missing/ambiguous app | Ask the minimum exact app choice. Never bind another app by inference. |
| Target version on the wrong platform for the requested content | Bind the same app's editable version of the needed platform (observed IDs, returned expectedContext), state the switch, then prepare. If none exists, report it in product terms. |
| `NOT FINISHED` in a result | Call the named tool again immediately with the same arguments/operationRef. No user-facing message until a final status. |
| Sparse/missing screenshot pair | Clarify a supported exact scope; no widening, dropping, splitting operations or automatic authoring. |
| `partial` | Preserve successful outcomes; inspect same operation's recovery state and report unresolved/failed scope truthfully. |
| Fresh Core continuationRef after observation, not reconciling | Execute only that opaque continuation on the SAME operationRef, at most once for that returned reference; Core revalidates every authority. Then observe again. Never reconstruct recovery effects or replay completed units. |
| Recovery blocked or no safe continuation | Stop with the actionable reason. Unknown without current reconciliation truth remains unknown. |
| `applied` / `no_change` / `failed` / `cancelled` | Report Core's result and individual outcomes; never replace failed/partial scope with global success. |
| `reprepare_required` | Only after Core proves the prior admission cannot mutate and no dispatched/unknown work remains may a fresh intentional preparation proceed. If unclear, observe/stop. Never use this as a timeout workaround. |

After user resolves a boundary, consume fresh Core state. Publishing re-enable is not proof of completion or permission to replay; a known dispatched operation is observed first. If an exact context or reference is no longer recoverable, report the blocker rather than inventing new authority.
