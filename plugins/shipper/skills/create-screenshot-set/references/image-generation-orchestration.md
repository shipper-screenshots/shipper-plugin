# Image Generation Orchestration

Use this reference for Create Screenshot Set after observing product material and selecting a concept. [Creation Decisions](creation-decisions.md) guides concept formation and direct-Shipper fallback. Once a useful Target is accepted, its visual design governs reconstruction; apply the decisions and critique prompts to fidelity, subject to the four allowed material divergences below. GPT Image is an integrated capability used by Creative Lab, not a new Creative Intelligence branch. Creative Target, atomic asset and decomposition are workflow terms only.

## Sequence and generation budget

Product Understanding (inspect real Screenshot Sources) → Identity → Concept Exploration / Selection → high-level story / communicative intent → Creative Target → Target Inspection / decomposition → Post-Target Design Resolution → Canvas Intentions → Shipper Reconstruction → Preview / Comparison → Refinement. No Canvas construction/mutation precedes the Target decision. GPT Image does not replace concept formation.

For normal autonomous creation, the Creative Target is standard when integrated GPT Image is available and the user's constraints permit it. Default: **1 primary Target generation call per set**, representing the set together where practical. No one-Target-per-Canvas behavior, automatic variants or aesthetic regeneration loop. A mediocre result is not permission for another call. A second Target requires a materially changed brief or an explicit user request for a new creative direction, not merely “make it prettier.”

Atomic assets have no fixed generation cap or replacement total-call ceiling. Generate the minimum reusable set of atomic assets necessary to faithfully reconstruct all material graphic families in the accepted Target when technically feasible. A minimal direction may need none; a richer direction may need several. Each asset requires a proven missing graphic role. This does not change the one standard Target or two substantive refinement passes; create no persistent planning object or Creative Target state.

## Target inputs and reference selection

Choose a minimal high-value subset of the inspected real Screenshot Sources: core product mechanism, strongest visual material, complementary story moments and distinctive identity. Avoid redundant sources; never automatically select the first N files. The final set may use other authorized sources: Target references do not define final Canvas mapping.

Use only actual visible previews or the image-reference mechanism supported by the current Codex runtime, respecting its current input limits. An authorizedSourceRef is not a filesystem path: never invent or derive a path from it. If the selected real sources cannot safely be supplied through that supported mechanism, skip the Target and continue directly in Shipper. Do not modify runtime, fetch guessed paths or require the user to repair an optional stage.

Give GPT Image the selected references with clear roles, verified product facts, selected concept, high-level communicative intent, relevant identity, requested set size, narrative progression and explicit constraints. Distill only relevant Design Intelligence principles into concise visual instructions; never mechanically inject all nine Markdown files. Do not send long internal reasoning or a technique checklist.

Describe the request as visual exploration of a cohesive, product-specific set that will later be reconstructed in Shipper, not final App Store artwork. Ask for meaningful compositional relationships and variation where the concept benefits. Preserve product identity and truth: real UI is reference material, never permission to invent features. Do not prescribe gradients, icons, illustration, asymmetry, oversized Mockups, photography or snippets by default. Pre-Target aesthetic ideas remain provisional: normally resolve exact backgrounds, color distribution, Feature Snippets, precise Mockup staging and decorative assets after inspecting the Target. Communicate what the set should express without unnecessarily locking how it will look.

## Inspect and interpret the Target

Keep the generated image visible to the user and explicitly introduce it as a Creative Target, for example: “Here’s my Creative Target for the set: the visual design I intend to reconstruct as editable elements in Shipper.” Describe it as the intended visual design; distinguish it from the final Shipper set, which is the actual editable implementation of that design. Do not promise pixel-perfect identity. Never present the Target as the completed Shipper result.

Visually inspect the actual generated output before resolving the final system. Identify the perceptible concept, strongest relationships, Mockup treatment, background behavior, graphic language, depth, rhythm, useful product emphasis, weak/redundant elements, invented content and unsupported ideas. Trust pixels over the explanation.

