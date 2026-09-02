---
id: overview
title: MCP Server Overview
sidebar_label: Overview
slug: overview
---

P4SaMD exposes a **Model Context Protocol (MCP) server**. Through it, an AI assistant such as Claude Code, Claude.ai, ChatGPT, Cursor or VS Code can read and write your project's requirements, risks, software architecture, design files, traceability links and test cases.

To connect a client, see [Setup](./setup.md). If a connection or a tool call fails, see [Troubleshooting](./troubleshooting.md).

## What an assistant can do

Once connected, an assistant can:

- Browse and search your requirements, risks, software items and test cases in natural language.
- Draft new requirements, risks or test cases for your review.
- Inspect traceability coverage, for example which requirements are untested or which risks are unmitigated, and propose fixes.
- Read and update text-based design files (Markdown, JSON, XML, drawio) attached to a software item.
- Deprecate a requirement, add a control measure to a risk, or link two work items together.

## Permissions and audit

Every action the assistant takes is performed as you, through your own P4SaMD account and role. The MCP server applies the same role-based permissions and the same organization boundaries as the web application, so an assistant connected on your behalf cannot see or change more than you can. Writes are recorded in the audit trail exactly as they would be if you had made them in the web application.

Access is scoped to one organization for the whole session. You choose that organization during sign-in, and within it the assistant sees only the projects you have access to.

:::note Confirming write actions
Read actions, meaning listing or viewing data, are safe to run automatically. Actions that create, change or delete data are worth reviewing before they are applied. Most clients can be configured to ask for confirmation on each tool call; check your client's own settings for how to do this.
:::

## Tool reference

The tables below list the tools the P4SaMD MCP server exposes, grouped by area. If a tool is not listed here, the server does not provide it.

### Requirements and sections

| Tool | Description |
|---|---|
| `list_projects` | List the projects you have access to in the current organization. |
| `list_requirements` | Browse and filter a project's requirements by level, status or free-text search. |
| `get_requirement` | Retrieve one requirement in full, including its description, acceptance criteria and links. |
| `create_requirement` | Create a requirement, with title, description, level (Users, System or Software), type, priority and labels. Requires the Tech Team role or higher. |
| `update_requirement` | Change one or more fields of an existing requirement. Not permitted on a deprecated requirement or one belonging to a released version. |
| `deprecate_requirement` | Retire a requirement. An explanation is mandatory and is recorded in the audit trail. Only Approved or Verified requirements can be deprecated. |
| `delete_requirement` | Permanently remove a **Draft** requirement or section that has no links and no child items. This is a hard delete and cannot be undone. |
| `create_section` | Add a grouping heading to the requirements tree. |
| `update_section` | Rename a section or move it elsewhere in the tree. |
| `delete_section` | Remove a section, once it has no items left inside it. |

### Traceability links

| Tool | Description |
|---|---|
| `get_traceability_matrix` | Show every link attached to a risk or requirement. Use it to find untested requirements or unmitigated risks. |
| `create_requirement_link` | Create a typed traceability link between two work items, for example a user requirement that satisfies a software requirement, or a test that verifies a requirement. |
| `delete_requirement_link` | Remove a traceability link by its ID. |
| `list_requirement_links` | List the traceability links attached to a work item, with optional direction and type filters. |
| `delete_risk_link` | Remove a link between a risk and a requirement or test. |

### Risk management

| Tool | Description |
|---|---|
| `list_risks` | Browse the risk register, with filters for status, harm category, severity, probability and risk level. |
| `get_risk` | Retrieve one risk in full, including its control measures and its ISO 14971 initial and residual risk levels. |
| `create_risk` | Create a risk, with hazard, harm, harm category, initial severity and initial probability. The initial risk level is calculated automatically. |
| `update_risk` | Update a risk's fields, including the residual severity and probability after mitigation. Editing a risk on a released version requires an explanation. |
| `create_control_measure` | Add a mitigation to a risk, optionally linking it to the requirements, tests or software items that implement it. |
| `update_control_measure` | Change or re-link an existing control measure. |

### Software items

| Tool | Description |
|---|---|
| `list_software_items` | Browse your software architecture as a tree or a flat list, covering systems, components, units and third-party (SOUP) dependencies. |
| `get_software_item` | Retrieve one software item in full, including its safety classification and its linked requirements, risks and tests. |
| `create_software_item` | Add an architecture component, unit or SOUP dependency. |
| `update_software_item` | Change a software item's name, type, safety class or other fields. Editing an item on a released version requires an explanation. |

### Design files

| Tool | Description |
|---|---|
| `list_design_files` | List the design files attached to a software item. |
| `get_design_file_content` | Read the content of a text-based design file. |
| `create_design_file` | Attach a text-based design file to a software item. |
| `update_design_file_content` | Replace a design file's content. The previous content is kept as a version in its history. |
| `delete_design_file` | Delete a design file and its version history. |
| `list_design_file_versions` | List the saved historical versions of a design file. |
| `get_design_file_version_content` | Read the content of a specific historical version. |
| `restore_design_file_version` | Restore a design file to a previous version. |
| `create_version_tag` | Tag a specific version of a design file, for example as reviewed. |
| `delete_version_tag` | Remove a tag from a design file version. |
| `get_design_file_history` | Retrieve the audit trail of every change made to a software item's design files. |

:::note Text files only
Only text-based design files (`.md`, `.txt`, `.json`, `.xml`, `.drawio`) can be read or written through an AI assistant. Binary files such as PDFs and images must be managed from the P4SaMD web application.
:::

### SBOM

| Tool | Description |
|---|---|
| `download_sbom` | Download the generated Software Bill of Materials, in CycloneDX format, for a completed scan of a software item. |

### Test cases

| Tool | Description |
|---|---|
| `list_test_cases` | Browse test cases (Unit, Integration, System or Acceptance), with filters for status, execution mode and others. |
| `get_test_case` | Retrieve one test case in full, including its execution history and traceability links. |
| `create_test_case` | Create a test case, optionally linking it in the same call to the requirements or risks it verifies. |
