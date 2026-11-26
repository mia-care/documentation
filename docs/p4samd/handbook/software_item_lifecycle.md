---
id: software_item_lifecycle
title: Software Item Lifecycle
sidebar_label: Software Item Lifecycle
---

# Software Item Lifecycle

Every software item in **System Design** has a status that shows how far its design has been reviewed. Open the item and use the lifecycle buttons in its detail view to move it from one status to the next.

| Status | Meaning | Actions available |
|---|---|---|
| **Draft** | The design is being written. | Approve |
| **Approved** | The design has been reviewed and signed off. | Verify, Revert to Draft |
| **Verified** | The design has been verified. | Revert to Draft |
| **Deprecated** | The item is retired and cannot move to another status. | None |

The **Deprecate** action is described at the end of this page.

## Approving and verifying

- **Approve** moves a Draft item to Approved. You can add a note explaining the approval. Only members with the **Admin** role in the project can approve.
- **Verify** moves an Approved item to Verified. You can add a note.

Both actions need write access to System Design.

## Revoking an approval

If an approved or verified item needs to change, revoke its approval.

1. Open the software item and choose **Revert to Draft**.
2. Enter the reason for revoking the approval. It is required and must have at least 10 characters.
3. Confirm.

The item returns to **Draft** and needs to be approved again. The reason is kept in the item's history together with who revoked the approval and when.

Only members with the **Admin** role in the project can revoke an approval, and they also need write access to System Design. A deprecated item cannot be reverted.

## Deprecating

**Deprecate** retires an item. A reason of at least 10 characters is required, and a deprecated item cannot be moved back to another status.
