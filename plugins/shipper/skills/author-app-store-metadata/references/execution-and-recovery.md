# Primary Metadata execution and recovery

Read this reference when constructing a source request, composing secondary locales, or recovering a source outcome. The generated [argument/result types](../../../references/mcp-mutation-contract.d.ts) and [canonical schemas](../../../references/mcp-mutation-contract.json) supply exact structure. The shared [Core authority](../../../references/core-authority.md) supplies compatibility and freshness. Do not copy schemas from this document.

## Contract and request authority

Primary Metadata is available only when the live contract exposes server 6.2-compatible `inspect_localization.sourceMetadata` observe/validate/reconcile modes and `set_source_metadata`. The packaged snapshot currently records MCP 6.4.0 and 37 tools. A live 6.1/31-tool runtime cannot execute this workflow; stop only the Primary Metadata portion rather than probing guessed shapes.

When `sourceLocale` is known, use that exact regional or script-preserving tag as canonical language authority; ignore a generic caller downgrade and do not ask again. When source identity is `und`, resolve the source writing language before the authoritative observation using verified Target Primary, explicit project/source-language authority, explicit user intent, or another existing canonical Shipper authority. Ask once before observation only if authority is absent or ambiguous; stop rather than guess when authorities conflict. Then observe with that resolved language using the prepared project/session and `sourceMetadata.mode: observe`. Bind editorial decisions to its returned revision, snapshot, source locale, resolved language context, six field records, applicability, Preserved Words, entitlement, locale authority, Target context, and persistence. Target is not required for local Metadata.

Validate with the same project/session and a sourceMetadata request containing `mode: validate`, the fresh source snapshot, the intended `fill` or `update` mode, the exact observed source language, and exact patch. Reuse that authority exactly; never introduce or change the language during validation. Candidate validation is read-only and may return scoped field authorization; it does not commit, revise, persist, or create history.

Commit exactly one valid coherent patch with `set_source_metadata`. Retain its transaction ID before dispatch. Omitted fields are preserved. `operation: clear` is only for explicit clear intent; empty-string `set` is not a shortcut. UPDATE of an occupied value carries that field's fresh authorization reference. Never use an unrestricted overwrite flag.

## Source sequence oracles

These traces describe ordering, not a second implementation of MCP schemas:

| Scenario | Required sequence |
| --- | --- |
| Source CREATE/FILL | prepare → optional current Target context → source observe/admission → generate → validate → set source once → persistence result → report |
| Source UPDATE | prepare → optional current Target context → source observe/admission → generate exact scope → validate → set source once with scoped authorization → persistence result → report |
| CREATE needing occupied replacement | source observe → explain exact replacement → ask → fresh source observe → generate approved scope → validate → set source UPDATE once → persistence result → report |
| Explicit source + all-secondary translation | source sequence → Localization locale 1 → persistence → Localization locale 2 → persistence → report |
| Unqualified source CREATE | source sequence → report; no secondary Localization |
| Explicit secondary only | prepare/Target only if needed → source observe read-only → existing Localization for exact resolved locales sequentially → report |
| Missing secondary prerequisite | source observe read-only → ask whether to create/complete source → stop secondary mutation |
| Stale before commit | stale refusal → fresh source observe → reconsider/regenerate → validate → new transaction only if still appropriate |
| Unknown commit outcome | retain transaction → source reconcile → inspect receipt/canonical/persistence → report; no second set |
| Save pending/failed | report applied but not saved → no duplicate set |
| Screenshot-only all localizations | screenshot create/localize only; no source observe/write for metadata intent |
| Combined screenshots and metadata | screenshot workflow → source workflow → in-scope secondary Localization; independent results retained |

Simple fresh source work prepares once, observes once, validates, and commits once. Do not repeatedly inspect unchanged Target context, traverse unrelated locales/specifications, or reload unrelated workflow knowledge.

## CREATE and UPDATE construction

FILL derives its patch from observed empty/missing applicable fields. Meaningful existing and legacy-invalid occupied values stay omitted. A candidate that depends on changing them stops for field-specific user approval and then becomes a narrowly scoped UPDATE after fresh observation.

Explicit REWRITE/IMPROVE is product authorization for only the named field/locale scope. It does not bypass Core authorization: use the fresh per-field reference supplied by observation/validation. Never carry authorization across a changed observation.

Candidate validation must precede every source mutation. Treat `candidateValidation.valid` as the candidate verdict and `candidateValidation.fields[*]` as the only candidate field-diagnostic surface. The top-level `fields` describes the observed source snapshot, so its validity and diagnostics must not be substituted for candidate diagnostics—especially when CREATE starts from empty valid source fields. When the candidate verdict is false, continue only if at least one candidate field is explicitly invalid with non-empty diagnostics; otherwise stop as a non-actionable contract response without mutation or retry. Rewrite only the invalid agent-authored values identified there and validate the corrected patch once. Do not hardcode native limits or truncate. A second invalid candidate stops truthfully.

A retry after validation is allowed only when the exact deterministic cause is known, the next request changes that cause, and authority remains valid. For `source_language_mismatch`, obtain canonical language authority, refresh observation only if required, and submit one corrected request. Stop on a generic `read_failed`, generic `invalid_argument`, an equivalent request, speculative language changes, arbitrary field removal, or a snapshot refresh that does not correct an identified cause.

## Stale, uncertainty, and persistence

Stale invalidates revision, snapshot, candidate assumptions, authorizations, and transaction construction. Fresh observation is required. If the current state now satisfies FILL, return no-change rather than forcing an UPDATE.

For a lost/uncertain response, reconcile using the original transaction ID. An applied or no-change receipt and canonical observation determine the result. `not_found_in_session` with replay disallowed remains unknown; do not invent non-commit evidence or issue another write. A reopened session cannot recover a session-scoped receipt.

Persistence is separate from commit. Compare the result's committed generation with persistence state in the same session. `pending`/`saving` is not saved; `failed`/`needsUserAction` is applied in memory but not saved; `saved` proves coverage only when the saved generation covers the commit. Never use a new mutation to repair persistence.

## Secondary and combined completion

Use the existing Localization Skill for secondaries, including its exact resolver, protected-value behavior, one-locale transactions, previews when screenshots are affected, and persistence recovery. A metadata-only secondary does not require Canvas preview. Source success and each localized success remain valid independently; a later failure changes only the completion report.

For combined screenshots and metadata, report each capability separately: screenshot destinations/locales and their persistence, source metadata and its persistence, then secondary metadata per locale. Nothing in this workflow publishes to ASC.
