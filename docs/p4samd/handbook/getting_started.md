---
id: getting_started
title: Getting Started
sidebar_label: Getting Started
---

This guide walks you through your first session in P4SaMD v3 — from logging in to navigating your first project.

## Prerequisites

Before you begin, ensure that:

1. Your organization has an active P4SaMD subscription (SaaS or on-premise).
2. A P4SaMD administrator has created your user account and added you to at least one organization.
3. You have received a welcome email with the URL of the P4SaMD instance and your login credentials.

## Step 1 — Log In

1. Open your browser and navigate to the P4SaMD URL provided by your administrator.
2. On the login screen, enter your credentials (username and password).
3. Complete any multi-factor authentication steps if configured.

Once authenticated, P4SaMD checks which organizations your account belongs to and proceeds automatically to Step 2.

## Step 2 — Select Your Organization

If your account belongs to **more than one organization**, a selection screen appears after login. Each card shows the organization name and your role within it.

- Click an organization card to enter it.
- Your selection determines which projects, users, and data are visible for the rest of your session.

If your account belongs to **exactly one organization**, P4SaMD skips this screen and takes you directly to the Products page.

:::tip Switching organizations later
You can switch organizations at any time using the organization switcher in the top navigation bar. Your session data is saved — you will return to the same context when you switch back.
:::

## Step 3 — Explore the Products Page

After selecting an organization, you land on the **Products page**. This is the main hub for all software projects within your organization.

Each product card displays:

- Project name and description
- Project type (Standard or AI-Powered)
- Latest version name and status
- Software safety classification (Class A, B, or C)
- Applicable regulatory framework (e.g., EU MDR, FDA)

### Entering a Project

Click any product card to enter the project context. P4SaMD loads the project's sidebar navigation and displays the project dashboard with the most recent workspace version.

### Pinning Projects

If you work with a project frequently, hover over its card and click the pin icon. The project appears in the **Pinned Projects** section of the left sidebar for quick access from any page.

## Step 4 — Navigate the Project

Once inside a project, the left sidebar shows the full set of SDLC tools available. The sections you see depend on your subscription plan and role:

| Sidebar Section | Purpose |
|----------------|---------|
| **Dashboard** | Overview of project health, compliance status, and recent activity |
| **Requirements** | Manage and trace software requirements |
| **System Design** | Define and document your software architecture |
| **Risks** | Identify, assess, and mitigate software risks |
| **Verification & Validation** | Manage test plans and test cases |
| **Changes** | Track and manage change requests |
| **Versions** | Manage workspace versions and release workflows |
| **Documentation** | Generate compliance documentation and reports |

## Step 5 — Create or Import a Project

### Creating a New Project

If you need to start a new project from scratch:

1. On the Products page, click **Create New Project**.
2. Fill in the project details:
   - Name and description
   - Type: **Standard** or **AI-Powered**
   - Intended use statement
   - Target market region (e.g., EU, US)
   - Regulatory frameworks (e.g., EU MDR, FDA 510(k))
   - Software safety classification (IEC 62304 Class A, B, or C)
3. Click **Create**.

P4SaMD sets up the project and takes you to the project dashboard.

### Importing an Existing Project (Brownfield)

If you have an existing software system that you want to bring into P4SaMD:

1. On the Products page, click **Import Project**.
2. Follow the six-step Brownfield Import wizard.
3. After completing the wizard, P4SaMD performs a compliance gap analysis and generates a remediation plan.

See [Brownfield Import](./brownfield/overview) for the full walkthrough.

## Next Steps

- [Understand organizations and multi-tenancy →](./organizations)
- [Manage products and projects →](./products)
- [Work with requirements →](./requirements)
- [Run a Brownfield Import →](./brownfield/overview)
