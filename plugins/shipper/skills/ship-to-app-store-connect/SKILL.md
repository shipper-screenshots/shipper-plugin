---
name: ship-to-app-store-connect
description: Publish existing Shipper device screenshots, Header and Search assets, App Store metadata, or their requested combination to App Store Connect. Use for Ship or publish requests and explicit create/localize/adapt then Ship workflows. Not for App Review submission, release, builds, TestFlight, or authoring without publication intent.
---

# Ship to App Store Connect

Before any progress message or tool call, adopt the language of the user's current substantive request and the shared Product-mode communication rule: one friendly, concise acknowledgement, then silence unless there is a material product milestone, a useful failure or necessary user action.

Class: `EXTERNAL_SIDE_EFFECT`. Follow [Skill policy](../../references/skill-policy.md). Publish only existing eligible Shipper content; never implicitly author, translate, adapt, or bind/change Target.

Before Shipping, read [Core authority](../../references/core-authority.md) and [execution and recovery](references/execution-and-recovery.md). Live Core/MCP is executable authority. Require the three Shipping tools and `mcp-shipping-02`; an older Shipping contract is incompatible. Never call raw ASC, invent authorization or fabricate references. An uncertain dispatch is observed through the same operationRef—never blindly retried or replaced.

## Interpret the requested workflow

Explicit scope wins: `screenshots` → device screenshots, including Duo; `assets` → saved Header and Search; `media` → device screenshots plus saved Header and Search; `metadata` → Metadata; `both` → device screenshots and Metadata; `everything` → all three. Generic “Ship to App Store Connect” uses Core `infer` across saved eligible content. “Ship everything” also uses `infer` so already saved Header and Search appear in the review. In a composed request, pronouns retain the established content scope: “create screenshots, localize everything and ship” remains screenshots only. Ask only when the antecedent is genuinely ambiguous.

Metadata Shipping is **category-level**, with Core's existing six-field semantics: eligible nonempty values and no clearing. A field-filtered request such as “only Keywords and Subtitle” must stop before preparation and ask whether to publish the Metadata category for those locales. Never emulate field filtering by clearing or omitting remote fields.

Keep explicit locales/specifications exact. Resolve identities through [Localization authority](../localize-app-store-content/SKILL.md) and the [Adaptive reference](../../references/agent-adaptive-screenshots.md), without mutating merely to Ship. “All localizations” expands only locale scope; it adds neither categories nor authoring. Core resolves destinations from the live Asset Library catalog by placement type and group. Header and Search are independent, each with one Canvas per locale. Preserve an explicit single orientation; block an unavailable locale/spec pair instead of substituting a sibling. Never create a missing asset just to fill a Shipping scope.

Use the [decision helper](scripts/shipping.py) only for task-local orchestration choices from interpreted intent and actual observations. It neither parses language nor grants authority; Core responses always prevail.

## Compose only explicit preceding capabilities

Obtain the exact intended existing project/session through [prepare-shipper](../prepare-shipper/SKILL.md). Ship alone never creates a missing project; reuse the verified context throughout.

- Explicit creation/design: [Create Screenshot Set](../create-screenshot-set/SKILL.md), including visual and saved-state verification.
- Explicit metadata authoring: [Author App Store Metadata](../author-app-store-metadata/SKILL.md). “Create my metadata” means source CREATE/FILL; secondary translation needs separate explicit intent.
- Explicit translation: [Localize App Store Content](../localize-app-store-content/SKILL.md), limited to the established content/locales.
- Explicit adaptation: use Adaptive only when requested; a remote missing spec does not trigger it.

Run explicit preceding capabilities in order and verify canonical saved persistence after each. Pending, failed or uncertain local state blocks a new Shipping preparation without rollback or duplication. Once the complete requested scope is saved, start **one fresh Shipping preparation**; never reuse a pre-authoring preparation or silently Ship an incomplete preceding scope. After execution is admitted, keep observing the same operation even if authoring persistence or the project session changes: its content is frozen. A closed original session may observe that admitted operation but cannot authorize a new execution or recovery continuation. Never diagnose a saved-state defect solely from a changed session; inspect canonical persistence for the current session before a new preparation.

## Target, platform and execution

**Always refresh the Target before every Shipping preparation**, without exception: `read_target_context`, then `refresh_target_context` for the existing exact association on the same project/session. It supplies the current app, version, platform and the app's other loaded versions. Never substitute another app.

