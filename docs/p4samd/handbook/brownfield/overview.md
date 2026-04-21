---
id: overview
title: Brownfield Import — Overview
sidebar_label: Overview
---

The **Brownfield Import** feature allows you to onboard an existing software project — one already in development or even in production — into P4SaMD. The platform analyzes your current state against the applicable regulatory framework and produces a prioritized compliance gap analysis and remediation plan.

## When to Use Brownfield Import

Use this feature when:

- Your software product already exists but has not been developed under a formal IEC 62304-compliant process.
- You need to understand the compliance gap between your current state and EU MDR or FDA certification requirements.
- You want to generate a structured roadmap to bring your existing product to audit-ready status.
- You are acquiring or inheriting a software system and need to assess its regulatory posture.

## How It Works

The Brownfield Import process has two distinct phases:

1. **Wizard** — a guided, six-step form where you describe your project, upload technical assets, and provide existing documentation. The wizard takes approximately 30–60 minutes to complete, depending on the volume of assets.

2. **Evaluation** — after submitting the wizard, P4SaMD processes your uploaded materials asynchronously and produces:
   - A **compliance gap analysis** showing which regulatory requirements are met, partially met, or missing
   - A **prioritized remediation plan** that sequences the actions needed to achieve compliance

You can track the evaluation progress on the Evaluation page. Processing time depends on the volume of uploaded assets.

## The Six Wizard Steps

| Step | Name | What You Provide |
|------|------|-----------------|
| 1 | Overview | Introduction to the process; review what to prepare |
| 2 | Use Case | The reason for the assessment (new certification, market expansion, acquisition, etc.) |
| 3 | Target Definition | Target regulatory framework, device class, intended use, and target market region |
| 4 | Technical Assets | Source repositories, CI/CD configurations, build artifacts, and development toolchain details |
| 5 | Documentation | Existing design documents, SOPs, test reports, risk analyses, and other compliance evidence |
| 6 | Summary | Review all inputs before submitting for evaluation |

## Saving and Resuming

If you need to stop partway through the wizard:

- Click **Save and Exit** at any point.
- Your session is saved automatically.
- Return to the Brownfield Import page to resume from where you left off.

You can also **discard** a session if you want to start over.

## After Evaluation

Once evaluation is complete, the Evaluation page displays:

- **Overall compliance score** — a percentage reflecting how much of the target framework is currently satisfied
- **Gap analysis breakdown** — categorized list of missing or incomplete compliance areas, each with a severity rating
- **Remediation plan** — ordered list of recommended actions, grouped by effort and impact
- **Evidence inventory** — a record of the documentation that was recognized and ingested

## Next Steps

- [Start the Import Wizard →](./import-wizard)
