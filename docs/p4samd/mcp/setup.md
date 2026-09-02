---
id: setup
title: Connecting a Client
sidebar_label: Setup
slug: setup
---

This page explains how to connect an AI client to the P4SaMD MCP server. No coding is required. In most cases you paste a URL, or run a single command, and then sign in through your browser.

For what an assistant can do once connected, see [Overview](./overview.md).

## Server address and authentication

The P4SaMD MCP server is a remote MCP server, reachable over HTTP at:

```
https://<your-p4samd-instance>/mcp
```

Authentication uses OAuth 2.1 with PKCE. Clients that support remote MCP servers discover and complete this flow themselves, so you do not need to create an API key or copy a token by hand. When you connect, you are redirected to sign in with your usual P4SaMD credentials. If you belong to more than one organization, you are then asked which one the assistant should work in.

The server publishes standard OAuth discovery metadata at `/.well-known/oauth-authorization-server` and `/.well-known/oauth-protected-resource`, and supports dynamic client registration. Most clients therefore need nothing beyond the server URL.

Sessions for AI clients last 8 hours, after which you need to sign in again.

:::caution Local clients only
The sign-in flow currently accepts a redirect back only to `http://localhost` or `http://127.0.0.1`. Clients that run on your own machine, such as Claude Code, Cursor and VS Code, work with this. Cloud-hosted connectors, such as a Claude.ai or ChatGPT custom connector, redirect back to their own hosted domain and may not be able to complete sign-in. If you are configuring one of those, check the current status with your P4SaMD administrator first.
:::

## Claude Code

Run this once from a terminal:

```bash
claude mcp add --transport http p4samd https://<your-p4samd-instance>/mcp
```

Then run `/mcp` inside a Claude Code session to complete the sign-in flow in your browser.

You can also add the same configuration directly to your project's `.mcp.json`:

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

## Claude.ai and Claude Desktop

1. In Claude.ai, go to **Settings → Connectors**. An organization owner may need to enable custom connectors first.
2. Choose **Add custom connector**.
3. Enter a name, for example `P4SaMD`, and the server URL:
   ```
   https://<your-p4samd-instance>/mcp
   ```
4. Save, click **Connect**, and complete the sign-in flow in the popup window.

This path depends on your P4SaMD instance accepting a non-local redirect during sign-in. See the caution above.

## ChatGPT

1. In ChatGPT, go to **Settings → Connectors** and enable **Developer mode** if it is not already on.
2. Choose **Add custom connector**.
3. Enter a name and the server URL:
   ```
   https://<your-p4samd-instance>/mcp
   ```
4. Save and complete the sign-in flow when prompted.

As with Claude.ai, see the caution above before relying on this path.

## Other MCP clients

Any client that supports a remote MCP server over Streamable HTTP can connect with a configuration equivalent to:

```json
{
  "mcpServers": {
    "p4samd": {
      "url": "https://<your-p4samd-instance>/mcp"
    }
  }
}
```

Key names vary between clients. Some require `"transport": "http"`, others infer the transport from the URL. Consult your client's MCP documentation if the snippet above is not accepted as written.
