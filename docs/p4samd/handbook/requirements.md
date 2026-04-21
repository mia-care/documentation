---
id: requirements
title: Requirements Management
sidebar_label: Requirements
---

The **Requirements** section of P4SaMD allows you to capture, organize, trace, and verify the software requirements for your medical device project. Native work-item management is built in — no external ALM tool is needed.

## Accessing Requirements

Inside a project, click **Requirements** in the left sidebar.

## The Requirements List

Requirements are displayed in either of two views:

| View | Description |
|------|-------------|
| **Tree view** | Requirements organized in a collapsible hierarchy of sections and child items. Useful for browsing the full requirement structure. |
| **Flat view** | All requirements shown as a flat list, sortable by title, type, priority, quality, and status. Useful for bulk review and filtering. |

Switch between views using the toggle at the top of the requirements list.

## Requirement Fields

Each requirement has the following fields:

| Field | Description |
|-------|-------------|
| **ID** | Automatically generated unique identifier |
| **Title** | Short descriptive name |
| **Description** | Full text of the requirement |
| **Type** | Functional, Non-Functional, or Interface |
| **Priority** | Must, Should, or Could |
| **Status** | Draft → In Review → Approved → Verified |
| **Level** | System (system-level) or Software (software decomposition) — supports IEC 62304 V-model traceability |
| **Assignee** | Team member responsible for the requirement |
| **Labels** | Free-form tags for grouping and filtering |
| **Acceptance Criteria** | Conditions that must be met for the requirement to be considered verified |
| **Mockup Reference** | Optional link to a UI mockup or design artifact |

## Creating a Requirement

1. In the Requirements list, click **+ New Requirement** (or right-click a section and select **Add requirement**).
2. Fill in the required fields — at minimum, a title and type.
3. Click **Save**. The requirement is created in **Draft** status.

### Creating a Section

Requirements can be grouped under sections (header nodes) to create a hierarchical structure.

1. Click **+ New Section** at the top of the requirements list.
2. Enter a section name and click **Save**.
3. Drag requirements under the section, or create new requirements directly within it.

## Managing Requirement Status

Requirements move through a defined lifecycle:

```
Draft → In Review → Approved → Verified
```

- **Draft**: Requirement is being written and is not yet ready for review.
- **In Review**: Requirement has been submitted for review by a designated approver.
- **Approved**: Requirement has been reviewed and signed off by the approver.
- **Verified**: Requirement is linked to passing tests that confirm it has been implemented correctly.

To change a requirement's status, open the requirement detail view and use the status control in the header.

## Traceability

P4SaMD automatically maintains bidirectional traceability links. In the requirement detail view you can see:

- **Linked Software Items**: design elements that implement this requirement
- **Linked Risks**: risks that relate to this requirement, with coverage percentage
- **Linked Tests**: test cases that verify this requirement
- **Change History**: full audit trail of all changes

## Searching and Filtering

Use the search bar to find requirements by title or ID. Use the filter panel to narrow results by:

- Type (Functional, Non-Functional, Interface)
- Status (Draft, In Review, Approved, Verified)
- Quality level (if Smart Insight is enabled)
- Assignee

## Deprecating a Requirement

If a requirement is no longer applicable:

1. Open the requirement detail view.
2. Click **Deprecate** from the action menu.
3. Enter a mandatory rationale explaining why the requirement is being deprecated.
4. P4SaMD creates a change request automatically and marks the requirement as deprecated.

Deprecated requirements are retained in the system for traceability and audit purposes.

## Importing and Exporting

- **Import**: Upload a CSV file containing requirements mapped to P4SaMD fields. Use this to migrate from an external ALM tool or to bulk-load a large requirement set.
- **Export**: Download the full requirement set in standard formats for use outside P4SaMD.

## Next Steps

- [Work with versions →](./version_management)
