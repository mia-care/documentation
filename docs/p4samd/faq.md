---
id: faq
title: Frequently Asked Questions
sidebar_label: FAQ
---

Welcome to the P4SaMD FAQ. This page answers the most common questions about the platform, its capabilities, and how it fits into your development process.

---

### Is P4SaMD an eQMS?

No. P4SaMD is not an Electronic Quality Management System (eQMS). It complements your eQMS by:

1. **Integrating with it**: P4SaMD can provide quick access to documents stored in your eQMS directly from the platform interface, reducing tool-switching.
2. **Enforcing the policies it defines**: P4SaMD ensures that development activities follow the procedures and requirements documented in your QMS, such as those required by ISO 13485.

P4SaMD serves as a bridge between your quality management processes and your software development lifecycle — but it does not replace your eQMS.

---

### Is P4SaMD an ALM tool?

No. P4SaMD is not an Application Lifecycle Management tool. In version 3, however, P4SaMD includes **native work-item management** — requirements, risks, tests, and changes are managed directly inside the platform.

External ALM tools such as Jira are supported as **optional** integrations offering bidirectional synchronization, but they are no longer a prerequisite for using P4SaMD. If you do not have an existing ALM setup, P4SaMD works fully out of the box.

---

### Does P4SaMD v3 require Mia-Platform Console or any other specific platform?

No. P4SaMD version 3 operates as a **standalone platform**. It does not require Mia-Platform Console to be deployed or in use by your organization. Authentication is handled via a federated OIDC identity provider that is part of the P4SaMD installation, independent of any third-party platform.

This is a major change from version 2, which was integrated with Mia-Platform Console.

---

### Is P4SaMD certified as SaMD?

No. P4SaMD does not have a specific intended medical use and therefore cannot be certified as Software as a Medical Device. However, P4SaMD is **validated** for use in developing SaMD solutions. This validation confirms that the platform meets the requirements for reliability and quality needed to support regulated software development.

---

### Is P4SaMD validated for SaMD development?

Yes. P4SaMD is validated for use in the development of solutions intended to be certified as SaMD. Validation is performed following industry guidelines such as GAMP 5 (Good Automated Manufacturing Practice) and GMP Annex 11, ensuring that the platform operates reliably in regulated environments.

For validation documentation, contact Mia-Care.

---

### Can I integrate tools that P4SaMD does not natively support?

Yes. P4SaMD exposes a comprehensive set of APIs that allow you to connect it to any tool or technology stack. Integrations can be built by your team or in collaboration with Mia-Care. This flexibility ensures that P4SaMD adapts to your existing infrastructure.

---

### Does using P4SaMD automatically grant regulatory certification?

No. P4SaMD does not provide automatic certification for the software developed with it. Mia-Care is not a notified body. However, Mia-Care has a network of partners — including notified bodies — who can assist you in obtaining certification. P4SaMD significantly simplifies the preparation process by ensuring your development activities are aligned with regulatory expectations and by generating the necessary compliance documentation.

---

### How does P4SaMD support Artificial Intelligence features in medical software?

P4SaMD includes a dedicated **AI Validation** module designed to support medical software that incorporates machine learning and AI components. This module addresses requirements under the EU AI Act, FDA Good Machine Learning Practices (GMLP), and Predetermined Change Control Plans (PCCP). It provides structured management of training datasets, model versions, and performance metrics, and automates assessments of "substantial modifications" when AI models are updated.

Additionally, P4SaMD's **Smart Insight (Whisper)** module uses AI to proactively evaluate project artifacts against regulatory rules, identify quality issues in requirements, and highlight gaps in test coverage.

AI-powered features are clearly marked in the platform and can be enabled or disabled by an administrator.

---

### What deployment models are available?

P4SaMD v3 supports three deployment models:

| Model | Description |
|-------|-------------|
| **Multi-Tenant SaaS** | Shared cloud instance managed by Mia-Care. Logical data isolation via Row-Level Security. |
| **Dedicated SaaS** | Dedicated cloud infrastructure per customer, managed by Mia-Care. Physical database isolation. |
| **On-Premise** | Self-hosted by the customer. Full data sovereignty, supports air-gapped networks. |

All three models provide the same feature set.

---

### Can multiple teams in my organization use P4SaMD simultaneously?

Yes. P4SaMD v3 is built on a multi-tenant architecture. Within your organization, you can create and manage multiple independent projects, each with its own team, configuration, compliance context, and version history. Users can be assigned to specific projects with role-based access.

---

### What happens to my v2 configuration if I migrate to v3?

P4SaMD v3 is a new platform with a different architecture. Direct in-place migration from v2 to v3 is not supported. For customers moving from v2, the recommended path is to use the **Brownfield Import** feature in v3 to onboard your existing project — the platform will perform a compliance gap analysis and generate a remediation plan to bring your project to audit-ready status under the v3 framework.

For migration support, contact Mia-Care.
