---
id: mcp_server
title: P4SaMD MCP Server
sidebar_label: P4SaMD MCP Server
slug: mcp-server
---

P4SaMD exposes a **Model Context Protocol (MCP) server** so that AI assistants and coding tools — Claude Code, Claude.ai, ChatGPT, Cursor, VS Code, or any other MCP-compatible client — can read and write your project's requirements, risks, software architecture, design files, traceability links, and tests directly, on your behalf and under your own permissions.

:::info Who this page is for
This page is for administrators and technical users who want to connect an AI assistant to their P4SaMD organization. No coding is required — connecting is a matter of pasting a URL (or running one command) into your AI client's settings.
:::

## Why connect an AI assistant to P4SaMD

Once connected, an assistant can, for example:

- Browse and search your requirements, risks, software items, and test cases in natural language.
- Draft new requirements, risks, or test cases for your review.
- Inspect traceability coverage (which requirements are untested, which risks are unmitigated) and propose fixes.
- Read and update text-based design files (Markdown, JSON, XML, drawio) attached to a software item.
- Deprecate a requirement, add a control measure to a risk, or link two work items together — all logged in P4SaMD's audit trail like any other change.

Every action the assistant takes is performed **as you**, through your own P4SaMD account and role. The MCP server enforces the exact same permissions and organization/tenant boundaries as the P4SaMD web application — an assistant connected on your behalf can never see or change more than you can yourself.

:::note Read vs. write actions
Read-only actions (listing or viewing data) are generally safe for an assistant to perform automatically. Actions that create, change, or delete data are the kind of thing a well-behaved AI client will show you before applying — check your client's own settings if you want to require confirmation on every write.
:::

## Tool reference

The tables below list every capability ("tool") the P4SaMD MCP server currently exposes, grouped by area. This list reflects the server's actual, current capabilities — if a tool isn't listed here, the assistant can't do it (yet).

### Requirements & sections

| Tool | What it does |
|---|---|
| `list_projects` | List the projects you have access to in your current organization. |
| `list_requirements` | Browse and filter a project's requirements (by level, status, or free-text search). |
| `get_requirement` | Get the full detail of a single requirement, including its description, acceptance criteria, and links. |
| `create_requirement` | Create a new requirement (title, description, level — Users/System/Software, type, priority, labels). Requires the Tech Team role or higher. |
| `update_requirement` | Change one or more fields of an existing requirement. Cannot be used on a deprecated requirement or one in a released version. |
| `deprecate_requirement` | Retire a requirement, with a mandatory explanation recorded for the audit trail. Only requirements that are Approved or Verified can be deprecated this way. |
| `delete_requirement` | Permanently remove a **Draft** requirement or section that has no links or child items yet. This is a hard delete and cannot be undone. |
| `create_section` | Add a new grouping heading to the requirements tree. |
| `update_section` | Rename a section or move it elsewhere in the tree. |
| `delete_section` | Remove a section (only once it has no items left inside it). |

### Traceability links

| Tool | What it does |
|---|---|
| `get_traceability_matrix` | Show every link attached to a risk or requirement — useful for spotting untested requirements or unmitigated risks. |
| `create_requirement_link` | Create a typed traceability link between two work items (e.g. a user requirement that "satisfies" a software requirement, or a test that "verifies" a requirement). |
| `delete_requirement_link` | Remove a traceability link by its ID. |
| `list_requirement_links` | List the traceability links attached to a work item, with optional direction and type filtering. |
| `delete_risk_link` | Remove a link between a risk and a requirement or test. |

### Risk management

| Tool | What it does |
|---|---|
| `list_risks` | Browse the risk register, with filters for status, harm category, severity, probability, and risk level. |
| `get_risk` | Get the full detail of a risk, including its control measures and the ISO 14971 initial/residual risk levels. |
| `create_risk` | Create a new risk (hazard, harm, harm category, initial severity and probability). The initial risk level is calculated automatically. |
| `update_risk` | Update a risk's fields, including recording the residual severity/probability after mitigation. Editing a risk on a released version requires a short explanation. |
| `create_control_measure` | Add a mitigation to a risk, optionally linking it to the requirements, tests, or software items that implement it. |
| `update_control_measure` | Change or re-link an existing control measure. |

### Software items (system design)

| Tool | What it does |
|---|---|
| `list_software_items` | Browse your software architecture — systems, components, units, and third-party (SOUP) dependencies — as a tree or a flat list. |
| `get_software_item` | Get the full detail of a software item, including its safety classification and linked requirements, risks, and tests. |
| `create_software_item` | Add a new architecture component, unit, or SOUP dependency. |
| `update_software_item` | Change a software item's name, type, safety class, or other fields. Editing an item on a released version requires a short explanation. |

### Design files

| Tool | What it does |
|---|---|
| `list_design_files` | List the design files attached to a software item. |
| `get_design_file_content` | Read the content of a text-based design file (Markdown, plain text, JSON, XML, or drawio). |
| `create_design_file` | Attach a new text-based design file to a software item. |
| `update_design_file_content` | Replace a design file's content (the previous content is automatically kept as a version in its history). |
| `delete_design_file` | Delete a design file and its full version history. |
| `list_design_file_versions` | List the saved historical versions of a design file. |
| `get_design_file_version_content` | Read the content of a specific historical version. |
| `restore_design_file_version` | Restore a design file to a previous version. |
| `create_version_tag` | Give a named tag to a specific version of a design file (e.g. "reviewed"). |
| `delete_version_tag` | Remove a tag from a design file version. |
| `get_design_file_history` | Get the full audit trail of every change made to a software item's design files. |