The accepted Target is visual design authority, never product truth, UI authority, factual copy authority or a mathematical pixel specification. Generated UI, features, labels, values and claims are non-authoritative. Use verified Screenshot Sources and project facts for product evidence; write truthful native Shipper Text.

Before acceptance, decide from inspected pixels whether there is a useful, coherent visual design that can be reconstructed truthfully. This is an internal usefulness decision, not a new mandatory user-approval stage. Do not call a useful Target unusable merely because its design is unfamiliar, asset-rich or harder to reconstruct.

| Target problem | Action before acceptance |
|---|---|
| Generic | Assess whether its actual relationships still provide a useful design for this product. |
| Partially useful | Identify useful strong decisions and factual/translation problems; acceptance does not authorize later aesthetic reselection. |
| Incoherent | Assess whether a coherent useful design exists; otherwise use the direct-Shipper fallback. |
| Invented UI/features | Replace false content with real Screenshot Sources while preserving staging/composition wherever possible. |
| Bad text | Rewrite factual wording as native Shipper Text while preserving the useful visual treatment and containers. |
| Too ambitious | Check native capabilities, existing assets and generated atomic assets before claiming a limitation. |
| Poorly respects sources | Correct distorted product evidence without discarding independent visual decisions. |
| Nothing useful survives | Abandon the Target and continue through V1.5 direct Shipper execution. |

A weak or failed Target never blocks creation and does not automatically trigger a second Target. Once accepted as useful, do not reopen visual exploration during reconstruction. If generation later becomes unavailable, continue with accepted material under the fallback safeguards; the accepted Target remains the visual authority and any unresolved fidelity loss must be disclosed.

## Accepted Target visual design authority

After generation, inspection and acceptance as useful, freeze the Target's strong visual decisions as the reference for reconstruction. GPT Image designs. Codex reconstructs faithfully. Shipper keeps the result editable. Reconstruct the Creative Target in Shipper; do not create a second design inspired by it. Preserving only “the vibe” is insufficient: preserve the actual visual system.

Preserve materially recognizable decisions wherever Shipper can express them: Canvas background behavior, palette and color distribution, composition, headline treatment, text containers / speech treatment, Mockup scale, position and crop, Rotation and supported Rotation X / Rotation Y, perspective/depth, overlap, foreground/background relationships, negative space, framing, graphic families, recurring motifs, environmental graphics, character/story-world graphics, textures/materials, visual rhythm across the set and relative visual weight.

Do not perform a second Art Direction pass. Another color or background might look better, more variation might be interesting, another layout is valid, a Feature Snippet could enlarge evidence, another asset treatment exists, or an earlier Creative Lab heuristic preferred something else: none alone authorizes a material divergence.

A material divergence requires exactly one or more of these four allowed reasons, grounded in evidence:

1. **Product truth:** the Target invented or distorted UI, functionality, values, claims, factual copy or product evidence. Correct the false content while preserving independent visual decisions.
2. **Editability:** literal reproduction would flatten meaningful content that should remain supported native Text, Mockup, Screenshot Source, Feature Snippet, background or another editable element. Reconstruct those parts natively while preserving their visual relationships.
3. **Proven Shipper limitation:** the treatment cannot reasonably be reproduced after checking actual native capabilities, suitable existing assets and generated atomic assets. Use the closest faithful simplification necessary; convenience or an untried alternative is not proof.
4. **Explicit user instruction:** the user asks to change the Target or reconstruction. Limit the change to that instruction and preserve accepted work outside it.

Aesthetic preference alone is not a fifth exception. An expected improvement in hierarchy, readability, product specificity or composition is not independent permission to redesign; establish one of the four reasons. Required readability for truthful product communication may fall under product truth, not discretionary enlargement.

