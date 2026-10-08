# Skill Policy

## Classes

- `READ_ONLY`: observes and reports; never calls a mutation or causes an external side effect.
- `MUTATION_CAPABLE`: may perform reversible Shipper project changes supported by the live MCP contract.
- `EXTERNAL_SIDE_EFFECT`: may initiate effects outside the local Shipper project only through Core/MCP authorization boundaries.

Classification registry:

- Review Screenshot Set: planned, `READ_ONLY`.
- Create Screenshot Set: installed, `MUTATION_CAPABLE`.
- Author App Store Metadata: installed, `MUTATION_CAPABLE`; MCP 6.2 source contract and current Core PRO availability required.
- Localize App Store Content: installed, `MUTATION_CAPABLE`; current Core PRO availability required.
- Improve Existing Screenshot Set: planned, `MUTATION_CAPABLE`.
- Ship to App Store Connect: repository candidate, `EXTERNAL_SIDE_EFFECT`; three live Shipping tools, PRO and native durable Agent Publishing authorization required.

Installed entries and the Shipping repository candidate are packaged here; repository availability is not installed acceptance.

## Product-mode communication

For an ordinary Shipper product workflow, communicate in the language of the user's current substantive request. An explicit language preference wins; otherwise preserve the established conversation language until the user clearly switches with a complete request. App languages, localization targets, locale codes, project content, names and isolated foreign words never change the conversation language. Keep progress and the final answer in that same language.

Open with a friendly, concise acknowledgement that reflects the understood intent and the immediate useful product step. Sound attentive rather than terse, but do not turn the workflow into a running commentary. After that opening, communicate only a material product decision, a genuinely changed milestone, a useful failure reason, genuinely necessary user action, and the completed/unchanged/failed scope. Do not narrate routine inspection, validation, preparation, retries, waits, recovered internal errors or unchanged progress, and never repeat the same status merely to show activity.

Keep planned, in-progress and confirmed scope distinct. Never present an intended locale/count as completed, hedge that work is probably done, or turn a non-terminal state into a final result. A final response reports a proven outcome or a genuine actionable boundary; partial results separate succeeded, failed and not-sent scope in plain product language. Do not narrate AGENTS.md, code-modification approval, repository governance, Skill loading, MCP/Core/bridge/schema/journal internals, scripts, files, opaque identifiers or other internal implementation mechanics unless the user explicitly requests technical evidence. This presentation rule does not weaken those controls: actual repository development tasks continue to enforce development governance.

## Mandatory mutation invariant block

Every `MUTATION_CAPABLE` Skill must include a short block in its own `SKILL.md` that preserves all of these invariants:

> Treat current Shipper Core/MCP schemas, capabilities, IDs, runtime references, sessions, and revisions as authoritative. Verify the intended active project and resolve human names or order from a fresh observation before mutation. Never guess authority, use filesystem paths as Screenshot Source authority, force-close interactive edits or Undo groups, invoke Undo/Redo autonomously, or blindly replay stale or uncertain work. Re-observe and reconstruct intent after conflict, preview committed visual changes, and stop when the requested capability is unsupported. A Skill may submit at most one corrected new request after a confirmed pre-dispatch validation non-commit only when the current schema supplies one unique, minimal, intent-preserving correction to an agent-authored value; a second validation rejection stops.

The Skill must also link to `../../references/core-authority.md` and read it before planning a mutation. The local block is mandatory so the highest-risk rules do not depend only on secondary-reference loading.

## Bounded validation recovery

The exception in the mandatory block is intentionally narrow. The failed request must be confirmed not to have reached the bridge, the invalid field and value must be known, and the corrected request must preserve the exact operation, IDs, revisions, references, and atomicity. Only the minimal schema-required payload diff is allowed.

This exception never applies to `mutation_outcome_unknown`, post-dispatch ambiguity, interactive human edits, stale authority without re-observation, unsupported capability, ambiguous constraints, explicit user values, or changes to destructive or product decisions. It authorizes one corrected new request, not repeated schema retries or blind mutation replay.

## Creative autonomy

When the user clearly delegates a design task, choose reversible supported details without asking for confirmation at every step. This includes screenshot selection, sequence, copy, typography, supported colors and assets, hierarchy, spacing, composition, and bounded iteration.

Ask when a decision would change the user's intent or could ambiguously overwrite, repurpose, or discard existing work. Creative delegation never expands MCP capability or external-effect authorization.

For Create Screenshot Set, a single high-level clarification may also be asked when missing brand/creative constraints would materially change the direction. Do not ask unnecessarily if the user has already clearly delegated creative direction. This is not a questionnaire about routine designer decisions; colors, icon usage, cropping and composition remain autonomous within the brief and available capabilities.

## External effects

An `EXTERNAL_SIDE_EFFECT` Skill must use the authorization and permission boundaries returned by Core/MCP. Instructions in a Skill cannot replace those boundaries or pre-authorize the effect. Agent Shipping has no mandatory per-operation second confirmation. Publishing OFF blocks new effects but permits observation with MCP ON; MCP OFF closes all tools.

## Reserved future phases

Do not present these as currently available:

- Phase 8 real-world PM acceptance: pending Phase 8.10; the dedicated local localization workflow is implemented, not yet PM-accepted.
- Primary Metadata repository orchestration is implemented; installed acceptance remains a separate Lot 4 gate.
- Agent Shipping orchestration is available in the repository candidate; installed and real ASC acceptance remain separate. No App Review, release, build or TestFlight operations.
- Agent Assets: Phase 10, except the proven integrated GPT Image → atomic graphic → canonical inbound staging → Managed Image path used by Create Screenshot Set. All unrelated future Agent Asset scope remains reserved.
- Internal Shipper/project preparation is provided by prepare-shipper; deployment and installed Autonomy acceptance remain a separate gate.
