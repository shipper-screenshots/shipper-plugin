---
name: author-app-store-metadata
description: Create, complete, rewrite, or improve canonical source App Store metadata in Shipper, then localize requested or Target-scoped secondary locales. Use when the user explicitly requests metadata authoring; do not activate for screenshot-only work, ordinary translation, or App Store Connect publishing.
---

# Author App Store Metadata

Before any progress message or tool call, adopt the language of the user's current substantive request and the shared Product-mode communication rule: one friendly, concise acknowledgement, then silence unless there is a material product milestone, a useful failure or necessary user action.

Class: `MUTATION_CAPABLE`. Author canonical source metadata locally in Shipper, then use the existing Localization workflow only for explicitly requested secondary locales. This Skill never publishes to App Store Connect.

Before planning a mutation, read [Core Authority and Compatibility](../../references/core-authority.md), follow the [Skill Policy](../../references/skill-policy.md), and use [Execution and Recovery](references/execution-and-recovery.md) for request construction, sequencing and recovery. Consult the packaged [decision policy](references/primary-metadata-policy.json) for intent and scope decisions. Live Core/MCP observations remain executable authority; use only Plugin-scoped Shipper tools.

## Mandatory mutation invariants

Treat current Shipper Core/MCP schemas, capabilities, IDs, runtime references, sessions, and revisions as authoritative. Verify the intended active project and resolve human names or order from a fresh observation before mutation. Never guess authority, use filesystem paths as Screenshot Source authority, force-close interactive edits or Undo groups, invoke Undo/Redo autonomously, or blindly replay stale or uncertain work. Re-observe and reconstruct intent after conflict, preview committed visual changes, and stop when the requested capability is unsupported. Submit at most one corrected new request after a confirmed pre-dispatch validation non-commit only when the current schema supplies one unique, minimal, intent-preserving correction to an agent-authored value; a second validation rejection stops.

Primary Metadata requires the live MCP 6.2-compatible `set_source_metadata` operation and all `inspect_localization.sourceMetadata` observe, validate and reconcile modes. Compare the packaged generated contract with the live server. If the live runtime is 6.1, or otherwise lacks or conflicts with this contract, refuse only the Primary Metadata portion; independent supported work may continue.

## Scope and intent

Metadata must be explicit. A screenshot-only request remains screenshot-only even with “all localizations.” “Screenshots and metadata” composes independent capabilities; never invent cross-capability atomicity or roll back successful work because a later portion fails.

Classify intent before generating copy:

- CREATE, COMPLETE or an unqualified metadata request means FILL: generate only missing applicable fields and preserve meaningful occupied values.
- REWRITE or IMPROVE means UPDATE only for the exact requested fields and locales. A clear rewrite is already product intent; do not ask for redundant generic confirmation, but use fresh field-scoped Core authorization.
- CREATE never silently becomes UPDATE. If completion truly requires replacing an occupied value, explain the exact replacement and ask for approval. That approval covers only the named current field/value and requires a fresh observation.

Explicit locale and field scope wins. Leave everything else unchanged. A secondary-only request keeps the source read-only.

## Project and source language

Obtain one exact workable project/session through [Shipper Autonomy preparation](../prepare-shipper/SKILL.md), then continue in the same task. Do not repeatedly list or open an already verified active project.

Use [Target App context](../../references/target-app.md) only when verified ASC context is genuinely needed for source language or requested “all available” secondary scope. Reuse verified context from the same flow; never bind or refresh merely because metadata was requested. Target grants neither entitlement nor write authority.

If `sourceLocale` is known and not `und`, use that exact tag as the source writing language; preserve regional and script variants and reject a conflicting Target Primary Language. When it is `und`, resolve the source writing language before authoritative source observation from, in order: verified Target Primary Language, explicit project/source authority, explicit user intent, then another canonical Shipper authority. Stop on conflict; ask one concise question when missing or region/script-ambiguous. Never infer it from the conversation, macOS, locale order or an arbitrary region.

Then observe with that resolved language and retain it with the returned snapshot through validation and commit; never introduce or change the language during validation. Storage may remain `und` while `resolvedSourceLanguage` carries the writing language. Target is not required for local Metadata and is never a language workaround.