Product truth is not visual redesign: replace invented UI in a tilted phone with the real Screenshot Source inside a similarly staged editable Mockup. Do not substitute a centered phone composition just because the generated UI was wrong. Likewise, rewrite inaccurate factual wording while preserving its visual treatment and text-container relationship where possible.

## Graphic System Decomposition

After Target inspection and before final Shipper construction, identify recurring graphic families from actual Target evidence, not only individual objects. Consider caption / speech language, expressive marks, environmental graphics, character / story-world graphics, recurring motifs, framing language, textures/materials or other recurring relationships only where visible. These are possibilities, not required categories.

For each important family, determine its role: speech, motion, depth, connecting elements, inhabiting the story world, framing the product or recurring visual rhythm. Identify ALL material graphic families needed for faithful reconstruction and determine how each will survive in Shipper. Reconstruct all of them when technically feasible; “enough of the Art Direction survives” is not a completion threshold. Do not reduce a rich recurring system to isolated decorative symbols: retaining stars and notes alone does not preserve a comic language whose balloons, marks, characters and environment interact with the product.

Translate every material family by assessing native capabilities, suitable existing assets, one or more generated atomic assets, or faithful simplification only when necessary. Prefer simplification without material loss; any material simplification or omission requires one of the four allowed reasons. A family is not unnecessary merely because the remaining design looks good. Native existence does not establish visual adequacy: evaluate role, style, silhouette, material and relationship. Carry this reasoning into Post-Target Design Resolution and Canvas intentions without a new planning architecture.

## Decompose and choose materials

Mentally classify meaningful components, without a mandatory user-facing matrix:

- **A — Native Shipper:** Text, Mockup, real Screenshot Source, Feature Snippet, background, supported native transforms.
- **B — Existing Shipper asset:** suitable SF Symbol, illustration, drawing or available image.
- **C — Missing atomic graphic:** independently useful material that materially contributes and lacks an adequate existing alternative.
- **D — Unsupported / unnecessary:** establish whether it is non-material or a material relationship requiring an allowed divergence. Discard false content, preserve independent staging, and prove a limitation before simplifying a material graphic role.

Decompose spatial relationships as well as element inventory: perceived scale, position, crop, overlap, depth, perspective, anchoring, negative space and relative visual weight. Identify how elements relate before mapping those relationships to supported properties of the selected asset type.

The live/canonical Shipper contract remains authoritative. Discover asset-specific capabilities; do not assume transformations transfer between Mockups, Feature Showcase Snippets, Text, Graphics / SF Symbols or Managed Images. Mockup reasoning recognizes Size, position, Rotation (planar), Rotation X and Rotation Y, shadow, Z-Index and Overflow where supported. Use Rotation X / Rotation Y when visible Target perspective or depth benefits from them; do not force perspective merely because controls exist. Do not invent a `Rotation Z` Shipper property. These UI names are reasoning cues, not executable field names or a replacement for capability discovery. For a Snippet, resolve supported position, width/height, border/color, radius and shadow; do not borrow Mockup rotations. For Text or Graphics / SF Symbols, verify their own supported color/gradient, size, position, rotation, layering and other treatments rather than assuming shared controls. Map every intended transform through the actual contract before execution.

This is reasoning, not a ScreenshotPlan, persistent Concept model or new architecture layer.

Native-first means using an existing native material when it adequately expresses the intended visual role. Shared subject matter alone is insufficient: evaluate silhouette, visual weight, material, style, tone, scale and relationship to the composition. An appropriate system symbol may need no generation; it is not automatically an adequate substitute for expressive graphic material. Preserve the intention instead of defaulting to the easiest substitute. Native-first must not become conservative-first or a blanket generated-asset prohibition.

## Post-Target Design Resolution

Explicitly resolve faithful Shipper construction after inspection. Preserve, modify or discard earlier aesthetic assumptions in favor of the accepted Target's decisions; an earlier preference has no automatic priority. Resolve how to express its detailed backgrounds, color distribution, Snippet relationships, Mockup staging and graphic families through real capabilities and accepted materials before Canvas intentions.

