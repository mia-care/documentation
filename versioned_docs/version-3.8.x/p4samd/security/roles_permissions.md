---
id: roles_permissions
title: Roles and Permissions
sidebar_label: Roles and Permissions
---

P4SaMD v3 has its own role-based access control (RBAC) system, independent of any external platform. Roles are assigned at two levels: as an **organization (tenant) member** and as a **member of a specific project**. Both levels use the same five roles, and a user's role in one project or at the organization level has no bearing on another.

## Roles

| Role | Summary |
|------|---------|
| **Admin** | Full control: invite and remove members, change member roles, manage all settings, full read and write access to every SDLC section, and delete or archive the product. |
| **Tech Team** | Create and edit work items in design and implementation, review and approve specifications, read all work items. |
| **Business** | Create and manage work items such as requirements and risks, review and approve specifications, take part in product definition, read design and implementation. |
| **QA** | Review and verify work items in testing, approve requirements and risk controls, access test plans and results, read all SDLC sections. |
| **Viewer** | Read-only access to all product content. Cannot create, edit, or delete any work items. |

## Capabilities by Role

The full breakdown appears in-product when you assign a role: in the **Add Member** dialog, click **Show capabilities**.

| Role | Capabilities |
|------|-------------|
| **Admin** | • Invite and remove product members<br/>• Change member roles<br/>• Manage all product settings<br/>• Full read and write access to all SDLC sections<br/>• Delete or archive the product |
| **Tech Team** | • Create and edit work items in design and implementation sections<br/>• Review and approve specifications<br/>• Read access to all the work items |
| **Business** | • Create and manage work items like requirements and risks<br/>• Review and approve specifications<br/>• Participate in product definition activities<br/>• Read access to design and implementation sections |
| **QA** | • Review and verify work items in testing section<br/>• Approve requirements and risk controls<br/>• Access test plans and test results<br/>• Read access to all SDLC sections |
| **Viewer** | • Read-only access to all product content<br/>• Browse requirements, design, and implementation sections<br/>• Cannot create, edit, or delete any work items |

Manage members from the **Members** page: **Tenant Members** at the organization level, **Product Members** inside a project. See [Products & Projects](../handbook/products.mdx) for adding and removing members.

## Authentication

P4SaMD v3 uses a two-token authentication model:

1. **Login**: the user authenticates against the OIDC identity provider (Keycloak). A login token is issued.
2. **Tenant selection**: the platform retrieves the organizations the user belongs to. The user selects one, or is assigned automatically if they belong to only one.
3. **Tenant token**: the P4SaMD backend issues a tenant-scoped JWT for all subsequent API calls. It contains the active organization identifier and is used to enforce Row-Level Security at the database level.

Access tokens are stored in memory only and are never persisted to local or session storage. Refresh tokens are stored in an httpOnly, Secure cookie to prevent JavaScript access. Sessions renew silently in the background.

## Security Policies

Every request to the P4SaMD API is authenticated and authorized. Unauthenticated requests are rejected with `401 Unauthorized`. Requests from authenticated users without the required role are rejected with `403 Forbidden`.

Database-level Row-Level Security (RLS) prevents queries from returning data belonging to a different organization, even if application-level authorization is bypassed.
