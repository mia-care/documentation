---
id: organizations
title: Organizations & Multi-Tenancy
sidebar_label: Organizations
---

P4SaMD v3 is a **multi-tenant platform**. A single P4SaMD installation can serve multiple independent organizations simultaneously, with complete data isolation between them. This means your organization's projects, users, and data are never visible to users of another organization on the same installation.

## What is an Organization?

An **organization** in P4SaMD represents your company or team. It is the top-level container for:

- **Projects** — your medical device software products
- **Users** — team members with roles and permissions
- **Settings** — compliance templates, feature toggles, integration configurations
- **Subscription** — the features and project quota available to you

## Multi-Organization Membership

A single user account can belong to **more than one organization**. This is useful for consultants, contractors, or team members who work across multiple regulated product lines.

Each membership is independent: your role and permissions in organization A have no bearing on your role in organization B.

## Selecting an Organization at Login

When you log in to P4SaMD:

1. If your account belongs to **one organization**, P4SaMD takes you there automatically.
2. If your account belongs to **multiple organizations**, a selection screen appears showing each organization card with your role.
3. Click the organization you want to work in.

## Switching Organizations

You can switch between organizations at any time without logging out:

1. Click your organization name or the switcher icon in the top navigation bar.
2. A panel lists all organizations your account belongs to.
3. Click the target organization to switch.

Your current project context and unsaved state are preserved within each organization independently.

## Organization-Level Settings

Organization administrators can configure organization-wide settings, including:

- **Branding** — display name and visual preferences
- **Compliance settings** — default regulatory frameworks and templates
- **Feature toggles** — enable or disable optional features (such as AI-powered capabilities)
- **Integrations** — configure connections to git providers, CI/CD systems, and ALM tools

Only users with the **Organization Admin** role can access and modify these settings.

## Data Isolation

All data in P4SaMD is scoped to a specific organization. This means:

- Users see only projects belonging to the currently active organization.
- Search, filters, and reports never surface data from another organization.
- Audit logs are scoped per organization.

The underlying data isolation is enforced at the database level (Row-Level Security) as well as at the application layer, providing defense-in-depth.

## Next Steps

- [Manage products and projects →](./products)
- [Understand user roles and permissions →](../security/roles_permissions)
