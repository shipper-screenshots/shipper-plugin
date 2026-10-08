# Creation Decisions

Read this reference when planning or executing `Create Screenshot Set`.

## Candidate inspection and selection

- Discover candidates through `browse_authorized_screenshot_catalog` and use the current returned authority.
- Call `preview_authorized_screenshot` when visual understanding is needed. Inspect enough candidate pixels to ground the selection, but do not preview every candidate by default.
- Do not infer screenshot content from display name, filename, checksum, dimensions, modification date, or collection order.
- Select for visible product or marketing value, legibility, distinctiveness, feature/use-case coverage, and contribution to the ordered story.
- Keep `authorizedSourceRef` runtime-scoped and fresh. Candidate preview is read-only and does not assign or consume it.

## Exact screenshot count

When the user explicitly requests an N-screenshot set, normally finish with exactly N Canvases.

- Fewer than N: create the missing Canvases only when the live contract supports it.
- Exactly N: reuse suitable current structure unless the request clearly requires a different arrangement.
- More than N: inspect every surplus Canvas in current canonical state before deciding whether it can be removed.

For a pre-existing surplus Canvas:

- `isBlank == true`: it is eligible for automatic removal.
- `isBlank == false`: preserve it and ask before deletion when exact-count completion requires removal.
- Missing or insufficient blankness evidence: preserve it and ask only if deletion is required.

Do not reinterpret `isBlank == false` as empty because its Screenshot Source is absent, its Mockup is hidden, or it looks visually empty. A duplicated Canvas can retain authored composition.

A Canvas created by Codex during the current workflow may be removed as cleanup only when fresh identity and canonical state still prove that it is the Canvas created by this workflow. Never guess this provenance.

If meaningful existing work must be overwritten, repurposed, or deleted to reach the target count, preserve it and ask. Exact count does not authorize silent data loss.

## Visual system and creative autonomy

The open aesthetic choices in this reference apply during concept formation before a useful Target is accepted and during direct-Shipper fallback without one. After acceptance, the Target is visual design authority: use these prompts to diagnose faithful reconstruction, not to start a second Art Direction pass. Material departures are limited to product truth, editability, proven Shipper limitation or explicit user instruction, as defined in Image Generation Orchestration. An aesthetic improvement predicted by Codex alone is insufficient.

When creation is clearly delegated, choose reversible supported details without routine confirmation: screenshot selection, sequence, headlines, supported colors, typography, hierarchy, spacing, composition, Mockup treatment, and supported Shipper assets.

Before committing to an Art Direction, synthesize identity signals actually observed in the product and supplied brief. Where available, consider product personality, Brand Kit, palette, typography, mascot, illustrations, imagery, recurring shapes, UI character, implied motion, gamification, product terminology, distinctive feature states, visual motifs and emotional tone. This is analysis of evidence, not a checklist of things to insert.

Distinguish a visual identity signal from an executable asset available through Shipper. Seeing a mascot or motif inside a Screenshot Source does not prove independent reuse or extraction is supported. Never invent extractability or asset availability. Its character may still inform color, typography, composition, rhythm, surrounding assets and Art Direction through supported choices.

After inspecting Screenshot Source pixels, identify the strongest product material that could change its presentation: photography, maps, timelines, charts, conversations, people, progress, unusual UI structures, recurring shapes, spatial relationships, density, implied motion or emotional outcomes may matter. These are examples, not a checklist. Ask what these characteristics could change about composition, framing, hierarchy, palette, rhythm, typography, product prominence, backgrounds or narrative. Material need not be extracted or appear outside the Mockup to influence the concept; lack of extractability is not a reason to ignore its creative implications.

Before defining the shared visual system or making any Canvas mutation, internally consider multiple meaningfully different visual concepts, with no fixed count. Each should connect the product, message, visual experience and composition. Differences in palette, font, background color, adjective or Mockup position alone are insufficient. A list of treatments such as cream backgrounds, navy typography and large phones describes styling, not necessarily a useful idea about how the product should be experienced visually. Establish that idea before arranging elements.

Select the concept that best balances product truth and identity, the user request and message, available Screenshot Sources and executable assets, Shipper capabilities, visual potential, clarity, specificity and potential across the set. Which interpretation creates the strongest meaningful relationship between this product and its presentation? Do not choose the safest merely because it is easiest to execute, or the most unusual merely because it appears creative. Consult the relevant linked Design Intelligence knowledge selectively when formation or review raises a question about Art Direction, composition, hierarchy, typography, color, assets or critique; do not load all nine mechanically.

