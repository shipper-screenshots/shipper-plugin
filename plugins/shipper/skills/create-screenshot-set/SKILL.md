---
name: create-screenshot-set
description: Create ordered editable Shipper screenshot sets, resolve unspecified formats, or add supported device/spec/orientation variants while preserving the Creative Target. Use for delegated creation and multi-format requests, not review-only, localization, or publishing work.
---

# Create Screenshot Set

Class: `MUTATION_CAPABLE`. Follow [Skill Policy](../../references/skill-policy.md), including Product-mode communication. Create a coherent ordered story from the user's product intent and observed identity; respect supplied direction and decide ordinary reversible design details autonomously when direction is delegated.

Before planning a mutation, read [Core Authority and Compatibility](../../references/core-authority.md) and [Creation Decisions](references/creation-decisions.md). Live MCP schemas and results define executable capability.

## Creative Lab and Design Intelligence

Creative Lab interprets the request, makes creative decisions and drives creation. Creative Intelligence informs those decisions without dictating them.

```text
Creative Lab
    ↓ uses
Creative Intelligence
    └── Design Intelligence
```

Design Intelligence V1.1 is the Plugin's local graphic-design knowledge. Consult only the files relevant to the current decision or rendered weakness; do not load all nine mechanically.

- [Visual Hierarchy](../../creative-intelligence/design-intelligence/visual-hierarchy.md)
- [Composition and Layout](../../creative-intelligence/design-intelligence/composition-layout.md)
- [Typography](../../creative-intelligence/design-intelligence/typography.md)
- [Color](../../creative-intelligence/design-intelligence/color.md)
- [Spacing and Gestalt](../../creative-intelligence/design-intelligence/spacing-gestalt.md)
- [Visual Weight and Rhythm](../../creative-intelligence/design-intelligence/visual-weight-rhythm.md)
- [Visual Assets](../../creative-intelligence/design-intelligence/visual-assets.md)
- [Art Direction](../../creative-intelligence/design-intelligence/art-direction.md)
- [Visual Critique](../../creative-intelligence/design-intelligence/visual-critique.md)

Treat these documents as knowledge, guidance and reasoning support, including any prescriptive wording within them. They are not mandatory design rules, templates, fixed layouts, hard constraints or style presets. Creative Lab may follow, combine, adapt or ignore suggestions, or intentionally break conventional design expectations when the Art Direction benefits. Creative Intelligence informs creativity. It does not imprison it.

Execute Shipper project operations only through capabilities actually exposed by the live Shipper MCP. When an ideal technique is unavailable, preserve its visual intention through supported alternatives where possible, without inventing functionality or bypassing Core authority.

Design Intelligence V1.1 status: **integrated / pending further real-world validation**. This Skill V1.6.3 candidate adds a standard integrated GPT Image Creative Target, conditional atomic assets and direct-Shipper fallback while retaining V1.1–V1.5 safeguards. Status: **candidate / pending real-world validation**.

## Integrated image generation

For normal autonomous creation, one Creative Target is standard when integrated GPT Image is available and permitted. Before this stage, read [Image Generation Orchestration](references/image-generation-orchestration.md). Inspect the output, reject it as product truth or final flattened artwork, and reconstruct it as editable Shipper elements. Once accepted, its visual design is authoritative; material departures require product truth, editability, a proven Shipper limitation or explicit user instruction. Preserve every material graphic family when feasible and generate only the minimum reusable atomic assets with proven missing roles. If generation or reference input is unavailable, use the direct-Shipper fallback without an API fallback. Completion requires rendered Canvas-by-Canvas comparison and the reference's recognizable-fidelity test, not pixel-perfect identity.

## Mandatory mutation invariants

Treat current Shipper Core/MCP schemas, capabilities, IDs, runtime references, sessions, and revisions as authoritative. Verify the intended active project and resolve human names or order from a fresh observation before mutation. Never guess authority, use filesystem paths as Screenshot Source authority, force-close interactive edits or Undo groups, invoke Undo/Redo autonomously, or blindly replay stale or uncertain work. Re-observe and reconstruct intent after conflict, preview committed visual changes, and stop when the requested capability is unsupported. Submit at most one corrected new request after a confirmed pre-dispatch validation non-commit only when the current schema supplies one unique, minimal, intent-preserving correction to an agent-authored value; a second validation rejection stops.

## Workflow

