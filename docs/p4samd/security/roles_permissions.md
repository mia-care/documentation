---
id: roles_permissions
title: Roles and Permissions
sidebar_label: Roles and Permissions
---

P4SaMD v3 has its own role-based access control (RBAC) system, independent of any external platform. Roles are assigned at two levels: **Organization** and **Project**.

## Organization Roles

Organization roles govern what a user can do at the organization level — managing members, settings, and projects.

| Role | Description |
|------|-------------|
| **Organization Admin** | Full control over the organization: manage members, settings, integrations, feature toggles, and subscription. Can create and delete projects. |
| **Organization Member** | Can view the organization's product list and enter projects they are a member of. Cannot change organization settings or create projects. |

## Project Roles

Project roles govern what a user can do within a specific project. A user must be explicitly added to a project to have access to it.

| Role | Description |
|------|-------------|
| **Project Admin** | Full control within the project: manage team members, project settings, integrations, and all SDLC artifacts. Can release versions. |
| **Maintainer** | Can create, edit, approve, and release most project artifacts (requirements, risks, tests, changes, versions). Cannot manage team membership or project settings. |
| **Developer** | Can create and edit artifacts. Cannot approve, release, or delete items. |
| **Reporter** | Read-only access to all project artifacts. Cannot modify anything. |
| **Guest** | Read-only access to a limited subset of project information. |

## Capabilities by Role

The following table shows the key capabilities available to each project role.

| Capability | Guest | Reporter | Developer | Maintainer | Project Admin |
|-----------|-------|----------|-----------|------------|---------------|
| View requirements, risks, tests | ✅ | ✅ | ✅ | ✅ | ✅ |
| Create requirements | ❌ | ❌ | ✅ | ✅ | ✅ |
| Edit requirements | ❌ | ❌ | ✅ | ✅ | ✅ |
| Approve requirements | ❌ | ❌ | ❌ | ✅ | ✅ |
| Deprecate requirements | ❌ | ❌ | ❌ | ✅ | ✅ |
| Create risks | ❌ | ❌ | ✅ | ✅ | ✅ |
| Approve risks | ❌ | ❌ | ❌ | ✅ | ✅ |
| Create and run test suites | ❌ | ❌ | ❌ | ✅ | ✅ |
| Delete test suites | ❌ | ❌ | ❌ | ❌ | ✅ |
| Create and approve software items | ❌ | ❌ | ✅ | ✅ | ✅ |
| Delete software items | ❌ | ❌ | ❌ | ✅ | ✅ |
| Generate and publish documentation | ❌ | ❌ | ❌ | ✅ | ✅ |
| Create new versions | ❌ | ❌ | ❌ | ✅ | ✅ |
| Release a version | ❌ | ❌ | ❌ | ✅ | ✅ |
| Manage project settings | ❌ | ❌ | ❌ | ❌ | ✅ |
| Add / remove project members | ❌ | ❌ | ❌ | ❌ | ✅ |

## Authentication

P4SaMD v3 uses a secure two-token authentication model:

1. **Login** — the user authenticates against the OIDC identity provider (Keycloak). A login token is issued.
2. **Tenant selection** — the platform retrieves the list of organizations the user belongs to. The user selects one (or is assigned automatically if they belong to only one).
3. **Tenant token** — the P4SaMD backend issues a tenant-scoped JWT that is used for all subsequent API calls. This token contains the active organization identifier and is used to enforce Row-Level Security at the database level.

Access tokens are stored in memory only and are never persisted to local or session storage. Refresh tokens are stored in an httpOnly, Secure cookie to prevent JavaScript access. Sessions are renewed silently in the background.

## Security Policies

All requests to the P4SaMD API are authenticated and authorized. Unauthenticated requests are rejected with `401 Unauthorized`. Requests from authenticated users lacking the required role for a given operation are rejected with `403 Forbidden`.

Database-level Row-Level Security (RLS) ensures that even in the event of an application-level authorization bypass, queries cannot return data belonging to a different organization.