Test: Could this Art Direction belong almost unchanged to another app? Distinguish product-specific content from product-specific staging. An app-specific Screenshot Source inside an interchangeable composition does not by itself establish specificity. If the Screenshot Source were replaced with another app, would the visual idea remain almost unchanged? If yes, reconsider its connection to this product. Familiar compositions remain valid when they serve the concept; do not manufacture specificity through arbitrary decoration or novelty.

Before the Creative Target, establish the selected concept's high-level story and communicative intent: what should the set communicate? Aesthetic ideas remain provisional. Normally defer exact backgrounds, color distribution, Feature Snippets, precise Mockup staging and decorative assets until Target inspection. Do not turn an early preference into an execution requirement.

Concept formation belongs to Creative Lab. Explore and select internally by default; do not require the user to choose concepts or receive rejected alternatives, scores, long strategy explanations or consequence matrices. Explain when requested or useful without making explanation or approval a prerequisite. The existing high-level clarification boundary below remains unchanged. Creative ambition means pursuing the strongest meaningful interpretation, not counting techniques: metaphor, photography, illustrations, icons, snippets, immersive backgrounds, aggressive crops, oversized typography, asymmetry, depth, unusual layouts, a wow Canvas or a unique layout per Canvas are not requirements. Restrained, conventional and repeated compositions can be strongest. Ask why a familiar headline + centered Mockup + simple background is the strongest expression here, applying the same conceptual scrutiny as to an unconventional composition; readability, stability and safety alone do not answer that question.

Actively inspect which observed identity signals are actually available as executable assets through supported Shipper discovery and supplied material. Consider available illustrations, drawings, icons, SF Symbols, images, brand assets, user-provided assets, shapes and other reusable visual elements relevant to the direction. Do not infer availability or extractability from a Screenshot Source, and do not bypass capability boundaries to obtain an asset.

When a distinctive executable asset exists and materially supports the Art Direction, consider its contribution as a focal point, metaphor, directional cue, rhythm, visual bridge, personality, storytelling or recurring motif. Its use is optional, not required on every Canvas. Absence of extra assets is not a failure; typography and a Mockup may be the strongest expression of the app.

For any introduced icon, SF Symbol, illustration, sticker, 3D object or graphic accent that is actually executable, decide whether it is a meaningful one-off accent or part of the recurring visual language. For a recurring language, maintain enough consistency in style, scale behavior, positioning logic, color, treatment, role or repetition to make the relationship intentional. This does not require the same icon or an icon on every Canvas. Avoid a new decorative vocabulary that appears once and disappears without reason; a justified one-off remains valid. Context and emphasis are valid roles too, but an empty area alone is not a reason to add an asset.

Aim for family resemblance with controlled variation for rhythm and emphasis. Coherence can come from Art Direction, typography, palette, asset treatment, rhythm and visual attitude rather than identical headline positions, subtitles or Mockup placement. Do not force every Canvas to differ; repetition remains valid when it strengthens the intended system.

Evaluate an asset on both semantic relevance and visual contribution at its rendered size and position. A calendar for planning, clock for habits or headphones for audio is not useful merely because the association is correct. Does it improve the composition or story? If not, reconsider its role, treatment or presence. Assets need neither physical interaction with UI nor large size; no asset is required.

For missing brand/creative constraints that would materially change the direction, a single high-level clarification may be useful: "Do you have any visual preferences or brand constraints I should respect, or should I take full creative direction?" Do not ask unnecessarily when direction is already clearly delegated. Do not turn clarification into a questionnaire about gradients, icons, cropping, centering or other routine designer decisions. Existing questions needed to preserve product intent or meaningful work still apply.

## Canvas intention and product treatment

After concept selection and high-level communicative intent, but before detailed visual resolution, follow [Image Generation Orchestration](image-generation-orchestration.md). Identify evidence-backed recurring graphic families and their product relationships through that reference before construction. A useful inspected and accepted Target governs visual execution; it cannot replace product truth or concept formation. The direct-Shipper fallback preserves these same decisions.

## Post-Target Design Resolution

After inspecting and accepting the Target, preserve, modify or discard earlier aesthetic assumptions to reconstruct its strong visual decisions faithfully. The Target may improve the original idea; an earlier preference has no automatic priority. When the Target is unavailable or unusable, resolve the design directly through the existing V1.5 fallback.

