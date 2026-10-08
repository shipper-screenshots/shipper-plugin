---
name: prepare-shipper
description: Internal Autonomy prerequisite for Shipper workflows. Obtain a verified, workable exact project/session for Create Screenshot Set, Localize, Metadata or Shipping work, launching Shipper and opening/reusing or creating the intended project as needed. Also handles explicit environment preparation probes.
---

# Prepare Shipper

This is an internal prerequisite for other Shipper workflows. Read [Skill policy](../../references/skill-policy.md) and [Lifecycle observations and actions](references/lifecycle.md), then run the packaged [decision policy](scripts/lifecycle.py) with task-local state and fresh observations. Follow its returned action exactly; live Shipper results remain authoritative. Do not install missing dependencies automatically.

Retain reducer state in the task context, not as a user-visible deliverable or workspace edit. Never create lifecycle state in a repository, the task's `work/` or `outputs/` directory, or any other user project folder. If the command host cannot pass structured stdin directly, use a unique system-temporary file outside user workspaces and remove it immediately after that single invocation.

Continue the user's requested workflow in the same task. Do not ask them to invoke this Skill, manually open a known accessible project, or treat successful preparation as the final result.

## Resolve the intended context

- **Existing project:** reuse a freshly verified matching active project or acquire the exact requested project. A missing project does not authorize creating one.
- **New project:** create only for explicit new-project intent or an unambiguous new-app brief that requires it. Generate one creation attempt identifier before dispatch and retain it through uncertain recovery; never replace an uncertain attempt with a new one. When the user requests any bundled template, discover it first and create the project natively from its exact unique template identity. Preserve the template association, Canvas set, resources, specification and metadata; never imitate a template by creating a blank project and rebuilding or deleting Canvas.
- **Environment only:** verify connection or launch state without acquiring a project. This cannot satisfy a project workflow.

Use fresh canonical evidence for an unnamed current project. Never substitute the frontmost project for an explicitly named target. Ask one product-level question only when the intended project or creation intent is genuinely ambiguous.

## Prepare safely and continue

Use the bounded lifecycle to verify compatible Shipper access and required capabilities, validate the exact installed app before launching it once when stopped, recover transient readiness, then reuse, acquire, or create the intended project. Continue only after fresh inspection confirms the exact project, session, revision, persistence, and a successful exact-context read. UI visibility, cached data, or a user's reply is not proof.

On `READY`, return the fresh context and immediately continue the calling workflow. Preparation does not authorize content changes or satisfy downstream checks for design, localization, PRO, Metadata, Screenshot Sources, Simulator access, persistence, or App Store Connect publishing.

Only proven disabled access, missing installation or filesystem authority, genuine product ambiguity, or a returned persistence requirement may require user action. Re-observe after that action; cancellation is terminal, and exhausted bounded recovery stops without proposing a duplicate-prone retry.

Never enable consent, grant scope, save or discard a project, force focus, restart a running host or helper, replay a content or publishing mutation, or replace an uncertain creation attempt. External Screenshot Sources, Simulator permissions, and App Store Connect authorization remain separate.

## Communicate in product terms

Follow the shared Product-mode communication policy. State only the requested product scope and what remains unchanged, then continue without a technical play-by-play. Do not mention internal Skill or tool names, opaque references, scripts, files, identifiers, recovery mechanics, or whether source-code changes are planned. Report the product outcome and persistence state, or the minimum useful product action when blocked. Only provide technical detail when the user explicitly requests it.

Repository authority citation (documentation provenance; not a packaged runtime dependency): `docs/v1.1/Shipper Plugin/02-Architecture/Autonomy/Phase-11-Autonomy-Contract.md`.