This is translation resolution, not a second aesthetic selection. Preserve strong Target decisions unless one of the four allowed material divergences is proven. Each Canvas maps its role, message, product evidence and visual relationships to the relevant Target panel; do not use V1.5 concept heuristics to replace that panel with another acceptable composition. Without a useful Target, the existing V1.5 direct-Shipper design process remains available.

## Conditional atomic graphics

Every generated asset must address a proven missing graphic role and not be redundant with another generated or native asset. It must remain an independent editable Managed Image, with bitmap internals subject to the existing editability boundary. Generate only when all six conditions hold: semantic relevance; meaningful compositional contribution; inadequate existing Shipper materials; independent graphic usefulness; integration preserving editability; and material contribution to faithful Target reconstruction (or the chosen concept in direct-Shipper fallback). Empty space, incidental Target objects, “assets make it creative” or decoration on every Canvas are not sufficient reasons. A proven material Target graphic role is a normal reason to generate a fidelity asset when native materials are inadequate; do not downgrade the Target merely to avoid generation or import.

Start with the highest-impact missing asset. Ask: what is the minimum reusable asset set that preserves all material graphic roles and their relationships? Prefer reusable material and reuse across Canvases when compositionally appropriate; do not force reuse when it harms the design. Adequate existing material may resolve the need without generation. A different composition or omitted material family requires an allowed divergence; it is not an asset-saving shortcut. If many unrelated assets seem necessary, first reconsider whether the graphic system can be expressed more systematically. No brute-force generation or aesthetic regeneration loops; an imperfect previous result alone never justifies another generation.

Request a standalone graphic with useful silhouette/framing, sufficient resolution and presence at its intended rendered size, compatible with the Art Direction. Require **no text, no app UI, no Mockup/device and no complete Canvas**. Request a transparent background where appropriate; no surrounding scene unless that scene itself is the independent atomic graphic. The Target may inform style, material, palette, volume and visual language. Do not request reproduction of the entire Target or literal crop/extraction from it.

Visually inspect the actual atomic artifact before staging: unwanted text/UI, unexpected background, actual transparency where expected, silhouette, presence, concept compatibility and value at final scale. Do not import an unusable asset because quota was already spent. A returned image that is visually unusable may receive a targeted correction only for a diagnosed important functional gap in a proven missing role; imperfection alone is insufficient. Reassess adequate existing translations first. An actual tool failure or unavailability follows the fallback below instead of a visual-correction retry. Reuse accepted artifacts during refinement.

## Canonical staging and editable import

After accepting an atomic PNG and when ready to import, use the live MCP-native path through the [Generated native transfer contract](../../../references/inbound-transfer-contract.md), [native schema](../../../references/inbound-transfer-contract.json) and [native types](../../../references/inbound-transfer-contract.d.ts). Read the current capability and keep byte reading, encoding and chunk submission programmatic, outside model context; never copy or print payloads. The existing CLI adapter remains governed by the packaged [Generated inbound staging contract](../../../references/inbound-staging-contract.md), with its [machine-readable companion](../../../references/inbound-staging-contract.json). Follow it for dynamic authority, exact-byte preparation, invocation, success verification, expiration/consumption, errors and restaging. Never reconstruct its protocol from memory or duplicate a handwritten CLI command here.

MCP-native staging runs in the connected helper; do not launch the CLI merely by habit. Any producer or CLI execution used for inbound staging requires an execution context approved according to the current Codex execution policy. At the first staging need, request or use the appropriate approved execution with a concise justification explaining the staging purpose. For subsequent assets, let Codex apply the actual approval scope and policy. Do not assume one approval authorizes future staging calls, systematically request another approval when current policy already permits execution, or promise that only one approval will be required. Never suggest broad Python or helper permissions merely to avoid future review. Execution approval is controlled by Codex, not granted by this Skill or Shipper.