With an accepted Target, all following color, Mockup, asset, background, copy and composition diagnostics assess whether its actual decisions survive in Shipper. They do not authorize replacement layouts, colors, omission or discretionary simplification. Resolve supported means to reproduce those decisions. With no useful Target, translate the selected concept into concrete compositional consequences: If this concept is real, what should visibly change because of it? Determine the relevant relationships in Mockup role and prominence, scale, framing, crop or containment, typography and product, negative space, density, background or photography treatment, asset language, Feature Snippets, depth, rhythm and Canvas-to-Canvas progression. Not every dimension must change. Keep the intended concept, its grounding material and expected visible consequences clear in working context so rendered results can be compared with this pre-execution intention. These are Skill reasoning stages, not architecture components or persistent product objects; create no JSON planning artifact or persistent Concept model.

Only after Post-Target Design Resolution, define the shared visual system to serve them. Decide how color behaves across the complete set: dominant palette, background behavior, typography color behavior, accents, contrast and canvas-to-canvas variation. Test whether you can explain why the Canvases belong to the same color system. Choose these relationships from the app and Art Direction rather than independently assigning colors to each Canvas. Variation remains legitimate; this is not a fixed palette or a universal black/white text rule.

Verify that this color logic is perceptible in the rendered ordered set, not merely explainable internally. If color encodes groups, progression, mood changes or emphasis, is that relationship understandable when viewing or swiping? Reconsider a distribution that feels accidental. Deliberately irregular color systems remain valid; alternation, symmetry, equal distribution, one background or multiple backgrounds are not requirements.

Extend this into lightweight shared logic for typography, Mockups, graphic assets, backgrounds, spacing and Feature Snippet behavior before executing the complete set. Avoid over-specifying numeric rules. Coherence comes first; introduce material exceptions after Target acceptance only for the four allowed reasons. In direct-Shipper fallback, exceptions may serve the Canvas role or intended system, not merely make adjacent Canvases different.

Define flexible Mockup behavior for the set: default scale behavior and containment, preferred alignment, typical relationship to the headline when present, typical depth treatment and reasons for exceptions. These are Art Direction decisions, not fixed tool values or a layout template. The set may be mostly centered, mostly full-device, mostly close-up, mostly immersive or intentionally varied. Scale changes need a purpose such as product emphasis, feature detail, narrative importance, hierarchy, depth, rhythm or a different compositional role. A change made only to create variation is weak.

Decide the set-level background strategy using available supported material. Neutral minimal, brand-led flat color or gradient, contextual or immersive imagery, texture, pattern, atmosphere, or a mixed but systematized approach are possibilities, not presets. For each Canvas, evaluate whether the background supports identity, mood, hierarchy, product visibility, atmosphere or context. If it contributes none of these, consider simplifying it. Do not add photography, gradients, textures or effects merely to appear art-directed, or default to a plain color merely because it feels safe.

Before composing each Canvas, decide its role, primary message, primary visual idea and product evidence needed. Do not assume a kicker, headline, subtitle and centered full Mockup. A headline alone, one word, product UI alone, headline with product, a Feature Snippet, illustration with product, typography-led or product-led composition, or another supported structure may serve the intention. These are possibilities, not templates.

How does this Canvas advance, express, vary or deliberately pause the set's selected visual concept? Let that contribution guide its relationships. Neither identical expression nor a different composition on every Canvas is required; shared Art Direction can support repeated or different layouts.

For each Canvas using a Mockup, explicitly decide its role, visual weight, scale, position, crop or containment, orientation/rotation when relevant, and relationship to the headline when present, negative space and other visual elements. Ask: What visual role should this Mockup play on this Canvas? Hero, supporting, layered, close-up, cropped, centered, off-center or background-like treatments are possibilities, not required categories. These are decisions, not fields that must all vary. Ask whether the treatment serves this Canvas or is merely inherited from the previous one. Never hardcode default Mockup properties; observe current state and use only values supported by the live contract.

When a Mockup is displaced from the natural visual center, ask: What is this space doing? It may provide room for copy, a snippet or an asset, active negative space, directional tension, balance, depth or asymmetrical rhythm. If the answer is effectively nothing, reconsider placement; centering is a fallback, not a mandatory rule. Neither centering nor asymmetry is mandatory, and asymmetry is not inherently more creative.

