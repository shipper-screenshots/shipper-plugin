# Shipper Plugin

Your complete App Store screenshot workflow, inside Codex.

**Design. Localize. Ship. Right from Codex.**

Shipper Plugin connects Codex to the Shipper macOS app, giving it the tools and creative intelligence to:

- understand your app's features and benefits from your source screenshots;
- plan a compelling App Store screenshot story;
- design and edit Shipper canvases with text, assets, and device mockups;
- adapt designs across Apple device screenshot specifications;
- write your App Store metadata;
- localize your screenshots and metadata;
- upload your screenshots and metadata to App Store Connect.

Your projects remain editable in Shipper throughout the workflow.

## Requirements

- Shipper for macOS 1.2 or later, installed at `/Applications/Shipper.app` from the [Mac App Store](https://apps.apple.com/app/apple-store/id6769785850).
- **Allow Codex to connect** enabled in **Shipper → Settings… (`⌘,`) → Shipper Plugin**.
- The current Codex desktop app or Codex CLI, running on the same Mac.

## Install

Choose either installation method below.

### Install with Terminal

Run:

```sh
codex plugin marketplace add shipper-screenshots/shipper-plugin
codex plugin add shipper@shipper
```

### Install with Codex

Copy this request into Codex:

```text
Install Shipper Plugin for me. Run these exact commands:

codex plugin marketplace add shipper-screenshots/shipper-plugin
codex plugin add shipper@shipper

Then verify that shipper@shipper version 1.0.2 is installed and enabled.
Do not modify Shipper.app or any Shipper project.
```

After installation, fully quit and reopen Codex, then start a new chat so the Plugin and its Skills are loaded.

To confirm the installation manually, run:

```sh
codex plugin list --json
```

The list should contain `shipper@shipper`, version `1.0.2`, with the Plugin enabled.

## Prepare your Screenshot Folder

For stronger creative results, open:

**Shipper → Settings… (`⌘,`) → Shipper Plugin → Screenshot Folder**

Choose one main screenshots folder and keep each app in its own subfolder.

This lets Codex inspect your source screenshots, understand your app's features and benefits, and propose stronger messaging and a more relevant art direction.

You can change the folder or remove access at any time.

## Configure Ship to App Store Connect

To let Codex upload screenshots or metadata to App Store Connect:

1. Open **Shipper → Settings… (`⌘,`) → App Store Connect**.
2. Configure and verify your App Store Connect connection.
3. Open **Shipper → Settings… (`⌘,`) → Shipper Plugin**.
4. Enable **Allow App Store Connect publishing**.

Your Shipper project must also be associated with the correct Target App, with an app version in draft, before its content can be uploaded.

Enabling publishing does not upload anything by itself. Codex only prepares or executes an upload when you explicitly request it, and Shipper validates the operation before sending content to App Store Connect.

Shipper Plugin cannot archive your app, upload builds to TestFlight, submit your app for App Review, or release an App Store version.

## How it works

Shipper Plugin connects Codex to real, editable Shipper projects on your Mac.

You do not need to open Shipper or a project before asking Codex to work. When required, Codex can launch Shipper and open the project needed for your request.

Codex can create and edit screenshot sets, metadata, localizations, and device variants inside Shipper. The result is never a locked or disposable AI output.

They are your projects and your screenshots. You can open Shipper at any time to edit the text, move elements, replace assets, adjust device mockups, change the art direction, or continue the work yourself.

The Plugin runs locally. Its resolver connects Codex to the signed helper bundled inside Shipper. It does not:

- install or modify the Shipper app;
- request Full Disk Access;
- enable Shipper permissions automatically;
- send the local MCP connection to a remote Shipper service.

Codex Access and App Store Connect Publishing are separate permissions inside Shipper.

## Prompt ideas

### Create a screenshot set

#### Quick Start — Create my screenshots

```text
Create an App Store screenshot set for [APP NAME].

Use the screenshots available in my authorized Screenshot Folder to understand the app's main benefits.
Plan a coherent story, then create six editable screenshots with a clean, premium visual direction.
```

#### Creative Direction — Design my screenshot story

```text
Create 6 stunning App Store screenshots for [APP NAME] using Shipper.

Explore my app's screenshots and available assets to understand its interface, purpose, audience, and key benefits.

Think like an expert App Store Product Designer. Develop a compelling visual story that highlights what makes my app valuable, with one clear message per screenshot.

Create a distinctive, premium visual direction tailored to my app. Use beautiful typography, thoughtful layouts, harmonious colors inspired by my app UI, polished device mockups, and creative visual elements adapted to my app UI. Make the screenshots feel cohesive.

Write short, impactful headlines that communicate real benefits.

Use the appropriate iPhone specifications.

Make the result feel like it was crafted by a professional designer, not generated from a generic template.
```

### Improve an existing project

```text
Open my Shipper project [APP NAME] and review its current screenshot story.
Improve the messaging without changing the existing visual direction.
```

### Localize screenshots and metadata in specific languages

```text
Localize the screenshots and App Store metadata in my Shipper project
[PROJECT NAME] into French and German.
```

### Localize screenshots and metadata in all available languages

```text
Localize the screenshots and App Store metadata in my Shipper project
[PROJECT NAME] in all languages available.
```

### Write the metadata

```text
Write the metadata in my Shipper project [PROJECT NAME] in all languages available.
```

### Ship to App Store Connect

```text
Upload the existing English and French screenshots from my Shipper project
[PROJECT NAME] to App Store Connect. Do not upload metadata.
```

### Ship everything to App Store Connect

```text
Ship everything from my Shipper project [PROJECT NAME] to App Store Connect.
```

## Update Shipper Plugin

Run:

```sh
codex plugin marketplace upgrade shipper
codex plugin add shipper@shipper
```

Fully quit and reopen Codex, then start a new chat so the updated Plugin and its Skills are loaded.

To confirm the installed version:

```sh
codex plugin list --json
```

## Remove Shipper Plugin

Run:

```sh
codex plugin remove shipper@shipper
codex plugin marketplace remove shipper
```

Removing Shipper Plugin does not remove the Shipper app or your Shipper projects.

## Support and security

- Product website: [shipper-screenshots.com](https://shipper-screenshots.com)
- Non-sensitive bugs and support requests: use this repository's GitHub Issues.
- Security vulnerabilities: follow [SECURITY.md](SECURITY.md) and do not open a public issue.
- Privacy Policy: [shipper-screenshots.com/legal-pages/privacy-policy](https://shipper-screenshots.com/legal-pages/privacy-policy)
- Terms of Use: [shipper-screenshots.com/legal-pages/terms-of-use](https://shipper-screenshots.com/legal-pages/terms-of-use)

## License

Shipper Plugin is proprietary software. See [LICENSE](LICENSE).
