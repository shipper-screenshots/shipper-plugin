# Target App — ASC context orchestration V1

Owner: **Agent Shipping / ASC Context Authority**. Repository candidate; installed/Fresh-Codex acceptance is separate. Target App is ASC context, not the image-generated **Creative Target**, and does not change Creative Lab or Design rules.

Read this reference only when the requested workflow needs ASC context. Its [decision policy](target-app-policy.json) is the canonical finite action table used by repository fixtures; consume it with this guidance. It is packaged knowledge, not a new runtime, resolver, cache, session owner or project store. The current live [Target schemas](mcp-mutation-contract.json) and Core responses remain executable authority; never manufacture policy facts as MCP trust flags.

## Activation and handoff from Autonomy

First finish existing prepare-shipper at the exact workable project/session. Do not add Target to preparation, project creation/opening or readiness. A project without Target remains valid. Reuse that exact session; no project recreation to repair Target.

Evaluate the requested work, not keywords alone. The policy activation table takes the ASC dependency of the requested step, not a literal phrase or a caller-controlled flag. `asc_app_identity` means an identifiable app whose ASC context is useful; `future_supported_shipping` is the historical policy key for a Shipping consumer; execution requires the dedicated Shipping Skill and live Shipping tools. A step with no such dependency uses activationFallback and makes no Target call:

- Activate when ASC context is useful to fulfill an identifiable “my app X” request; for all available localizations, ASC localization scope, current/supported ASC platforms or versions, ASC-dependent Metadata, or an explicitly supported Ship consumer. For Shipping, inspect/refresh an existing exact association only: do not automatically bind or replace Target. Ask the missing product choice and require explicit binding intent under this Target contract.
- Skip all Target tools for create/open alone, screenshot inspection/design without ASC dependence, or explicitly supplied local scope that needs no ASC. A named Shipper project or the phrase Creative Target alone is not an ASC dependency. Explicit local languages/platforms do not automatically require network verification.
- If current verified context from an immediately preceding Target operation is already available in this same intentional flow, reuse it for the next consumer while project/session/association remain unchanged. Do not restart Target separately for Create and Localize in one workflow. After a delay, changed context, user intervention or uncertainty, reobserve rather than assuming freshness. No TTL or persisted freshness flag.

For existing and newly prepared projects requiring Target, start with `read_target_context`. Its known association is **not freshly verified**. Existing association: keep the exact App ID, do not resolve it again by name; refresh only if the next requested step needs current remote context. If the user intends a different app, resolve that product choice before any explicit rebinding; do not silently reinterpret a different name as permission to replace the current Target.

No association: `refresh_target_context` with the exact app name actually supplied by user intent, when available. Do not derive ASC identity from project title, path, folder or screenshot filename. No app name: discover candidates and ask the smallest identifying question if needed. Preserve the exact project/session on every operation.

## Localization handoff after inspection

Interpret `localization_inspected` in the shared policy from the live `inspect_localization` result. A request naming languages is not necessarily executable using project-only authority. `resolved` continues Localization; `target_locale_ambiguous` asks the locale variant without changing Target.

When `target_locale_unavailable` is returned with `localeAuthority: project`, and the user has not required local-only/offline work or refused ASC association, reassess Target once for this intentional flow. This is the policy's `targetContextAllowed`; it is reasoning about user intent, never an MCP argument. Start with `read_target_context` on the same exact project/session, then run `refresh_target_context` through the existing discovery/refresh/binding rules below. An associated app is reused. Without an association, use the app identity supplied by the user; if identity is missing or candidates/versions are ambiguous, ask only the missing product choice. Do not tell the user to connect/sign in, configure languages manually, open Settings, or click Refresh Target to perform work these tools already support. A missing Target or a project-only locale list is not evidence of missing credentials. Let Core reuse the native session and initiate any required native security interaction; request user action only when the tool explicitly returns that boundary. Report a real credentials/service failure accurately without guessing a login remedy. Never invent locales, choose a fuzzy match, or recreate the project/screenshots.