Distinguish active negative space from accidental emptiness. Active space can provide focus, calm, premium restraint, tension, breathing room, hierarchy or directional movement. Accidental emptiness arises when major elements appear undersized, arbitrarily displaced or disconnected and the remaining area has no perceptual function. Do not automatically fill it with icons, illustrations, snippets or text. Larger product evidence, different positioning or crop, stronger hierarchy or simplification may resolve it.

Compare perceived Mockup scale across the rendered set. Similar roles should normally feel intentionally related in presence, without identical numeric scale. Hero emphasis, close-up, feature visibility, hierarchy, depth, narrative progression or intentional composition can justify differences. If the user saw these Canvases side by side, would one device look accidentally smaller or larger than the others? If yes, correct it or make the compositional reason visually apparent.

As the set takes shape, compare approximate Mockup scale, position, orientation and containment across Canvases. If more than two Canvases use essentially the same treatment, explicitly verify whether repetition serves the Art Direction or is inherited from habit. This is a diagnostic trigger, not a maximum repetition count. If habitual, reconsider the relevant Canvases: larger product emphasis, a smaller supporting Mockup, a close-up, stronger crop, full containment, a different vertical position or a different relationship with typography may help. These are possibilities, not requirements; intentional repetition remains valid.

After Target inspection, require a perceptible contribution from a Feature Snippet in the intended composition. Ask whether relevant product evidence is actually insufficient, rather than whether it could theoretically be larger. If the Target already communicates the feature clearly through the Mockup, preserve that relationship by default. Do not introduce a Snippet that materially changes a strong Target composition as an independent redesign heuristic. Use one for product truth/readability necessary to communicate the intended Target, an explicit Target relationship, explicit user instruction or a proven Shipper translation need under the four-reason boundary. When considering a Feature Snippet, evaluate what it adds that the Mockup does not already communicate clearly. Keep it for clarification, emphasis, readable product proof, a useful close-up, stronger hierarchy or a meaningful compositional relationship. If it merely repeats already-visible UI, floats without a clear relation, competes accidentally or looks pasted onto the Canvas, reconsider its contribution and integration. Feature Snippets are optional.

Review headline, Mockup, Feature Snippet and supporting assets together. Is the Mockup still carrying the intended product evidence? Does the snippet clarify or amplify it, remain proportionate to its importance, and make its relationship understandable through placement? Subordinate, equal or dominant snippet presence can be intentional; it should not accidentally become the primary subject. Rebalance confused hierarchy before defaulting to removal. Snippets need not always be smaller than Mockups.

Decide how the snippet connects visually to the product demonstration: overlap, alignment, proximity, depth, a shared axis, edge relationship, directional flow or a relationship to the UI area emphasized may help. Direct physical attachment is not required; a floating snippet can work when justified. Does it feel integrated into the composition, or merely added after placing the Mockup?

## Copy

For the opening Canvas, decide what introduces the product most meaningfully. Before adding the app name as standalone copy, determine its communicative role: a meaningful brand statement, deliberate logo/wordmark composition, narrative introduction or product meaning that depends on the name can justify it. Simply identifying the app is insufficient: the App Store listing already does that. If removing the name leaves the opening message equally strong or stronger, omit it. A product promise, benefit, emotional opening or visual concept may serve better. App names are not banned.

- Keep headlines concise, quickly understandable, visually usable, and consistent in tone.
- Ground copy in visible screenshot evidence and user-provided product facts.
- Prefer benefit-oriented language where it is truthful and useful, without forcing it on every Canvas.
- Never invent features, performance claims, guarantees, pricing, awards, popularity, or other unsupported assertions.

Supporting copy is optional. Before adding a subtitle or explanatory sentence, ask whether it adds meaning beyond the headline and product evidence. Evaluate its contribution at real App Store viewing scale. Omit copy that merely repeats the headline/UI or becomes too small to contribute meaningfully; do not substitute arbitrary character limits or fixed font sizes for that judgment.

Before adding it, apply the removal test: If this supporting sentence were removed, would the headline and product evidence still communicate the intended message? If yes, seriously consider omission. Is the text large and important enough to contribute at real App Store viewing scale? A subtitle can earn its place through clarification, essential context, differentiation or information not already visible; it is not banned.