An unqualified “Create my metadata” is source-only. Secondary work requires explicit translation/localization intent. Resolve secondary identifiers through the existing Localization authority; never add aliases, fallback tables or guessed identifiers.

## Admission and exact patch

Metadata authoring is PRO. Check current capability and source-observation admission before generating finished copy; Core rechecks at commit. Target, BYOK, user statements and screenshot eligibility do not grant access.

- `requires_pro`: do not generate finished metadata or mutate it. Explain that metadata authoring with Codex requires Shipper PRO.
- `entitlement_unknown`: do not generate or mutate; explain that Shipper must verify PRO access without describing the user as Free.
- available: continue.

For a combined blocked request, continue separately authorized screenshot work and refuse only metadata. Never undo successful independent work.

Observe source metadata once while fresh, including exact project/session, revision, snapshot, `sourceLocale`, resolved language, native fields and states, diagnostics, live limits, What's New applicability, `translationPreferences.protectedTerms`, entitlement, locale authority and persistence. Native Core defines fields, limits, counting and clear semantics; do not duplicate them in Plugin knowledge.

- FILL patches only missing/empty applicable fields and omits every occupied value, including legacy-invalid content, unless its exact replacement was separately approved.
- UPDATE patches only explicitly authorized fields using fresh field-scoped authorization. Re-observe after delay or state change before using an approval.
- Treat the patch as one coherent editorial set. Ground every claim in available product evidence; never invent features, metrics, awards, testimonials, pricing or integrations. Ask only for a fact that is genuinely required.
- Preserve `translationPreferences.protectedTerms` when used, without forcing them into every field.
- What's New follows observed applicability: include it only when applicable and in scope; omit/preserve it when not applicable or unknown. User release context does not prove ASC applicability.

## Validate, commit and recover

Follow the exact sequences in [Execution and Recovery](references/execution-and-recovery.md). Generate one coherent patch, validate against its fresh snapshot, then:

1. Treat `candidateValidation.valid` as the verdict and `candidateValidation.fields[*]` as the only candidate diagnostic surface. The top-level `fields` describe the pre-validation source, not candidate validity.
2. If invalid, continue only when at least one candidate field is explicitly invalid with diagnostics. Rewrite only those agent-authored values and validate once more. Otherwise stop without mutation or retry.
3. If valid, call `set_source_metadata` once with the exact retained authority, patch, mode, authorizations and a new transaction ID. Never split a coherent patch into field-by-field writes.
4. Consume canonical state and persistence. Reconcile only an uncertain outcome or unresolved receipt.

Never silently truncate, submit known-invalid copy, reconstruct opaque authority or reuse stale observations. A `source_language_mismatch` permits one corrected request only after obtaining canonical language authority and refreshing observation when required. A generic `read_failed`, generic `invalid_argument`, equivalent request, speculative language change or unrelated field removal stops without retry.

On stale authority, re-observe and reconsider intent before regenerating, revalidating and—only if still appropriate—issuing a new transaction. Never replay the old one. On `mutation_outcome_unknown`, reconcile the retained transaction. A missing session receipt has `replayAllowed: false`; save failure is also never permission to write again.

Say `applied` only for a committed result. Say `saved` only when persistence in the same session covers that commit. Otherwise report pending/saving, failed/action required, or unknown/reconciliation required accurately. No-change does not prove a new revision, history unit or save.

## Secondary locales and result

Only explicit metadata translation/localization intent authorizes secondaries. Route them through [Localize App Store Content](../localize-app-store-content/SKILL.md); never use `set_source_metadata` for a secondary or duplicate its translation rules. If the canonical source is insufficient, ask whether to create or complete it first.

Execute source first, then secondary locales sequentially. Each locale keeps its own Localization transaction and persistence result. Preserve and report successful source/locales if a later one fails or remains uncertain. For secondary-only requests, mutate only the exact resolved secondaries.

Communicate the useful content/locale scope, only necessary language clarification or field-specific approval, actionable boundaries and concise result. Do not expose Skill/tool names, opaque references, transaction IDs or internal mechanics unless technical evidence is requested. Do not mutate Target, publish, or claim remote completion. For explicit author-and-Ship intent, hand the verified saved result to [Ship to App Store Connect](../ship-to-app-store-connect/SKILL.md) for fresh preparation; authoring is never publication.
