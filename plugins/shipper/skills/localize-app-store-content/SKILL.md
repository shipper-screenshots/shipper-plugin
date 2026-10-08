---
name: localize-app-store-content
description: Localize or update Shipper project screenshots, secondary App Store metadata, or both into requested locales. Use for requests such as translate this screenshot set, create French localization, translate App Store metadata, or update the German localization. Route canonical source metadata creation or rewriting to Author App Store Metadata; do not activate for conversational translation or merely because the user writes in another language.
---

# Localize App Store Content

Before any progress message or tool call, adopt the language of the user's current substantive request and the shared Product-mode communication rule: one friendly, concise acknowledgement, then silence unless there is a material product milestone, a useful failure or necessary user action.

Class: `MUTATION_CAPABLE`. Localize existing editable Shipper screenshots, secondary Metadata, or both without expanding scope or redesigning the source. This is local preparation, never publishing.

Before planning a mutation, read [Core Authority and Compatibility](../../references/core-authority.md), follow the shared Product-mode communication rules in [Skill Policy](../../references/skill-policy.md), and use [Execution and Recovery](references/execution-and-recovery.md) for request construction, protection and recovery. Use only Plugin-scoped Shipper tools; live Core/MCP remains authoritative.

## Mandatory mutation invariants

Treat current Shipper Core/MCP schemas, capabilities, IDs, runtime references, sessions, and revisions as authoritative. Verify the intended active project and resolve human names or order from a fresh observation before mutation. Never guess authority, use filesystem paths as Screenshot Source authority, force-close interactive edits or Undo groups, invoke Undo/Redo autonomously, or blindly replay stale or uncertain work. Re-observe and reconstruct intent after conflict, preview committed visual changes, and stop when the requested capability is unsupported. Submit at most one corrected new request after a confirmed pre-dispatch validation non-commit only when the current schema supplies one unique, minimal, intent-preserving correction to an agent-authored value; a second validation rejection stops.

## Internal project prerequisite

Obtain the intended existing exact project/session through [Shipper Autonomy preparation](../prepare-shipper/SKILL.md), then continue in the same task. This includes Metadata-only work. Canonical source creation, completion, rewrite or improvement belongs to [Author App Store Metadata](../author-app-store-metadata/SKILL.md), which returns here only for requested secondaries. Never infer new-project intent from a missing project. Preparation performs no translation and does not bypass PRO.

## Required Target App authority

After the PRO check succeeds, establish [Target App context](../../references/target-app.md) for every Plugin localization request, including an explicit list such as French, German or Arabic. Target App itself remains available to Free and PRO accounts; the PRO gate applies to Localization, Metadata and Publishing, not to Target discovery or binding.

Read the current Target on the exact project first. Refresh it when it is absent, not freshly verified, or does not match an explicitly named app such as “my app Inbox”; discover and bind the exact requested app without deriving identity from the Shipper project title. Reuse a verified matching Target from the same uninterrupted flow. Target neither grants PRO nor translates, changes the source locale, fills primary Metadata, or implements Screenshot Specs.

Before generating the first translation, inspect **every requested locale intent** against that freshly verified Target. Continue only when every locale resolves from `localeAuthority: selected_target` with `available: true`. If one is unavailable, ambiguous or Target cannot be verified, stop before translation and mutation; do not fall back to project locales, invent a generic locale, or ask the user to perform a refresh that the Target tools can do. `target_locale_ambiguous` asks only for the regional/script choice.

## 1. PRO before translation

Call `get_automation_capabilities` before planning or generating localized values. Require the relevant workflows and live localization contract. Core remains final authority and rechecks access at execution; user statements, BYOK configuration and earlier discovery grant nothing.

| Current availability | Required action |
| --- | --- |
| Available | Continue. |
| `requires_pro` | Stop before translation or mutation; explain that Localization with Codex requires Shipper PRO. |
| `entitlement_unknown` | Stop; Shipper must verify PRO access. Do not describe the user as Free. |
| Unsupported/unavailable | Follow shared Core recovery or stop; never emulate the capability. |

For Free or UNKNOWN, do not call `apply_localization`, use `edit_canvas` as a workaround, invoke BYOK, produce finished translations for injection, or suggest a manual bypass. Ordinary conversation translation is outside this Skill; do not relabel a blocked Shipper localization request as conversation translation.

## 2. Establish project, source, targets and scope

Verify the intended project and compatibility under shared authority. Establish the exact requested Canvases/specs and Metadata fields, resolving names/order to observed IDs.

