---
id: products
title: Products & Projects
sidebar_label: Products & Projects
---

The **Products page** is the organization-level hub that shows all medical device software projects within your organization. From here you can browse, create, import, and enter individual projects.

## The Products Page

Navigate to the Products page by clicking **All Products** in the left sidebar (when no project is selected) or by returning to the organization level via the breadcrumb navigation.

### Product Card

Each project is displayed as a card showing:

| Field | Description |
|-------|-------------|
| **Name** | Project name |
| **Description** | Brief description of the medical device software |
| **Type Badge** | Standard (default) or **AI-Powered** (enables AI-specific features) |
| **Latest Version** | Name and status of the most recent workspace version |
| **Compliance Status** | Overall compliance posture (e.g., Compliant, Action Required) |
| **Safety Classification** | IEC 62304 class — **A**, **B**, or **C** |
| **Regulatory Framework** | Primary target framework (e.g., EU MDR, FDA) |

### Entering a Project

Click a product card to enter the project. P4SaMD:

1. Sets the project as your active context.
2. Loads the project's sidebar navigation.
3. Displays the project dashboard with the most recent workspace version.

### Pinning a Project

Hover over a product card and click the **pin icon** to pin the project. Pinned projects appear in the **Pinned Projects** section of the left sidebar, giving you one-click access from anywhere in the platform without returning to the Products page.

To unpin, hover over the pinned project in the sidebar and click the unpin icon.

## Creating a New Project

1. On the Products page, click **Create New Project**.
2. Complete the creation form:

   | Field | Required | Notes |
   |-------|----------|-------|
   | **Name** | Yes | A short, descriptive name for the project |
   | **Description** | No | What the software does and its intended context of use |
   | **Type** | Yes | Standard or AI-Powered |
   | **Intended Use** | Yes | Plain-language statement of the device's intended medical use |
   | **Target Market Region** | Yes | EU, US, or other — determines applicable regulatory frameworks |
   | **Regulatory Frameworks** | Yes | Select all that apply (e.g., EU MDR, FDA 510(k)) |
   | **Safety Classification** | Yes | IEC 62304 Class A, B, or C |

3. Click **Create**. P4SaMD provisions the project and takes you to the project dashboard.

:::info AI-Powered projects
Selecting the **AI-Powered** project type enables additional sections in the sidebar for managing AI components, datasets, model versions, and AI-specific compliance requirements. This setting can also be changed later by a project administrator.
:::

## Importing an Existing Project

To onboard an existing software project into P4SaMD:

1. On the Products page, click **Import Project**.
2. The Brownfield Import wizard opens. Follow the six steps to provide project context and upload technical assets.
3. After submission, P4SaMD performs a compliance gap analysis and generates a remediation plan.

See [Brownfield Import](./brownfield/overview) for the full guide.

## Project Types

| Type | Description |
|------|-------------|
| **Standard** | A conventional medical device software project. All core SDLC, compliance, and documentation features are available. |
| **AI-Powered** | Extends Standard with additional tools for managing AI/ML components, including AI validation, dataset management, and AI-specific compliance workflows. |

## Managing Team Members

Once inside a project, go to **Settings → Team Members** to add or remove users and manage their roles within the project.

User roles determine which actions team members can perform. See [Roles and Permissions](../security/roles_permissions) for a full description of each role.

## Next Steps

- [Work with requirements →](./requirements)
- [Run a Brownfield Import →](./brownfield/overview)
- [Manage versions →](./version_management)
