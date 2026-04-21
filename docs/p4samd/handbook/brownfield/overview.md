---
id: overview
title: Brownfield Import — Overview
sidebar_label: Overview
---

The **Brownfield Import** feature allows you to onboard an existing software project — one already in development or even in production — into P4SaMD. The platform analyzes your current state against the applicable regulatory framework and produces a prioritized compliance gap analysis and a remediation plan you can act on immediately.

Use this feature when your software product already exists but has not been developed under a formal IEC 62304-compliant process, when you need to understand the gap between your current state and EU MDR or FDA certification requirements, when you want to generate a structured roadmap to bring an existing product to audit-ready status, or when you are acquiring or inheriting a system and need to assess its regulatory posture.

## How It Works

The process has two phases. First, a guided **six-step wizard** where you describe the project, upload technical assets, and provide existing documentation — this takes approximately 30–60 minutes depending on the volume of materials. Second, an **asynchronous evaluation** in which P4SaMD processes your uploaded materials and produces a compliance gap analysis and a prioritized remediation plan. You can track evaluation progress on the Evaluation page and return to it at any time while processing is underway.

The six wizard steps are:

| Step | Name | What you provide |
|---|---|---|
| 1 | Overview | Review the process and what to prepare |
| 2 | Use Case | Reason for the assessment (new certification, market expansion, acquisition, etc.) |
| 3 | Target Definition | Target regulatory framework, device class, intended use, and target market region |
| 4 | Technical Assets | Source repositories, CI/CD configurations, build artifacts, and development toolchain details |
| 5 | Documentation | Existing design documents, SOPs, test reports, risk analyses, and other compliance evidence |
| 6 | Summary | Review all inputs before submitting for evaluation |

You can pause at any time by clicking **Save and Exit** — your session is saved and you can resume from the Brownfield Import page. If you want to start over, use **Discard** to clear the session.

## After Evaluation

When evaluation completes, the Evaluation page shows an **overall compliance score** (the percentage of the target framework currently satisfied), a **gap analysis breakdown** categorized by area with a severity rating for each gap, a **remediation plan** with recommended actions ordered by effort and impact, and an **evidence inventory** of the documentation that was recognized and ingested.

---

- [Start the Import Wizard →](./import-wizard)
