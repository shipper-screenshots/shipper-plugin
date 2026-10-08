---
name: ship-to-app-store-connect
description: Publish existing Shipper screenshots, App Store metadata, or both to App Store Connect. Use for Ship or publish requests and explicit create/localize/adapt then Ship workflows. Not for App Review submission, release, builds, TestFlight, or authoring without publication intent.
---

# Ship to App Store Connect

Class: `EXTERNAL_SIDE_EFFECT`. Follow [Skill policy](../../references/skill-policy.md). Publish only existing eligible Shipper content; never implicitly author, translate, adapt, or bind/change Target.

Before Shipping, read [Core authority](../../references/core-authority.md) and [execution and recovery](references/execution-and-recovery.md). Live Core/MCP is executable authority. Require the three Shipping tools and `mcp-shipping-01`; never emulate an older runtime, call raw ASC, invent authorization or fabricate references. An uncertain dispatch is observed through the same operationRef—never blindly retried or replaced.

## Interpret the requested workflow

Explicit scope wins: screenshots → screenshots only; metadata → Metadata only; both → both. Generic “Ship to App Store Connect” or “ship everything” uses Core `infer`. In a composed request, pronouns retain the established content scope: “create screenshots, localize everything and ship” remains screenshots only. Ask only when the antecedent is genuinely ambiguous.

Metadata Shipping is **category-level**, with Core's existing six-field semantics: eligible nonempty values and no clearing. A field-filtered request such as “only Keywords and Subtitle” must stop before preparation and ask whether to publish the Metadata category for those locales. Never emulate field filtering by clearing or omitting remote fields.

Keep explicit locales/specifications exact. Resolve identities through [Localization authority](../localize-app-store-content/SKILL.md) and the [Adaptive reference](../../references/agent-adaptive-screenshots.md), without mutating merely to Ship. “All localizations” expands only locale scope; it adds neither categories nor authoring. Core resolves screenshot destinations independently per locale, choosing one available specification per ASC display type and defaulting to Portrait only when both orientations exist. Preserve an explicit single orientation; block an unavailable locale/spec pair instead of substituting a sibling.

Use the [decision helper](scripts/shipping.py) only for task-local orchestration choices from interpreted intent and actual observations. It neither parses language nor grants authority; Core responses always prevail.

## Compose only explicit preceding capabilities

Obtain the exact intended existing project/session through [prepare-shipper](../prepare-shipper/SKILL.md). Ship alone never creates a missing project; reuse the verified context throughout.

- Explicit creation/design: [Create Screenshot Set](../create-screenshot-set/SKILL.md), including visual and saved-state verification.
- Explicit metadata authoring: [Author App Store Metadata](../author-app-store-metadata/SKILL.md). “Create my metadata” means source CREATE/FILL; secondary translation needs separate explicit intent.
- Explicit translation: [Localize App Store Content](../localize-app-store-content/SKILL.md), limited to the established content/locales.
- Explicit adaptation: use Adaptive only when requested; a remote missing spec does not trigger it.

Run explicit preceding capabilities in order and verify canonical saved persistence after each. Pending, failed or uncertain local state blocks Shipping without rollback or duplication. Once the complete requested scope is saved, start **one fresh Shipping preparation**; never reuse a pre-authoring preparation or silently Ship an incomplete preceding scope.

## Target and execution

Use [Target context](../../references/target-app.md) only to inspect or permissibly refresh the existing exact association. Shipping never authorizes automatic binding, replacement or app/version selection. Missing or ambiguous Target requires the minimum product choice; arbitrary ASC IDs are not a shortcut.

Verify saved canonical state → prepare → inspect Core's review → execute once only if deterministic and `prepared` → observe the **same operation** until a truthful terminal or actionable state. Stop on any review mismatch in app/version/platform, content, locales or screenshot replacement scope. There is **no mandatory second human confirmation**; tool approval and Keychain consent do not replace durable Publishing delegation.

## Speak in product terms

Report only proven category/locale/set outcomes. For no change, say the requested scope is already current. For partial results, separate completed and unresolved scope. For unknown state, say Shipper cannot yet confirm the operation and that it was not retried to avoid duplication. Do not expose internal references, transport, credentials or raw responses. Never claim no retry when a Core-issued continuation was executed.