After successful Target resolution, discard earlier Localization snapshots and pagination cursors. Re-run `inspect_localization` for the original requested language intents and inspect each newly resolved exact target before translation. Preserve the requested languages and Metadata field exclusions; Target's full locale list does not expand the request. Keep the existing entitlement, source-language and overwrite checks. Binding supplies context, not permission to publish or change source language.

Do not repeat discovery/refresh for every unavailable language: `targetFlowAttempted` includes a Target flow already attempted or handed off for this request. With selected-Target authority, after that one attempt, or under explicit local-only intent, an unavailable locale stops with the actual reason. Preserve successful independent work and follow the existing bounded security/uncertainty handling. A later user choice or new request can resume the same project under fresh authority.

Example: “Localize my Box screenshots and metadata into French and Arabic,” with only `und` under project authority, enters Target resolution. “Box” must not silently select “Box - My Assistant”; confirm that observed candidate and an ambiguous platform/version. Once resolved, re-inspect French and Arabic against the new authority and continue on the same project. If both languages were already available locally, no Target setup was needed.

## Discovery, choice and binding

Use Core's result; do not implement a Plugin name matcher. One unique exact name resolves a candidate. Zero matches is `APP_NOT_FOUND_IN_LOADED_APPS`, never proof the app does not exist anywhere in the account. Multiple matches (`APP_AMBIGUOUS`) or multiple relevant versions (`PRODUCT_DECISION_REQUIRED`) require one minimum product question, showing safe name/bundle/version/platform distinctions. No fuzzy matching, case-folding, silent renaming, guessed IDs, newest-version shortcut or first-result selection.

After a real user choice, use the observed candidateAppID/versionID with refresh to obtain its complete context; this is intentional continuation, not a retry loop. The usable-version policy belongs to Core. Exactly one relevant usable version may proceed under that policy; multiple unresolved choices may not.

`CANDIDATE_OBSERVED_NOT_BOUND` is remote observation, not association. When the requested work needs that resolved context, call `bind_target` with `observedCandidate.app.appID`, `observedCandidate.version.versionID` and the returned `expectedContext`, on the same exact project/session. Discovery alone never binds. Do not bind by name/path, infer IDs from candidates' order, omit expected context or add a confirmed/PRO flag. If the existing intended app/version is already verified, consume the context without rebinding or reselection.

Pass only verified ASC app identity, version/platform, Primary Language and version-locales to existing consumers, along with exact project/session and the current observation. Keep requested scope authoritative: ASC data does not enlarge, replace or silently narrow the user's languages/platforms. Phase 8 still resolves actual available regional/script identifiers with `inspect_localization`; do not map “Mandarin” to a guessed locale. ASC Primary Language does not authorize changing the project's source locale. The separate Primary Metadata Skill may consume a verified Primary Language as source-writing context while Core remains final write authority.

## Outcomes and bounded recovery

Apply the actions in the decision policy. Action meanings:

- `skip_target`: continue the existing local workflow without a Target call.
- `continue_localization`: use the resolved exact locale and continue the existing Localization inspection and checks.
- `ask_locale_variant`: resolve only the reported regional/script ambiguity.
- `stop_locale_unavailable`: report the remaining locale limitation and preserve independent work, without another Target attempt.
- `read`: read the exact project's association once.
- `discover`: refresh unbound context, optionally with the user's exact app name.
- `refresh_associated`: refresh the exact association without name resolution or replacement candidate.
- `reuse_known`: preserve known identity for a step that does not require freshness; explicitly retain its unverified status.
- `bind_observed`: bind only the resolved observed IDs/expected context described above.
- `continue_verified`: continue the requested consumer; do not rebind.
- `ask_product_choice`: ask only the unresolved app/version/platform choice; continue independent design where possible.
- `continue_local_not_found`: no bind; continue requested Creative Lab/Design in existing Shipper scope. Explain that ASC localization scope cannot currently be established when relevant.
- `continue_local_no_version`: explain the version boundary and continue work not dependent on it.
- `wait_native_security`: allow legitimate existing macOS authorization; briefly explain user action, never offer a bypass or credential recreation. Do not cause another acquisition while that operation remains pending.
- `report_credentials` / `report_asc_unavailable`: report the actual credential/temporary ASC boundary, not “app not found”; continue independent requested work.
- `ask_target_disappeared`: retain the distinction from not-found; do not silently replace or clear the association. Ask/re-resolve only as required by current intent.
- `stop_target_step`: stop the dependent step with its safe reason; do not convert unrelated local work into a generic failure.
- `reconcile_read`: after uncertain outcome, local-context conflict or external user selection, stop dependent work and read the current exact project once. Do not override a newer user/native choice.
- `stop_after_reconcile`: report current local association/persistence without claiming freshness. Reconciliation is not permission to replay refresh/bind or proof that a pending operation completed.

