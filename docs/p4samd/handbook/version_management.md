---
id: version_management
title: Version Management
sidebar_label: Version Management
---

P4SaMD uses **workspace versions** to track the evolution of your medical device software through its development lifecycle. Each version represents a snapshot of requirements, risks, software items, and test evidence at a given point in time — aligned with IEC 62304 configuration management requirements.

## Concepts

| Term | Definition |
|------|-----------|
| **Workspace Version** | A named, timestamped snapshot of all project artifacts (requirements, risks, design, tests) at a specific point in the development process |
| **Draft Version** | A version in active development — artifacts can be created and modified |
| **Released Version** | A version that has been locked and formally released — no further modifications are permitted |
| **Active Version** | The version currently loaded in your project context, visible in the top navigation bar |

## Navigating Versions

The **active version** is displayed in the project header. To switch to a different version:

1. Click the version name in the project header.
2. A dropdown lists all available versions with their status.
3. Click the version you want to load.

The sidebar and all content views update to reflect the selected version.

## Creating a New Version

To create a new workspace version:

1. Inside a project, go to **Versions** in the left sidebar.
2. Click **Create Version**.
3. Provide:
   - **Version name** (e.g., `v1.0.0`, `2.3-beta`)
   - **Description** (optional)
4. Click **Create**.

The new version starts as a **Draft** and is pre-populated with the current state of all project artifacts.

## Releasing a Version

When a version is complete and has passed all required verification activities:

1. Go to **Versions → [version name] → Actions → Release**.
2. Confirm the release. P4SaMD:
   - Locks the version (no further modifications allowed)
   - Records the release date and the releasing user
   - Generates a release summary

Released versions are permanent records. They cannot be modified or deleted.

## Version Lifecycle

```
Draft  →  [verification complete]  →  Released
```

- **Draft**: Active development. Artifacts can be added, edited, or linked.
- **Released**: Frozen. All artifacts are read-only. The version serves as a permanent compliance record.

## Audit Trail

Every change to an artifact within a version is recorded in the audit log with:

- The date and time of the change
- The user who made the change
- The previous and new values

The audit log is accessible from **Settings → Audit Log** and is always scoped to the active organization.

## Next Steps

- [Manage requirements →](./requirements)