Distinguish the execution and staging outcomes before communicating failure:

| Observed outcome | Interpretation and action |
|---|---|
| Approval required | Execution needs the supported Codex approval path; request/use that path. An abort alone does not prove approval was the cause. |
| Explicit user decline/cancel | Respect the decision; do not repeatedly request approval for the declined execution. Continue or adapt reconstruction with permitted material when possible. |
| Canonical staging validation failure | The helper ran and returned the canonical staging diagnostic; follow its supported recovery rules. |
| Runtime/process failure | An approved launch can still fail; examine the process result and available diagnostics without relabeling it as user denial or media validation. |

Do not infer explicit user decline/cancel from a policy or automatic-review rejection; identify the actual decision source. Never report “Managed Image import failed” when staging failed before an import mutation was attempted. State that staging was blocked or failed and that import was not attempted. Respect the existing uncertain-mutation boundary if an import was actually dispatched. If adaptation loses an important graphic role, disclose the difference as required below; refusal does not authorize another generation or a security workaround.

Generate and inspect first; stage close to the intended import, not speculatively. Follow the canonical reference's rules for expired or consumed refs. If fresh staging is needed because a ref expired, restage the **same accepted PNG**; do not regenerate the graphic. An uncertain mutation outcome still requires canonical observation, never blind replay.

Read the complete [mutation types](../../../references/mcp-mutation-contract.d.ts) and relevant [JSON constraints](../../../references/mcp-mutation-contract.json) as required by Core Authority. Use create_canvas composition.images[] or edit_canvas changes.add.images[] according to current reconstruction state, with supported transforms only. The source crossing into Managed Image creation is exclusively **kind staged with the opaque stagedSourceRef as ref**. Never put external paths, file URLs, CODEX_HOME/generated_images paths, raw PNG bytes or base64 into Canvas mutations. No new entitlement or temporary exception is authorized.

Meaningful editability is mandatory: headline → Shipper Text; device → Shipper Mockup; real UI → Screenshot Source; close-up → Feature Snippet; background → Shipper background; suitable symbol/illustration → native asset; generated atomic graphic → Managed Image / CanvasImageAsset. Never import the complete Creative Target as final flattened Canvas artwork; **no exception**. A Managed Image remains a bitmap element, not editable internal text/UI. Staging or mutation success alone does not establish document save/persistence.

## Failed asset and graphic-role continuity

A failed atomic generation or staging/import attempt must not silently erase an important graphic family. Diagnose and retry only when the existing supported workflow permits it; this grants no retry for uncertain mutation outcomes and does not override generation-error fallback. When staging alone failed, reuse the same accepted artifact through the canonical staging workflow, including explicit execution approval where required. Otherwise find an adequate translation with available material. If the important role still cannot be implemented, explicitly acknowledge that the final reconstruction materially differs from the Creative Target; never present a strongly degraded reconstruction as equivalent.

## Target ↔ Shipper review and feedback

Before completion, review graphic-system survival through a Canvas-by-Canvas fidelity review: compare each Target panel with actual committed Shipper pixels, then the ordered set together. Check which material families survived, disappeared or became weaker and whether their relationships with the product survive. Palette, typography and coherent Mockups alone are not proof of faithful reconstruction. Correct material losses when technically feasible within the existing refinement process; otherwise acknowledge the unresolved loss without declaring faithful completion.

Review when relevant: background behavior; color distribution; headline treatment; text containers / speech treatment; Mockup scale, position and crop; Rotation / Rotation X / Rotation Y through supported properties; perspective/depth; overlaps; graphic families; foreground/background relationships; environmental graphics; character relationships; recurring motifs; textures/materials and framing; relative visual weight; anchoring and negative space; rhythm with adjacent Canvases. This preserves concept survival, hierarchy, important compositional relationships, Mockup/product role, background atmosphere/behavior, graphic language, rhythm/progression and product specificity through fidelity to the accepted design. Without a useful Target, review the concept and expected consequences directly as in V1.5.

