# Shipper Plugin

Your complete App Store workflow, inside Codex.

Shipper Plugin connects Codex to the Shipper macOS app. It gives Codex the tools and creative intelligence to:

- understand your app benefits and plan a screenshot story;
- design compelling screenshots and edit Shipper canvases with text, assets and device mockups;
- adapt designs across Apple device specifications;
- write your metadata;
- localize your screenshots and metadata;
- upload your screenshots and metadata to App Store Connect.

Design. Adapt. Localize. Ship. Right from Codex.

## Requirements

- Shipper installed at `/Applications/Shipper.app` from the Mac App Store.
- The current Codex desktop app or Codex CLI.
- Shipper opened when you want Codex to work with a project.

The Plugin runs locally. Its resolver only connects Codex to the signed helper bundled inside Shipper. It does not install or modify Shipper, request Full Disk Access, or send the local MCP connection to a remote Shipper service.

## Install

Run these commands in Terminal:

```sh
codex plugin marketplace add shipper-screenshots/shipper-plugin
codex plugin add shipper@shipper
```

Then fully quit and reopen Codex, and start a new chat. Open Shipper and the project you want to use before asking Codex to work with it.

To confirm the installation:

```sh
codex plugin list --json
```

The list should contain `shipper@shipper`, version `1.0.0`, with the Plugin enabled.

## Update

```sh
codex plugin marketplace upgrade shipper
codex plugin add shipper@shipper
```

Fully quit and reopen Codex, then start a new chat so the updated Plugin and its Skills are loaded.

## Remove

```sh
codex plugin remove shipper@shipper
codex plugin marketplace remove shipper
```

Removing the Plugin does not remove the Shipper app or your Shipper projects.

## Support and security

- Product website: [shipper-screenshots.com](https://shipper-screenshots.com)
- Non-sensitive bugs and support requests: use this repository's GitHub Issues.
- Security vulnerabilities: follow [SECURITY.md](SECURITY.md) and do not open a public issue.
- Privacy Policy: [shipper-screenshots.com/legal-pages/privacy-policy](https://shipper-screenshots.com/legal-pages/privacy-policy)
- Terms of Use: [shipper-screenshots.com/legal-pages/terms-of-use](https://shipper-screenshots.com/legal-pages/terms-of-use)

## License

Shipper Plugin is proprietary software. See [LICENSE](LICENSE).