**The requested content decides the platform.** Header, Search and iPhone, iPad or Duo screenshots need the app's iOS/iPadOS version; Mac screenshots need its macOS version. A generic Ship or “ship everything” uses the platform of the refreshed Target version. When the refreshed version is not the needed platform, `bind_target` the **same app's** editable version of that platform, using the observed appID/versionID and the returned expectedContext. Leave it selected afterwards, and state the switch in the review summary, for example “Target: 1.0 iOS (switched from 1.0 macOS)”. This applies only within the same app, only between its platform versions, and never from a guessed version. If the app has no editable version of the needed platform, stop and say so in product terms, for example “Header and Search are only available for an iOS version, and this app has none”. A missing or ambiguous app identity still requires the minimum product choice; arbitrary ASC IDs are not a shortcut.

One operation covers one version. Review `facts` with reason `otherPlatform` list saved content of the other platform that this operation does not include. Name it in the summary and ask whether to send it too. If the user agrees, start a separate preparation after switching to that platform's version as above.

Verify saved canonical state → refresh Target and settle the platform → prepare → inspect Core's review → execute once only if deterministic and `prepared` → observe the **same operation** until a truthful terminal or genuinely actionable state. Inspect every `review.destinations` entry: locale, specification, image category, placement type, group, count and replacement count. A fact with reason `placement` means a first placement: say “added”, never “replaced”. `review.api = legacy` identifies an old operation only; its `screenshots[].displayType` retains its historical meaning. When the review includes Metadata updates of the app name or subtitle, name every locale whose app name or subtitle will change on App Store Connect. Stop on any review mismatch in app/version/platform, content, locales or destination replacement scope. There is **no mandatory second human confirmation**; tool approval and Keychain consent do not replace durable Publishing delegation.

**Follow every Shipping tool result to its final status.** When a result says `NOT FINISHED`, immediately call the tool it names again, with the same arguments or the same operationRef. Do not write any user-facing message (summary, “in progress”, result) while the status is `preparing`, `executing` or `reconciling`. Never execute again to make progress. If a result says Shipper may be waiting for a macOS Keychain authorization, ask the user once to answer the Keychain prompt shown by Shipper, then call the same tool again. This is not a failure and not a reason to stop.

**Report refusals by their Core code; never invent a cause.** Do not claim a connection, MCP, credential or permission problem unless Core returned it. Meanings:
- `shipping_scope.creative_assets_require_ios_version`: Header and Search need an iOS version; apply the platform rule above, then prepare again.
- `shipping_scope.specification_requires_other_platform`: switch to the platform version that matches the content.
- `shipping_scope.target_platform_unknown`: refresh the Target, then prepare again.
- `shipping_scope.shared_destination_conflict`: send only one of the orientations or variants that share a destination.
- `shipping_scope.specification_outside_content`: the format does not belong to the requested content category.
- `shipping_scope.retired_specification`: Universal is no longer supported.
- `shipping_scope.no_saved_content_for_specification`: nothing is saved for that format in those locales.
- `shipping_asset_library.*` and `shipping_asc_http_*`: Apple-side refusals. Report them as such, with the locale and format.

## Speak in product terms

Follow the shared Product-mode communication policy. Describe prepared locale/count scope as planned, never as completed. Once dispatch begins, say once that the requested upload is in progress; do not narrate each observation or repeat unchanged progress. Do not issue a final response merely because a local observation budget elapsed. Continue the same operation until Core proves a terminal outcome or a genuine boundary prevents further observation.

Report only proven category/locale/set outcomes. Read each outcome's terminal state and progress counts; keep `rootCause` separate from `recoveryState` so the original failure is never replaced by a recovery label. For no change, say the requested scope is already current. For success, confirm every completed locale and verified count. For partial or failed results, map every exact requested locale: `succeeded` is Done, `failed` is Failed, `blocked`, `cancelled` or `notStarted` is Not sent, and `started` or `unknown` is Unconfirmed. Never infer a locale's completion from the global operation, another locale, a planned/uploaded count, or the absence of an error. Do not finish while a locale remains non-terminal unless a genuine boundary prevents further observation; at that boundary, name every proven and unconfirmed locale without implying probable completion. Never turn partial success into global success. Do not expose internal references, transport, credentials or raw responses. Never claim no retry when a Core-issued continuation was executed.