For every MATERIAL difference, identify internally: Target decision → Shipper difference → allowed reason. Require product truth, editability, proven Shipper limitation or explicit user instruction; no post-render aesthetic rationalization. If no allowed reason exists, correct the reconstruction within the existing refinement process. Do not keep an unauthorized difference because the Shipper version is also aesthetically acceptable. Check corrected relationships in rendered pixels, not just planned values.

Do not optimize pixel similarity as mathematical pixel equality. Evaluate perceptual design fidelity, not exact coordinates, incidental generated details or invented UI pixels. Pixel-perfect matching is not required. Preserve actual material visual relationships; diagnose weak translation, inappropriate substitutions or overly conservative native-first choices rather than generating a second design.

Completion requires the final editable set to be recognizably a faithful reconstruction of the accepted Creative Target except for allowed divergences. Side-by-side test: would the user recognize the Shipper set as the editable implementation of that design? If NO, continue refinement when technically possible within the existing budget. Looking good, readable Mockups, a coherent palette or general Art Direction survival alone do not establish completion. At the budget limit, stop and report unresolved fidelity gaps; do not claim the set faithfully complete and do not reset the limit.

Preserve the maximum **two substantive refinement passes**. Target use, atomic generation and concept revision never reset that limit. Prioritize product truth, concept survival, translation quality, hierarchy, Mockup/product presence, asset relationships, readability, then polish. Do not spend passes reproducing small Target details.

Natural feedback such as “too busy,” “more minimal,” “phones are too small,” “I don't like that illustration,” “move this” or “undo” first produces targeted Shipper edits, preserving accepted work. Default: no new Target during refinement. Generate another atomic asset only for a genuine missing visual role that accepted material cannot satisfy and under the minimum reusable set policy. Follow Creation Decisions for scoped Undo/restoration through available capabilities; never regenerate a previous image to simulate Undo. Do not invent Undo tools or roll back earlier accepted refinements.

## Availability, fallback and user control

Use integrated GPT Image only. Tool absence, unsupported client, plan limitation, quota exhaustion, runtime/generation failure or an unusable reference flow immediately falls back to **Design Intelligence → V1.5 Concept Formation → direct Shipper execution**, reusing the concept already formed. No repeated generation probes. Tool unavailability, quota exhaustion or a runtime/generation error ends image-generation calls for this set; continue editing Shipper with accepted material. This differs from receiving a valid image whose visual result is weak. Shipper project/authority and mutation-safety stop conditions still apply; optional generation availability does not override them.

**API fallback is explicitly prohibited for Creative Lab**, even if a generic image-generation Skill suggests it. Do not request OPENAI_API_KEY, use BYOK, switch to OpenAI API or buy/request credits. Continue without unnecessary technical messaging. When expectations are affected: “Image generation isn't available right now, so I'm continuing the composition directly in Shipper.” Do not expose quota/billing details unless useful or requested.

| User instruction | Behavior |
|---|---|
| Normal autonomous screenshot-set request | Orchestrate the standard Target and conditional assets without requiring the user to name these stages. |
| “Don't generate images” | No GPT Image calls, including Target and atomic assets. |
| “Don't use AI-generated graphics” | No Target and no generated atomic assets by default. |
| “Use only my assets” | No newly generated graphics; use authorized user and native Shipper materials. |
| “Keep it minimal” | Target remains available; minimalism constrains the direction and assets may be unnecessary. |

Other explicit constraints override defaults. Do not require internal concept approval or expose the decomposition matrix; retain existing clarification and permission boundaries and client-required media display behavior. The user-facing result is editable Shipper screenshots. Visual Reference Library remains a deferred complementary experiment: no retrieval, indexing or storage is introduced.
