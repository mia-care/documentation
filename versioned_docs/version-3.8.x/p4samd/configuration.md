---
id: configuration
title: Configuration
sidebar_label: Configuration
---

After installation, an organization configures P4SaMD itself through the web application. No Mia-Care intervention is required, although Mia-Care qualified personnel can assist on request, for example during an on-premise rollout.

### **Configuration Activities**

1. **Organization settings**: an organization Admin opens **Settings** to review the subscription plan and to invite members with the right role. See [Organizations](./handbook/organizations.mdx) and [Roles and Permissions](./security/roles_permissions.md).

2. **AI features (Optional)**: an Admin enables AI features and connects the organization's own LLM provider, which powers Whisper and AI-based compliance evaluation. See [AI Configuration](./handbook/ai_configuration.md).

3. **Git and CI integration (Optional)**: link the git repository of each software item and configure [Automatic Test Acquisition](./handbook/unit_test_acquisition.md) so unit test reports are pulled from GitLab CI or GitHub Actions.

4. **ALM tool (Optional)**: Jira or another ALM is no longer required. If your team plans its work in one, agree how responsibilities are split and how the two tools are kept consistent. P4SaMD does not ship a built-in ALM connector: see [Working with P4SaMD and Your ALM Tool](./ways-of-working/alm-tools.mdx) for the recommended setup.

5. **AI assistant access (Optional)**: connect an MCP-capable AI assistant to P4SaMD. See [MCP Setup](./mcp/setup.md).

:::note
Mia-Care can perform or support these activities on request. Contact Mia-Care's support team for additional customization or support.
:::