1. Understand the requested product, target screenshot count, source collection, desired visual direction, and explicit constraints. Preserve autonomous design decisions. A single high-level creative clarification is appropriate only when missing brand/creative constraints would materially change the direction and the user has not already clearly delegated it; see Creation Decisions. Existing safety and product-intent clarification boundaries still apply.
2. Preflight the exact project/session through [Shipper Autonomy preparation](../prepare-shipper/SKILL.md); do not create a replacement for a missing requested project. On READY, inspect current state and required live capabilities. Resolve generic, explicit, additional, orientation or platform scope with [Agent Adaptive Screenshots](../../references/agent-adaptive-screenshots.md) and its [decision tables](../../references/agent-adaptive-screenshots-policy.json): explicit scope, then relevant verified Target evidence, then live native defaults. Ordinary edits to a suitable destination skip Adaptive. Use [Target App context](../../references/target-app.md) only for genuinely ASC-dependent scope; reuse current verified evidence and do not refresh or bind unnecessarily. Target App is ASC context, not the Creative Target below.
3. Resolve every destination before WRITE. For fresh creation, defer adaptation until the step 7 Target decision; for add-spec work, reuse the accepted Target. Process destinations sequentially after complete exact inspection. Preserve existing destinations, including empty ones; adapt only absent destinations and retain earlier successes if a later destination fails.
4. Inspect canonical Canvas order and `isBlank` before structural decisions. Preserve meaningful work and treat an existing empty list as existing.
5. Resolve relevant source collections through the authorized catalog. Names and hierarchy are semantic intent, never authority; obtain current opaque refs and clarify unresolved ambiguity.
6. Preview enough current candidates to ground selection. Choose for visible product value, legibility, distinctiveness, coverage and story; never infer pixels from metadata. For a new Adaptive destination, assign only a freshly authorized compatible capture after commit, otherwise keep the visible empty native mockup and report source pending.
7. Before defining the shared visual system or making any Canvas mutation, form and select a product-specific concept from observed material, distinguish evidence from executable assets, and establish the ordered story and communicative intent through Creation Decisions. Keep exploration internal by default. Before construction, use the standard Creative Target stage: generate once when available, inspect and decompose it, then perform Post-Target Design Resolution before detailed choices or Canvas intentions; otherwise continue directly. Only then apply exact-count rules and adapt absent destinations. For add-spec work, retain the accepted Creative Target. Run steps 8–11 per destination and preserve existing destinations unless separate edit intent authorizes changes.
8. Derive lightweight shared logic for color, typography, Mockups, assets, backgrounds, spacing and Feature Snippets from Post-Target Design Resolution. Decide each Canvas's role, message, visual idea, product evidence and contribution before composing it. Build one complete editable pass with truthful copy, fresh source authority and supported live capabilities. Never hardcode Mockup defaults or invent claims/assets. For a justified atomic graphic, follow Image Generation Orchestration and read the [Generated MCP-native transfer contract](../../references/inbound-transfer-contract.md) at import; keep Text, Mockups, real UI, Feature Snippets and backgrounds native, and atomic graphics as Managed Images.
9. Apply Creation Decisions' single bounded correction only to a proven pre-dispatch validation non-commit; never to uncertain or post-dispatch outcomes.
10. After each meaningful committed visual change, consume returned authority before dependent work and preview the committed result. For Adaptive work, preview every scoped destination Canvas and retained locale, preserve the same Creative Target across formats, and observe persistence after refinements. Applied is not saved; unknown outcomes require exact inspection, never replay.
11. Preview the complete set in committed order and use the Creative Review prompts in Creation Decisions to examine specificity as well as technical quality in the actual pixels. Make focused refinements for material weaknesses. Perform at most two substantive refinement passes, then run a final ordered preview and report the finished set and any preserved work or unresolved limitation.

## Stop and ask only when needed

Stop instead of mutating when the project or screenshot collection is ambiguous, a required capability is unavailable, an interactive edit is active, current authority cannot be refreshed safely, or the single bounded validation correction is rejected. Ask before deleting or repurposing meaningful existing Canvas work, and when the requested exact count cannot otherwise be reached safely.

Route explicit source Metadata authoring to [Author App Store Metadata](../author-app-store-metadata/SKILL.md), secondary localization to [Localize App Store Content](../localize-app-store-content/SKILL.md), and explicit create-and-Ship intent—only after verified save—to [Ship to App Store Connect](../ship-to-app-store-connect/SKILL.md). Screenshot-only work remains screenshot-only even for “all localizations”; this Skill neither authors metadata implicitly nor publishes. The narrow integrated GPT Image → atomic PNG → canonical inbound staging → Managed Image path requires supported live capabilities; unrelated future Agent Asset scope remains reserved.