:::note Text files only
Only text-based design files (`.md`, `.txt`, `.json`, `.xml`, `.drawio`) can be read or written through an AI assistant. Binary files such as PDFs and images must still be managed from the P4SaMD web application.
:::

### SBOM

| Tool | What it does |
|---|---|
| `download_sbom` | Download the generated Software Bill of Materials (CycloneDX format) for a completed scan of a software item. |

### Test cases

| Tool | What it does |
|---|---|
| `list_test_cases` | Browse test cases (Unit, Integration, System, or Acceptance), with filters for status, execution mode, and more. |
| `get_test_case` | Get the full detail of a test case, including its execution history and traceability links. |
| `create_test_case` | Create a new test case, optionally linking it to the requirements or risks it verifies in the same step. |

## Connecting to the MCP server

The P4SaMD MCP server is a standard **remote MCP server**, reachable over HTTP at:

```
https://<your-p4samd-instance>/mcp
```

Authentication uses **OAuth 2.1 with PKCE**. Most modern MCP clients (Claude Code, Claude.ai, ChatGPT, Cursor, VS Code) discover and complete this flow automatically — you don't need to create an API key or copy a token by hand. When you connect, you'll be redirected to log in with your usual P4SaMD credentials, and — if you belong to more than one organization — asked to pick which one the assistant should work in. All of the assistant's actions are then scoped to that organization for the life of the session (P4SaMD sessions for AI clients last 8 hours before you'll need to reconnect).

:::caution Current limitation — local clients only
As currently implemented, the sign-in flow only accepts a redirect back to `http://localhost` or `http://127.0.0.1`. This works out of the box for clients that run locally on your machine (Claude Code, Cursor, VS Code, and similar desktop/CLI tools). Cloud-hosted connectors — such as a Claude.ai or ChatGPT custom connector, which redirect back to their own hosted domain rather than to your machine — may not be able to complete sign-in yet. If you hit this while configuring one of those clients, check with your P4SaMD administrator on the current status before spending more time on it.
:::

### Claude Code

Run this once from a terminal:

```bash
claude mcp add --transport http p4samd https://<your-p4samd-instance>/mcp
```

Then run `/mcp` inside a Claude Code session (or simply start using it) to complete the sign-in flow in your browser. Equivalently, you can add the same configuration directly to your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "p4samd": {
      "type": "http",
      "url": "https://<your-p4samd-instance>/mcp"
    }
  }
}
```

### Claude.ai / Claude Desktop (custom connector)

1. In Claude.ai, go to **Settings → Connectors** (an organization owner may need to enable custom connectors first).
2. Choose **Add custom connector**.
3. Enter a name (e.g. "P4SaMD") and the server URL:
   ```
   https://<your-p4samd-instance>/mcp
   ```
4. Save, then click **Connect** and complete the sign-in flow in the popup window.

See the current-limitation note above — this path depends on your P4SaMD instance accepting a non-local redirect during sign-in.

### ChatGPT (Developer mode / custom connector)

1. In ChatGPT, go to **Settings → Connectors** and enable **Developer mode** if you haven't already.
2. Choose **Add custom connector** (or **Create**).
3. Enter a name and the server URL:
   ```
   https://<your-p4samd-instance>/mcp
   ```
4. Save and complete the sign-in flow when prompted.

See the current-limitation note above before relying on this path.

### Other MCP clients (Cursor, VS Code, generic HTTP/SSE clients)

Any client that supports a remote MCP server over Streamable HTTP can connect using a configuration equivalent to:

```json
{
  "mcpServers": {
    "p4samd": {
      "url": "https://<your-p4samd-instance>/mcp"
    }
  }
}
```

The exact key names vary slightly between clients (some use `"transport": "http"`, others infer it from the URL) — consult your client's MCP documentation if the snippet above isn't accepted verbatim. The server also publishes standard OAuth discovery metadata (`/.well-known/oauth-authorization-server`, `/.well-known/oauth-protected-resource`) and supports dynamic client registration, so most clients need nothing beyond the URL above to complete sign-in.

## Troubleshooting

**Sign-in never completes / browser shows an error about the redirect URL**
Your MCP client is most likely redirecting to something other than `http://localhost` or `http://127.0.0.1` — see the current-limitation note above. This is expected for some cloud-hosted connectors today.

**The assistant says it has no tools available, or `tools/list` returns an empty result**
Sign-in likely didn't complete, or your session expired (P4SaMD MCP sessions last 8 hours). Reconnect the client and complete the sign-in flow again.

**The assistant can't see a project, or a project you expect to be there is missing**
MCP access is scoped to a single organization for the life of a session — the same organization you picked during sign-in. If you belong to more than one organization and need to work in a different one, reconnect and pick the other organization when prompted. Within an organization, the assistant only sees projects you yourself have access to.

**A write action fails with a permission error**
The MCP server enforces the same role-based permissions as the web application (see [Roles and Permissions](../security/roles_permissions.md)). For example, creating or editing requirements, risks, or software items requires at least the Tech Team role in that project; deleting a requirement additionally requires the Admin role. Check your role in the project if a write action is unexpectedly rejected.
