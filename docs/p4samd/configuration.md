---
id: configuration
title: Configuration
sidebar_label: Configuration
---

After installation, **Mia-Care qualified personnel** configure Mia-Care P4SaMD to match the customer’s requirements.

### **Configuration Activities**

1. **JIRA Integration (Mandatory)**: Required to synchronize data between JIRA and Mia-Care P4SaMD. This includes:
    - **Mapping JIRA Issue Fields:** Aligning the JIRA issue fields with the P4SaMD data model.
    - **Setup of JIRA Webhooks:** Configuring webhooks on JIRA projects so relevant data reaches P4SaMD in real time.
    - **Setup Jira Project Link (Optional):** Linking the JIRA project URL within P4SaMD for direct navigation between the two systems.

2. **Console extension with Single Sign-On**: P4SaMD runs as a [Console extension with SSO][console-extension-sso], using the Mia-Platform Console authentication and authorization flow. This avoids additional logins and keeps security policies in the Console. For Console roles and permissions, see the [official documentation][console-roles-permissions].

3. **Test Framework Setup (Optional)**: Mia-Care can configure the testing framework for automated integration and system testing. This includes:
    - Setting up and enabling automated test tools for quality assurance.
    - Configuring test cases and workflows to validate system functionality and performance.
    
:::note
Customers may also choose to perform this configuration independently at a later stage using the provided documentation.
:::

### Configuration Completion
Once the requested configurations are complete, Mia-Care provides a detailed summary of the activities performed and of the resulting settings.

For additional customization or support, contact Mia-Care’s support team.


[console-extension-sso]: https://docs.mia-platform.eu/docs/console/console-extensibility/extension-sso
[console-roles-permissions]: https://docs.mia-platform.eu/docs/development_suite/identity-and-access-management/console-levels-and-permission-management