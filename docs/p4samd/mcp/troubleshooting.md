---
id: troubleshooting
title: MCP Troubleshooting
sidebar_label: Troubleshooting
slug: troubleshooting
---

Common problems when connecting an AI client to the P4SaMD MCP server. For connection instructions, see [Setup](./setup.md).

## Sign-in never completes, or the browser reports an error about the redirect URL

Your client is redirecting to an address other than `http://localhost` or `http://127.0.0.1`, which the sign-in flow does not currently accept. This affects cloud-hosted connectors such as those in Claude.ai and ChatGPT. See the caution in [Setup](./setup.md#server-address-and-authentication).

## The assistant reports no available tools, or `tools/list` returns an empty result

Either sign-in did not complete, or the session has expired. Sessions last 8 hours. Reconnect the client and complete the sign-in flow again.

## A project is missing, or the assistant cannot see a project you expect

MCP access is scoped for the whole session to the single organization you chose during sign-in. To work in a different organization, reconnect and choose it when prompted.

Within an organization, the assistant sees only the projects you have access to yourself. If a project is still missing, check your project membership in the web application.

## A write action fails with a permission error

The MCP server applies the same role-based permissions as the web application. See [Roles and Permissions](../security/roles_permissions.md) for the full matrix.

Creating or editing requirements, risks or software items requires at least the Tech Team role in that project. Deleting a requirement additionally requires the Admin role. Check your role in the project if a write action is rejected.

## A write action fails on a released version

Requirements in a released version cannot be updated at all. Edits to risks and software items on a released version require an explanation, which the assistant must supply as part of the call. Deprecated requirements cannot be updated either.