Before retaining secondary copy, evaluate perceptual as well as semantic contribution at realistic App Store browsing scale: does it add information beyond the headline and product evidence, and is it prominent enough to actually be consumed? If the user does not read it, does it become visual noise? Useful copy that requires an awkward hierarchy to remain readable may not belong on the Canvas. Do not automatically enlarge every subtitle; subtitles remain optional, not banned.

Do not automatically generate app/project names paired with arbitrary sequence numbers, category captions or pseudo-editorial metadata. A label should carry genuine product, brand, narrative or informational meaning. Meaningful labels remain valid.

## Review and bounded refinement

When a useful Target was accepted, perform the Canvas-by-Canvas Target → Shipper fidelity review in Image Generation Orchestration within this same review and budget. The critique prompts below diagnose lost Target decisions and execution issues; they do not reopen visual exploration. For every material difference, identify Target decision → Shipper difference → allowed reason. Correct unauthorized differences rather than justify a second design after rendering. Aesthetic acceptability alone is not completion.

When a useful Creative Target exists, incorporate the qualitative Target ↔ Shipper comparison in [Image Generation Orchestration](image-generation-orchestration.md) into this same review and two-pass budget. Otherwise compare the selected concept and intended consequences directly with Shipper pixels as before. Ordinary feedback edits Shipper first; generation never substitutes for Undo or resets the existing budgets.

Complete the first pass before broad polishing. Preview the set in committed order and critique:

- hierarchy and readability
- clipping and safe composition
- screenshot visibility
- balance and spacing
- consistency and controlled variation
- rhythm and story progression

During Creative Review, also examine the actual pixels for app-specificity and Canvas intention:

- Is the Art Direction specific to this app, or could the set belong almost unchanged to another app?
- Have strong identity cues or useful available distinctive assets been ignored without reason?
- Does every Canvas have a clear visual intention? Are several compositions repeated automatically, or Mockup treatments inherited by habit?
- Is any supporting copy unnecessary or too small to matter? Is pseudo-editorial metadata present without meaning?
- Is a Feature Snippet merely repeating visible UI?
- Is coherence coming from Art Direction or merely from duplicated layouts?

Before presenting the first completed set, inspect the rendered complete ordered set both as individual Canvases and as a whole, including perceived presence side by side and rhythm in sequence. Judge browsing-scale readability from the actual previews, not editor zoom or nominal font sizes. Explicitly run this first-draft self-review within the existing bounded refinement model:

- OPENING: Is any app-name usage actually contributing? Apply the removal test.
- COPY: Is every secondary text element worth reading and realistically readable, rather than unread visual noise?
- MOCKUP SCALE: Do comparable devices have coherent perceived presence? Are differences visibly justified rather than accidental?
- MOCKUP POSITION: Does displacement create a useful relationship? What is the resulting space doing?
- EMPTY SPACE: Is negative space active or merely leftover from undersized, displaced or disconnected elements?
- SNIPPETS: Are Feature Snippets subordinate, equal or dominant for an intentional reason? Is the intended product evidence clear?
- ASSETS: Are assets visually useful at their rendered size and position, not merely semantically related?
- COLOR: Is the set-level color logic perceptible in the result and across the sequence?
- SYSTEM: Does the set feel art-directed rather than assembled? Preserve the existing specificity, repetition and staging diagnostics.

In this same first-draft review, compare the pre-execution concept and expected compositional consequences with the actual pixels of the complete ordered set:

- Can the selected concept be perceived, and which visible relationships express it? Does it influence composition or exist only in the explanation?
- Did the strongest product material identified during discovery meaningfully influence staging, hierarchy, rhythm, narrative or framing? If not, verify that omission was intentional. It need not become an asset, leave the Mockup or undergo mandatory transformation.
- Does each Canvas contribute to the concept, including intentional pauses or repetition? Is the set creatively resolved, beyond merely clean?
- Could the same layouts survive almost unchanged if another app replaced the Screenshot Sources? Review the presentation's specificity, not just the content's identity.

A sophisticated explanation cannot compensate for generic pixels. Do not redefine the concept after rendering merely to match the result. Without an accepted useful Target, a genuine conceptual correction may revise the intention, but identify why the previous concept failed and establish revised visible consequences before editing; then review their execution rather than relabeling unchanged output.