One intentional Target flow at a time. Do not voluntarily switch apps during app/version processing or versions during locale processing. The native synthetic concurrency characterization is accepted out of V1 scope; do not investigate or correct it.

No automatic refresh retry, bind retry, security retry, or repeated prompt loop. A product-choice answer, explicit later refresh request, or confirmed resolution of a completed security boundary permits a fresh intentional continuation on the same project, with current authority. If authorization is still pending, wait for the existing operation; do not dispatch another. Successful authorization/completion continues the SAME requested workflow, not a new project or workflow restart. No workaround instructions, “Always Allow” recipe, credential recreation or simulated authorization.

NOT_FOUND is scoped to one observation, never a permanent negative state. On a later user request, reassess ASC dependence and rediscover on the same project. Keep prior screenshots and successful work. An uncertain result is never eligible for a blind retry, even after a later request: reconcile first and require evidence/current intent before a new operation.

## Consumer boundaries and visible gaps

Target itself has no PRO check. For non-PRO users, discover/resolve/bind normally and continue Design. On reaching Localization or Metadata translation, the existing Skill's live Phase 8 capability/PRO checks apply **before producing localized values**. Do not call apply_localization when blocked, inject translations through edit_canvas, use BYOK/manual translation, or relabel the blocked workflow as conversational translation.

**AGENT SCREENSHOT SPECS: SEPARATE PLUGIN CAPABILITY.** Route requested formats through [Agent Adaptive Screenshots](agent-adaptive-screenshots.md) and live native specification discovery. Target supplies context only; it does not select, create, switch or execute screenshot specifications. Preserve explicit device/specification intent and report actual capability limits.

**PRIMARY METADATA: SEPARATE PLUGIN CAPABILITY.** Target discovery supplies verified source-language and locale-scope context only. It never grants entitlement, generates copy, writes metadata, or changes Primary. Route explicit source authoring to the dedicated Primary Metadata Skill, which uses the separate MCP 6.2/Core authority and existing Localization for secondaries. Target success alone is never Primary Metadata completion.

Target binding is not save completion, Shipping approval/provenance or remote publication. Distinguish native persistence state from verification. No direct ASC authentication/API calls or native-service workaround. Target itself never performs remote metadata update, screenshot upload, locale creation or Shipping execution; the separate Shipping Skill consumes the three Core Shipping tools after this prerequisite. Only the three live Target tools may reach existing credential authority for this prerequisite.

## Five repository oracles

1. **Sunna Planner**: authorized new project → read/no Target → exact-name refresh → observed usable version, Primary Language/locales → bind → verified context → existing Creative Lab/Design and eligible consumers. Screenshot Specs and Primary Metadata remain separate consumers rather than Target effects.
2. **myTales**: new project → read → exact-name refresh/not found → no bind → playful literary/comic Design in existing local scope.
3. **GPT**: existing Target → read → exact refresh only when current ASC context is needed → reuse without name lookup/rebind. Preserve explicit iPhone/iPad/Mac and English/French/Spanish/Mandarin intent; route specification work through the separate Adaptive capability.
4. **Impulse non-PRO**: read → discover → bind → Design. Existing Phase 8 handles PRO on reaching Localization; no emulation.
5. **Impulse later found**: initial not-found permits Design; later localization request → same project/session, fresh read/discovery → found → bind → current locales → existing Localization workflow. No project/screenshot recreation and no negative cache.
