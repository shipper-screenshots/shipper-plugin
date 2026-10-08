---
name: shipper-host-check
description: Check the local Shipper MCP connection and current active project when the user asks about Shipper status, connection, availability, or the current Shipper project.
---

# Shipper Host Check

Read [Core Authority and Compatibility](../../references/core-authority.md) and follow the [Skill Policy](../../references/skill-policy.md). Use only Plugin-scoped Shipper tools; this workflow is strictly `READ_ONLY`.

1. If Shipper MCP tools are unavailable, stop and tell the user: `Shipper MCP is not available.`
2. Call `get_connection_status` once.
3. Call `inspect_project` once.
4. Report only the observed Shipper/MCP connection state and active project state.

If either required read fails, stop. Never call a mutation tool, change MCP configuration, guess missing state, or substitute another tool.
