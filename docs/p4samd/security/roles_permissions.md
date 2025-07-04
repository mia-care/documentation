---
id: roles_permissions
title: Roles and permissions
sidebar_label: Roles and permissions
---

# Roles and permissions

Configuring P4SaMD as [Console extension with Single Sign-On][console-extension-sso] allow us to integrate with Mia-Platform Console authentication and authorization flow and leverage [Console user roles and permissions][console-roles-permissions] to control access to P4SaMD resources and operations users can perform.

In addition to inheriting Console roles and permissions, P4SaMD users have custom permissions giving more fine-grained control over what they can do inside P4SaMD. Currently, these permissions are assigned to users based on their Console roles.

By default, unless stated otherwise, all authenticated users have full read access to information available on P4SaMD.

## Capabilities and permissions

The following table provides a comprehensive list of the capabilities and the corresponding permissions.

All permissions starting with `console` are inherited from the Console, while those starting with `p4samd` are custom permissions used only by P4SaMD.

| Capabilities                                                                  | P4SaMD permission                                   |
| ----------------------------------------------------------------------------- | --------------------------------------------------- |
| [Create Console project](#create-console-project)                             | `console.company.project.create`                    |
| [Create Console microservice](#create-console-microservice)                   | `console.company.project.service.repository.create` |
| [Update Console project configuration](#update-console-project-configuration) | `console.company.project.configuration.update`      |
| [Download documentation](#download-documentation)                             | `p4samd.documentation.download`                     |
| [Create reference](#create-reference)                                         | `p4samd.reference.create`                           |
| [Delete reference](#delete-reference)                                         | `p4samd.reference.delete`                           |
| [Update reference](#update-reference)                                         | `p4samd.reference.update`                           |
| [Evaluate requirement with AI](#evaluate-requirement-with-ai)                 | `p4samd.requirement.ai.evaluate`                    |
| [Approve SWI design](#approve-swi-design)                                     | `p4samd.software.item.approve`                      |
| [Revoke approval of SWI design](#revoke-approval-of-swi-design)               | `p4samd.software.item.approval.revoke`              |
| [Create SWI design](#create-swi-design)                                       | `p4samd.software.item.create`                       |
| [Delete SWI design](#delete-swi-design)                                       | `p4samd.software.item.delete`                       |
| [Link SWI to other entities](#link-swi-to-other-entities)                     | `p4samd.software.item.link`                         |
| [Update SWI design](#update-swi-design)                                       | `p4samd.software.item.update`                       |
| [Accept SWI vulnerability](#accept-swi-vulnerability)                         | `p4samd.software.item.vulnerability.accept`         |
| [Change software system settings](#change-software-system-settings)           | `p4samd.software.system.settings.manage`            |
| [Evaluate test with AI](#evaluate-test-with-ai)                               | `p4samd.test.ai.evaluate`                           |

This table provides the default list of the P4SaMD permissions granted to each Console role. Please contact directly Mia-Care for more info or customization.

| Permission                                          | Guest | Reporter | Developer | Maintainer | Project Administrator | Company Owner |
| --------------------------------------------------- | ----- | -------- | --------- | ---------- | --------------------- | ------------- |
| `console.company.project.create`                    | ❌    | ❌       | ❌        | ❌         | ❌                    | ✅            |
| `console.company.project.service.repository.create` | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `console.company.project.configuration.update`      | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `p4samd.documentation.download`                     | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `p4samd.reference.create`                           | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.reference.delete`                           | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.reference.update`                           | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.requirement.ai.evaluate`                    | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.approve`                      | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.approval.revoke`              | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.create`                       | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.delete`                       | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.link`                         | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.update`                       | ❌    | ❌       | ✅        | ✅         | ✅                    | ✅            |
| `p4samd.software.item.vulnerability.accept`         | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.software.system.settings.manage`            | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |
| `p4samd.test.ai.evaluate`                           | ❌    | ❌       | ❌        | ✅         | ✅                    | ✅            |

## Security policies

The Role-Based Access Control (RBAC) security policies are enforced in two different but complementary ways:

- Visual elements, like buttons and menus, allowing the user to perform a certain action are hidden if the user is missing the required permissions.
- API endpoints are protected with [Rönd][rond], a distributed security policy evaluation tool integrated natively with the Mia-Platform Console.

The association between roles and permissions is managed using [Rönd roles][rond].

The following sections provide details about the security policies enforced for each capability mentioned previously.

### Download documentation

A user must have the `p4samd.documentation.download` permission to download any of the [automatically generated reports][reports], both on the [Overview page][overview] and the [Software items][software-items] section.

Without the required permissions, the user cannot:

- access the [reports][overview-reports] section in the [Overview page][overview];
- download the SBOM of a system version in the [Software Items][software-items] section;
- download the history or changelog documentation of a software item in the [Software Items][software-items] table or drawer.

### Create reference

A user must have the `p4samd.reference.create` permission to [add a new reference][references-create] in the [References section][references].

### Delete reference

A user must have the `p4samd.reference.delete` permission to [delete an existing reference][references-delete] in the [References section][references].

### Update reference

A user must have the `p4samd.reference.update` permission to [update an existing reference][references-update] in the [References section][references].

### Evaluate requirement with AI

A user must have the `p4samd.requirement.ai.evaluate` permission to request a new [AI-based evaluation][requirements-ai] of a requirement, which would overwrite any existing evaluation.

Without the required permissions, the user can see all the details about existing requirement evaluations, but cannot trigger a new evaluation from both the [Requirements][requirements] table and drawer.

### Approve SWI design

A user must have the `p4samd.software.item.approve` permission to approve and revoke approval of a [software item][software-items].

Without the required permissions, the user can see any approval metadata for an already approved software item and, if granted the `p4samd.software.item.approval.revoke` permission, can revoke the approval.

### Revoke approval of SWI design

A user with the `p4samd.software.item.approval.revoke` permission can revoke the approval of an already-approved software item, but cannot approve a software item.

The approval requires the `p4samd.software.item.approve` permission (see previous section).

:::tip
Under certain circumstances, updating a software item causes the automatic revoke of approval for one or more software items.
This capability, when explicitly granted, allows a user to perform such updates. Without this permission, such updates would fail.
For additional information, please check the [*Update SWI design*](#update-swi-design) section.
:::

### Create SWI design

A user with the `p4samd.software.item.create` permission can add a new software item design from the [Software Items section][software-items].

### Delete SWI design

A user with the `p4samd.software.item.delete` permission can delete an existing software item design from the [Software Items table][software-items-table].

### Link SWI to other entities

A user with the `p4samd.software.item.link` or `p4samd.software.item.update` permission can link any of the following P4SaMD entities to a software item:

- [Change Requests][change-requests-link]
- [Requirements][requirements-link]
- [Risks][risks-link]
- [Tests][tests-link]

Without any of these permissions, the user cannot link a change request, requirement, risk or tests from their respective section.

### Update SWI design

A user with the `p4samd.software.item.update` permission can edit a software edit design from the [Software Items][software-items] table or drawer, but with certain limitations:

- If the software item design is already approved, the `p4samd.software.item.approval.revoke` or `p4samd.software.item.approve` permission is also required to revoke its approval and the approval of all its ancestors.
- If general properties of the software item are changed, which could lead to the automatic revoke of approval of related software item, the `p4samd.software.item.approval.revoke` or `p4samd.software.item.approve` permission is also required.

With this permission, the user can link a change request, requirement, risk or tests from the [update modal][software-items-update] or from the specific section of the related P4SaMD entity.

### Accept SWI vulnerability

A user with the `p4samd.software.item.vulnerability.accept` permission can manage the vulnerability acceptance, including:

- accept a vulnerability;
- update vulnerability acceptance information;
- revoke vulnerability acceptance.

Without these permissions, the user can only view the vulnerabilities.

### Change software system settings

A user must have the `p4samd.software.system.settings.manage` permission to change the [system version settings][system-version-settings].

### Evaluate test with AI

A user must have the `p4samd.test.ai.evaluate` permission to request a new [AI-based evaluation][tests-ai] of a test, which would overwrite any existing evaluation.

Without the required permissions, the user can see all the details about existing test evaluations, but cannot trigger a new evaluation from both the [Tests][tests] table and drawer.

### Create Console project

::::info

This capability is enforced by the Console [Rönd][rond] instance.

:::

A user must have the Console `console.company.project.create` permission to create a new Company project on the Console.

Without this permission, the user is not displayed the button on the [Software Items table][software-items-table] redirecting to the Console wizard to create a new project.

This permission is inherited from the [Console roles and permissions][console-roles-permissions].

### Create Console microservice

::::info

This capability is enforced by the Console [Rönd][rond] instance.

:::

A user must have the Console `console.company.project.service.repository.create` permission to add a new microservice with a dedicated repository.

Without this permission, the user is not displayed the button on the [Software Items table][software-items-table] redirecting to the *Design > Microservices* section of the Console project.

This permission is inherited from the [Console roles and permissions][console-roles-permissions].

### Update Console project configuration

::::info

This capability is enforced by the Console [Rönd][rond] instance.

:::

A user must have the Console `console.company.project.configuration.update` permission to make any changes to a Console project configuration from the *Design* section.

Without this permission, the user is not displayed the button on the [Software Items table][software-items-table] redirecting to the *Design > Microservices* section of the Console project.

This permission is inherited from the [Console roles and permissions][console-roles-permissions].


[console-extension-sso]: https://docs.mia-platform.eu/docs/console/console-extensibility/extension-sso
[console-roles-permissions]: https://docs.mia-platform.eu/docs/development_suite/identity-and-access-management/console-levels-and-permission-management
[rond]: https://rond-authz.io/
[rond-roles]: https://rond-authz.io/docs/policy-integration#roles

[change-requests-link]: ../handbook/changes.md#actions
[overview]: ../handbook/system_overview.md
[overview-reports]: ../handbook/system_overview.md#reports
[references]: ../handbook/references.md
[references-create]: ../handbook/references.md#1-create-a-reference
[references-delete]: ../handbook/references.md#3-reference-actions
[references-update]: ../handbook/references.md#3-reference-actions
[reports]: ../handbook/reports.md
[requirements]: ../handbook/requirements.md
[requirements-ai]: ../handbook/requirements.md#ai-evaluation
[requirements-link]: ../handbook/requirements.md#actions
[risks-link]: ../handbook/risks.md#actions
[software-items]: ../handbook/software_items.md
[software-items-table]: ../handbook/software_items.md#table
[software-items-update]: ../handbook//software_items.md#edit-software-item
[system-version-settings]: ../handbook/software_items.md#software-items-settings
[tests]: ../handbook/verification.md
[tests-ai]: ../handbook/verification.md#ai-evaluation
[tests-link]: ../handbook/verification.md#actions
