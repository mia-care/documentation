---
id: overview
title: What is P4SaMD?
sidebar_label: What is P4SaMD?
---

**P4SaMD** (Platform for Software as a Medical Device) is the compliance governance platform built by Mia-Care to help development teams design, build, and certify medical device software efficiently. Version 3 is a complete re-architecture of the platform: it runs as a **standalone product** with its own dedicated interface, independent of any other software infrastructure.

## What P4SaMD Does

P4SaMD accompanies development teams through the entire lifecycle of Software as a Medical Device (SaMD) creation, ensuring alignment with:

- **EU MDR** (Medical Device Regulation)
- **FDA** regulations for software medical devices
- **IEC 62304** — the leading standard for medical device software development
- **ISO 14971** — risk management for medical devices
- **ISO 13485** — quality management systems for medical devices

By embedding compliance directly into the development workflow, P4SaMD transforms regulatory obligations from a barrier into an accelerator — enabling teams to move fast while remaining audit-ready at all times.

## Who Uses P4SaMD?

P4SaMD is designed for every role involved in the SaMD development lifecycle:

| Role | How P4SaMD Helps |
|------|-----------------|
| **Software Engineers** | Guided, IEC 62304-compliant development process with structured workflows that reduce regulatory overhead |
| **Product Owners** | Link product requirements to compliance evidence, track project health, and manage version releases |
| **Project Managers** | Visibility into compliance status, risk posture, and project progress across all products |
| **QA Engineers** | Enforce quality processes, manage test plans, and track verification coverage |
| **Regulatory Affairs** | Manage compliance with ISO 13485, IEC 62304, and ISO 14971; generate documentation for audits and submissions |

## Key Features in v3

| Feature | Description |
|---------|-------------|
| **Requirements Management** | Create, organize, and trace software requirements with a hierarchical tree, lifecycle statuses, and full traceability to design and tests |
| **Risk Management** | Identify, assess, and mitigate software risks following ISO 14971, with guided risk estimation and linkage to control measures |
| **System Design** | Define and document your software architecture using a hierarchical Software Item model, classifying components including SOUPs and AI-based elements |
| **Verification & Validation** | Plan and execute test cases, manage test runs, and collect automated test evidence across unit, integration, and system levels |
| **Brownfield Import** | Onboard existing software projects through a guided wizard, then receive an automated compliance gap analysis and remediation plan |
| **Documentation Engine** | Auto-generate Technical File documents — release notes, risk reports, SBOM reports, and more — populated with live project data |
| **Version Management** | Create and manage workspace versions with structured release workflows aligned to IEC 62304 |
| **Multi-Tenancy** | One installation serves multiple organizations with complete data isolation between tenants |
| **SDLC Orchestration** | Connect your git provider, CI/CD pipeline, and toolchain to enforce compliance guardrails at the code level |

## What Changed in Version 3

Version 3 is a fundamental evolution from version 2. The most significant changes are:

| Aspect | Version 2 | Version 3 |
|--------|-----------|-----------|
| **Deployment** | Embedded in Console (shared infrastructure) | Standalone platform with dedicated UI |
| **Authentication** | Single Sign-On with Console | Federated OIDC authentication, independent identity provider |
| **Tenancy** | Single-tenant per instance | Multi-tenant: one installation serves multiple organizations |
| **Work-Item Management** | Required external ALM (Jira mandatory) | Native work-item management built in; external ALMs are optional |
| **Project Scope** | One project per instance | Multiple projects per organization |
| **Self-Service** | Mia-Care configures on your behalf | Organizations configure themselves through the admin portal |

## Deployment Options

P4SaMD v3 supports three deployment models:

- **Multi-Tenant SaaS** — Fully managed, shared cloud deployment with logical data isolation between organizations. Zero infrastructure to manage.
- **Dedicated SaaS** — Dedicated cloud infrastructure per customer for organizations that require physical database separation while keeping SaaS operational simplicity.
- **On-Premise** — Self-hosted deployment for complete data sovereignty, air-gapped network support, and custom infrastructure requirements.

All three deployment models provide the same feature set.

## Integrations

P4SaMD integrates with the tools your team already uses:

- **Git providers**: GitHub, GitLab (for source control and automated evidence collection)
- **CI/CD**: Jenkins, GitHub Actions, GitLab CI (for automated test result ingestion)
- **ALM tools**: Jira and others (optional bidirectional sync — no longer mandatory)
- **eQMS systems**: Connect to your quality management system for document access

## Next Steps

- [Get started with P4SaMD →](./handbook/getting_started)
- [Read the FAQ →](./faq)
- [See what's new in v3 →](./release-notes/v3.0)