If a technically clean, readable and coherent set does not make the concept perceptible, do not automatically declare it finished or dismiss the gap as subjective preference. Diagnose weak concept, weak translation into compositional consequences, or weak execution of a good concept. A substantive refinement pass may correct composition, staging, the visual system or Canvas relationships; do not automatically spend both passes on micro-adjustments when the problem is conceptual. Concept correction uses the same two-pass budget, never an additional loop or a reset of the count. Preserve accepted existing work and all V1.4 hygiene checks. If the concept remains unresolved at the limit, stop and report that limitation without claiming creative resolution. Concept ambition does not excuse weak execution.

Apply an anti-template and staging lens within the same review, not an additional refinement loop. Could this set belong almost unchanged to another app? Are Mockup placements intentionally structured or merely shifted, and do size changes have meaningful reasons? Is coherence coming from shared Art Direction or one repeated layout? Do supporting elements form a coherent language, or appear as isolated decorative gestures? Are snippets integrated, backgrounds contributing rather than generic surfaces, and app-name uses meaningful rather than redundant? Are any Canvases clean but visually unresolved?

Inspect whether each Mockup is visually anchored with appropriate presence and an intentional headline relationship, whether side space is meaningfully used, whether a Feature Snippet connects to the product demonstration, and whether graphic elements support the visual story. If these relationships fail, refine the composition rather than simply adding assets. Use the existing bounded passes and preserve intentional repetition; these diagnostics require neither novelty nor additional effects.

These are diagnostic prompts, not requirements to add visual effects or use every asset. Distinguish technically clean from creatively resolved: a clean, restrained Canvas may be strongest, but cleanliness alone does not resolve a generic or interchangeable composition. Do not add complexity simply to appear creative. Use relevant Design Intelligence knowledge to diagnose observed weaknesses and preserve intentional repetition or simplicity.

These decisions imply no Shipper preference for icons, mascots, colorful backgrounds, varied Mockup sizes, cropped devices or playful layouts. The app and intended Art Direction guide the choice; a restrained set with repeated Mockup treatment can be correct.

Make focused changes for material weaknesses, reusing fresh observations and returned revisions. Perform no more than two substantive refinement passes. With an accepted Target, stop as complete only when the side-by-side result is recognizably its faithful editable implementation except for allowed divergences; pixel-perfect matching is not required. Unauthorized material differences are not dismissible as subjective preference. Continue corrections within the two-pass budget when technically possible, then conduct the final ordered review; if the budget or a proven limitation prevents fidelity, disclose the unresolved gap without claiming faithful completion. Without a useful Target, use the existing direct-Shipper rule: Stop when remaining differences are subjective rather than materially better, then conduct the final ordered review.

## User feedback on the current set

Interpret ordinary feedback as design intent without requiring coordinates, scale values, asset IDs, exact hierarchy or layout mechanics. “I don't like the small subtitles,” “The phone feels smaller,” “The hierarchy feels confusing,” and “Make it more dynamic” call for a grounded diagnosis and targeted supported refinement. Preserve accepted work outside that change; use current canonical state, preview the affected result and check its set-level relationships within the existing iteration limits. Feedback does not authorize a wholesale redesign or an unlimited self-review loop.

For “I don't like it, undo,” isolate the latest unwanted creative change from previously accepted refinements. Retain enough observed pre-change state and committed-operation provenance to identify that scope. An explicit undo request is user direction, not autonomous Undo/Redo permission. Use only an available capability whose live contract can restore that scope safely; never invent an Undo tool, force-close a group, blindly replay old revisions or roll back accepted refinements. A targeted restoration through supported edits must use fresh authority and known prior values. If the latest change cannot be safely isolated or requires human Undo, preserve the current work and explain the specific limitation or required human action. This is orchestration using existing capabilities, not new runtime behavior.

## Bounded pre-dispatch correction

When MCP explicitly confirms that local input validation rejected a request before bridge dispatch, no mutation, revision transition, or Undo unit occurred. Submit at most one corrected new request only when all of the following are true:

- the invalid field and submitted value are known
- the current authoritative schema supplies one unique correction
- the invalid value was chosen by the agent rather than specified by the user
- the correction preserves the requested product intent and atomic operation
- authoritative IDs, revisions, runtime references, and atomicity remain unchanged
- the payload diff contains only the schema-required correction

This is not permission to guess another shape or replay an uncertain mutation. Stop after a second validation rejection. Never enter this path for `mutation_outcome_unknown`, post-dispatch ambiguity, `interactive_edit_in_progress`, stale authority without re-observation, an ambiguous constraint, an unsupported capability, an explicit user value, or a correction that changes a destructive or product decision.