`list_locales` gives existing project identities; it is not an exhaustive supported-language catalog. Use `inspect_localization` without a target or with `targetIntent` to obtain `availableLocales`, `localeAuthority` and resolution. Require `localeAuthority: selected_target`; only `available: true` authorizes a target, while `existsInProject` distinguishes availability from existing content. Project-only authority is diagnostic and cannot authorize Plugin localization.

Use an exact available identifier, or the sole compatible language/script match. `target_locale_ambiguous` requires a choice; `target_locale_unavailable` stops the batch before translation after the bounded Target verification above. Arabic may resolve to the sole `ar-SA`; Portuguese with `pt-BR` and `pt-PT` is ambiguous. Preserve Chinese script distinctions. Never invent generic `ar`, `de`, `fr` or `pt`, substitute a regional sibling, or derive identity from display/folder names. A user writing in French requests no locale by itself.

Inspect each exact `targetLocale` before translating. Require resolved status and read every requested page on the same snapshot. Consume current source/target locale, authority, correspondence, protection, six Metadata fields and limits, Text, source relationships and persistence. Current Shipper state wins; never infer from incomplete or stale pages.

Retain the actual source locale, including `und`. Use resolved source-language context only when supported and evidenced; otherwise ask which source language to use. Do not invent or silently change it.

## 3. Preserve terms and protected values

Project Preserved Words are mandatory for screenshot Text and all six Metadata fields. Keep exact protected spellings/occurrences. Do not ask whether to keep them. A specific user-requested exception covers only that term and those values, using fresh targeted authority; never infer a global exception.

| Inspected state | Default treatment |
| --- | --- |
| INHERITED | Translate within scope. |
| TRANSLATED | Update only as requested. |
| EDITED | Preserve by default; ask before writing unless existing explicit authorization covers the exact value. |
| UNTRACKED | Preserve by default; require targeted confirmation before textual overwrite. |
| UNMATCHED | Preserve by default; resolve correspondence first. Approval cannot invent a mapping. |

Empty localized Metadata in `EDITED`, `UNTRACKED` or `UNMATCHED` may be populated by an explicit FILL without overwrite confirmation. Patch only requested empty fields, do not send `overwrite: true`, and preserve every non-empty edited/protected sibling. Non-empty replacement still needs fresh exact authorization. This never applies to screenshot Text or weakens Preserved Words.

Do not ask about untouched protected values. Preserve requested manual edits. If retranslation replaces protected content, identify it and ask before writing; reinspect after interruption or state change. Never turn confirmation into overwriteAll.

Layout/style-only refinement is not textual overwrite. Any wording change returns to these protection rules.

## 4. Resolve Screenshot Sources

CREATE screenshot localization discovers Screenshot Sources through the authorized catalog. For UPDATE, Preserve valid existing Screenshot Sources by default and omit untouched source decisions. Do not rescan for Text-, Metadata-, retranslation- or style-only work; discover only for an explicit screenshot change, missing/invalid source, or when the operation genuinely requires new source mapping.

Folder names are hints, never authority. Use live opaque references and preview pixels when needed; never infer features or mapping from filenames, equal text, positions or dimensions.

| Evidence | Source decision |
| --- | --- |
| Confident localized match | Use it for the exact mapped Canvas. |
| No localized candidate | Reuse primary sources automatically. |
| Ambiguous candidate | Ask for the intended source or primary fallback. Ambiguity is not absence. |
| Partial localized set | Use confident matches and primary fallback where mapping is safe; ask only for ambiguous mappings. |

German, Deutsch, de and de-DE may be hints; never require them or force folder reorganization. An unavailable catalog is not proof that localized candidates are absent. Metadata-only work needs no source discovery.

## 5. Translate directly and validate

Codex itself is the translation engine. Do not invoke Apple Translation, OpenAI BYOK, Claude BYOK or Gemini BYOK; those are native Shipper options only.

Translate screenshot Text naturally while preserving product truth, terminology, tone, intent and function. Prefer clarity over literalness; invent nothing. Keep editable Text.

Adapt only requested Metadata fields:

- App Name: listing name, not project identity; preserve brands where appropriate.
- Subtitle: natural target copy.
- Promotional Text, Description and What's New: truthful adaptation.
- Keywords: relevant localized terms without unsupported claims.

These are exactly six fields. Never touch Support URL, Marketing URL or Privacy Policy URL. Read live limits and maintain no second hardcoded Metadata limits table. Check every submitted field. Rewrite a value exceeding its limit; do not silently truncate or submit known-invalid content. Core is the final validator.

## 6. Apply one target locale

