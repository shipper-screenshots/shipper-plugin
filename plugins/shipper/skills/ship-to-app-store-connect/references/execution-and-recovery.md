# Shipping execution and recovery

Read the relevant complete [generated types](../../../references/mcp-mutation-contract.d.ts) and [canonical schemas](../../../references/mcp-mutation-contract.json) when host declarations hide structure. These are generated from the actual registry, not a substitute authority. Preserve exact projectID/projectSessionID for every call. Never send fields, effects, raw ASC identities, authorization booleans or credentials.

## Preparation and dispatch

`prepare_shipping`: pass `content` (`infer` for generic Ship), and only current resolved `locales`/`specifications` when requested. Omitted scope uses Core semantics, not guessed defaults. Explicit all-localizations requires the full currently authorized list, not just the locales that happen to have content. Core decides eligibility and blockers. Metadata-only requests must not include specifications. There is no field filter.

Preparation performs remote reads and private local preparation, not publication. If `preparing`, poll the same arguments without scope changes until Core returns a review, blocker or no-change. Do not execute before `prepared`. Retain the exact returned operationRef before dispatch. Check review against intent, including replacement counts and localesToCreate. A deterministic authorized `prepared` response needs no second confirmation. `no_change` means up to date; do not execute.

`execute_shipping`: use only the retained Core operationRef (and exact returned continuationRef for a later Core-authorized continuation). One dispatch per admission; `executing` is not success. Immediately observe the same operation. Do not let automatic retry wrappers replay execution.

`observe_shipping`: use the known operationRef and exact context. Poll while executing or reconciling with paced checks and backoff; never rapid-spin. Scale the observation horizon to the admitted work, especially multi-locale screenshot batches. Unchanged execution is expected, is not user-facing progress, and must not be narrated repeatedly. Expiration of a local wait budget alone is neither terminal nor actionable: continue observing the same operation in the same task without replay or replacement. Finish only when Core returns a terminal result, or when a genuine boundary such as unavailable MCP access or required user action prevents further observation. At such a boundary, retain the reference and report only proven per-locale outcomes plus explicitly unconfirmed scope; never claim or imply probable completion, and never claim background monitoring that was not scheduled.

## Boundaries and recovery

| Observation | Next step |
| --- | --- |
| Execute response lost, timeout, `mutation_outcome_unknown`, or `unknown` | Observe the SAME operationRef. No blind execute, new prepare, new Ship or failure claim. |
| MCP OFF / connection inaccessible | Stop all MCP calls, including observe. Core retains evidence internally; do not claim continued MCP observation. After reactivation, recover exact context and observe the known operation first. |
| Publishing OFF | Stop preparation/new mutation. Direct user to enable Agent Publishing in Shipper; no MCP enable, substitute tool approval or manufactured Keychain prompt. With MCP ON, known operations may still be observed/reconciled. |
| PRO required/unknown | Report the actual entitlement action; no bypass or Plugin monetization logic. Never describe unknown as Free. |
| Keychain interaction required | Explain the legitimate macOS credential action; it is credential access only, never Ship approval. Do not reacquire while pending or manufacture a prompt if access already exists. |
| Target missing/ambiguous | Ask the minimum exact app/version/platform choice. No bind/replacement by inference. |
| Sparse/missing screenshot pair | Clarify a supported exact scope; no widening, dropping, splitting operations or automatic authoring. |
| `partial` | Preserve successful outcomes; inspect same operation's recovery state and report unresolved/failed scope truthfully. |
| Fresh Core continuationRef after observation, not reconciling | Execute only that opaque continuation on the SAME operationRef, at most once for that returned reference; Core revalidates every authority. Then observe again. Never reconstruct recovery effects or replay completed units. |
| Recovery blocked or no safe continuation | Stop with the actionable reason. Unknown without current reconciliation truth remains unknown. |
| `applied` / `no_change` / `failed` / `cancelled` | Report Core's result and individual outcomes; never replace failed/partial scope with global success. |
| `reprepare_required` | Only after Core proves the prior admission cannot mutate and no dispatched/unknown work remains may a fresh intentional preparation proceed. If unclear, observe/stop. Never use this as a timeout workaround. |

After user resolves a boundary, consume fresh Core state. Publishing re-enable is not proof of completion or permission to replay; a known dispatched operation is observed first. If an exact context or reference is no longer recoverable, report the blocker rather than inventing new authority.
