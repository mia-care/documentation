---
id: requirements
title: Requirements Management
sidebar_label: Requirements
---

The **Requirements** section of P4SaMD is where you capture, organize, trace, and verify the software requirements for your medical device project. Work-item management is built directly into the platform — no external ALM tool is needed. Open it by clicking **Requirements** in the left project sidebar.

## Navigating the Requirements List

Requirements can be browsed in two views, switchable via the toggle at the top of the list. The **tree view** shows requirements organized in a collapsible hierarchy of named sections, which is useful for getting an overview of the full structure. The **flat view** shows all requirements as a sortable, filterable list — better for bulk review or when you need to apply search and filter criteria quickly.

Each requirement carries a set of standard fields: an auto-generated **ID**, a **title** and **description**, a **type** (Functional, Non-Functional, or Interface), a **priority** (Must, Should, Could), and a **status** that progresses through the lifecycle. You can also assign a **level** (System or Software) to support IEC 62304 V-model traceability, attach an **assignee**, apply **labels** for grouping, define **acceptance criteria**, and optionally link a mockup reference.

## Creating Requirements

To add a new requirement, click **+ New Requirement** at the top of the list, or right-click a section in tree view and choose **Add requirement**. Fill in at minimum a title and a type, then save. New requirements are created in **Draft** status. To impose structure, you can create **sections** — named header nodes that group related requirements — by clicking **+ New Section** and then dragging requirements under them or creating them directly within.

## Requirement Lifecycle

Every requirement moves through four states: `Draft → In Review → Approved → Verified`. A **Draft** is still being written. Once ready, it moves to **In Review** for a designated approver to evaluate. After sign-off it becomes **Approved**. Finally, once it is linked to passing test evidence that confirms it has been implemented correctly, it reaches **Verified**. You change the status using the status control in the requirement detail view.

If a requirement becomes obsolete, use the **Deprecate** action in the detail view. Deprecation requires a mandatory rationale, triggers an automatic change request, and marks the requirement as deprecated while retaining it in the system for traceability and audit purposes.

## Traceability

P4SaMD maintains bidirectional traceability automatically. In the requirement detail view you can see all **linked software items** (design elements that implement the requirement), **linked risks** (with a coverage indicator), **linked test cases** (that verify it), and a full **change history** showing every edit made, by whom, and when.

## Searching, Filtering, and Bulk Actions

Use the search bar to find requirements by title or ID. The filter panel lets you narrow by type, status, quality level (if Smart Insight is enabled), and assignee. For large projects, the flat view with filters is the fastest way to work through a backlog.

You can also **import** requirements from a CSV file — useful for migrating from an external ALM tool or loading a pre-existing requirement set — and **export** the full list in standard formats for use outside P4SaMD.

---

- [Work with versions →](./version_management)