Read the execution reference and generated types when host declarations hide nested fields. Recheck capability after questions/delays; if state changed, reinspect and rebuild instead of transplanting old authorization.

CREATE needs explicit coverage: selected source Canvases, every Text decision, all six Metadata decisions and each source choice. Missing JSON is not preserve. Metadata content contains values and protection authority only; never add a Text-direction member. Screenshot Text direction is automatic. Metadata-only CREATE uses explicit empty Canvas/Text/source coverage; screenshot-only CREATE preserves unrelated Metadata. Never fabricate IDs.

UPDATE uses durable target addresses and must Omit untouched content. Never send CREATE-only `canvases`. Do not recreate the locale or infer identity from indexes. Send canonical inspected `resolvedSourceLanguage`, not a display label. Do not emulate localization through `edit_canvas`.

One `apply_localization` call atomically commits one locale. Retain the caller's transactionID before dispatch. Never split an indivisible locale or replay an uncertain outcome.

For multiple locales, first resolve the complete requested locale set through the same verified Target, before translating any locale. Then inspect → translate → apply → review → persistence sequentially with fresh revisions. Keep successful locales and never roll them back automatically. Report applied, not applied or unknown per locale; stop dependent work while authority/outcome is unresolved.

## 7. Preview and adapt the existing design

Applied content is not visual completion. Use scoped Canvas reads, previews and edits without switching native UI selection, using returned mappings and fresh scoped revisions.

Preview every affected Canvas and inspect actual pixels for wrapping, clipping, hierarchy, line count, balance, overlap and readability. Refine font size, position, alignment, spacing and wrapping only when observed. Read [Typography](../../creative-intelligence/design-intelligence/typography.md) or [Visual Critique](../../creative-intelligence/design-intelligence/visual-critique.md) only when needed.

Then perform one bounded set-consistency pass across source typography hierarchy, font family/weight, corresponding sizes, relative scale and visual rhythm. Harmonize only unjustified divergence. Keep a justified exception for translation length; never force identical numeric sizes. Style-only refinement must leave protected textual values unchanged. Final-preview changed Canvases before persistence; make no unrelated design changes.

The existing design and accepted Creative Target remain authoritative. Do not generate a new Creative Target or redesign without explicit intent; preserve resolved Screenshot Sources.

For Arabic/Hebrew, write natural RTL with mixed Latin brands, numbers and punctuation, relying on native automatic Text direction. Do not ask the user to choose direction; do not add or invent a direction field for Text or Metadata. Review rendered RTL. Do not mirror Screenshot Sources, Mockups, Canvas, graphics or asset order.

Refine only observed issues. Stop when resolved or unsupported; do not regenerate without a detected problem or impose an arbitrary generation budget.

## 8. Verify persistence and report

Verify returned and transaction targetLocale equal the exact resolved identifier. Reinspect that exact locale and affected content; a similarly named or compatible locale is not proof. Never clean up a sibling automatically. After final refinement, observe project/transaction persistence and distinguish pending, saving, saved, failed and needsUserAction. Claim saved only when the saved generation covers the final committed generation; the original locale receipt alone cannot prove later refinements.

For pending/saving, allow at most two additional persistence observations, then report pending. For failure/action-required, report applied-but-unsaved and the safe native recovery. Never replay apply to repair saving; There is no `save_project` tool.

For uncertainty, inspect transactionID, locale, revisions and persistence. not_found_in_session is not proof of non-commit. Stop if canonical evidence remains inconclusive. A corrected request is allowed only when the diagnostic identifies the exact cause and the next payload changes that exact cause under valid authority. Never change source language or unrelated fields speculatively, resubmit an equivalent invalid payload, or retry a generic `invalid_argument` whose cause is unavailable.

Report per locale: applied/not applied/unknown, protection outcome, visual review and final persistence. Mention Screenshot Sources only when changed, requested or unresolved. Do not report missing localized catalog collections during an UPDATE that preserves valid sources.

## Targeted follow-up and Phase 9 boundary

Keep follow-up targeted: adjust only the requested layout, source or protected translation under fresh scope. Do not restart unrelated locale work or silently change Preserved Words settings.

Outside the three Target MCP tools, no App Store Connect authentication is authorized. No upload, remote metadata/screenshot update, native ASC service workaround or publication. For “localize and publish,” complete only authorized local preparation, verify saved state, then hand the exact scope to [Ship to App Store Connect](../ship-to-app-store-connect/SKILL.md) for fresh preparation. This Skill never publishes or bypasses Core Shipping authority.
