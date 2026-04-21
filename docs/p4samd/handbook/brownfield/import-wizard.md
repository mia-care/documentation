---
id: import-wizard
title: Brownfield Import Wizard
sidebar_label: Import Wizard
---

This page walks you through each step of the Brownfield Import wizard.

## Before You Start

Gather the following before beginning:

- Access to your source code repository (URL or downloadable archive)
- Existing design documents, SOPs, and technical documentation
- Any existing test reports, risk analyses, or regulatory submissions
- Information about your CI/CD pipeline and build toolchain
- The regulatory framework you are targeting (EU MDR, FDA, etc.) and your intended device classification

## Launching the Wizard

1. From the **Products page**, click **Import Project**.
2. The wizard opens at Step 1 — Overview.

## Step 1 — Overview

This step introduces the import process. Review the summary of what P4SaMD needs from you and what the evaluation will produce. When ready, click **Get Started** to proceed.

## Step 2 — Use Case

Select the primary reason for your compliance assessment. The use case helps P4SaMD focus the gap analysis on what matters most for your situation.

Available use cases include:

- **New certification** — preparing a new product for first regulatory submission
- **Market expansion** — extending an existing certification to a new region (e.g., US → EU)
- **Acquisition / due diligence** — assessing a product you are acquiring
- **Continuous compliance** — ongoing compliance monitoring for a product already on the market
- **Legacy remediation** — bringing an existing non-compliant product into conformance

Click **Next** after selecting a use case.

## Step 3 — Target Definition

Define the compliance target for the analysis:

| Field | Description |
|-------|-------------|
| **Regulatory Framework** | The primary framework to assess against (EU MDR, FDA 510(k), FDA PMA, etc.) |
| **Device Class** | Risk classification: Class I, IIa, IIb (EU) or Class I, II, III (FDA) |
| **Software Safety Class** | IEC 62304 classification: Class A, B, or C |
| **Intended Use** | Plain-language statement of the software's intended medical purpose |
| **Target Market Region** | The geographic markets where the device will be placed |

These inputs shape the specific regulatory requirements that P4SaMD checks your project against.

## Step 4 — Technical Assets

Upload or provide references to the technical artifacts that make up your software product:

| Asset Type | What to Provide |
|------------|----------------|
| **Source Repository** | Repository URL (GitHub, GitLab, etc.) or a compressed archive of the codebase |
| **CI/CD Configuration** | Pipeline definition files (e.g., `.github/workflows`, `Jenkinsfile`, `.gitlab-ci.yml`) |
| **Build Artifacts** | Compiled binaries, container images, or package manifests if available |
| **Dependency Manifest** | `package.json`, `Cargo.toml`, `go.mod`, `requirements.txt`, or equivalent |
| **Infrastructure Configuration** | Kubernetes manifests, Helm charts, Docker Compose files if applicable |

You can upload multiple files or archives. Supported formats: `.zip`, `.tar.gz`, `.json`, `.yaml`, `.toml`, `.lock`.

:::tip
You do not need to provide all asset types. P4SaMD adjusts the analysis based on what is available. The more you provide, the more complete the evaluation.
:::

## Step 5 — Documentation

Upload existing compliance documentation:

| Document Type | Examples |
|--------------|---------|
| **Design documents** | Software Design Specification, Architecture Description |
| **Risk analysis** | Risk Management File, FMEA, Hazard Analysis |
| **Test evidence** | Test Plans, Test Reports, Test Summary Reports |
| **Quality records** | SOPs, Work Instructions, Change Records |
| **Previous regulatory submissions** | Technical File, 510(k) summary, Declarations of Conformity |

Supported file formats: PDF, Word (.docx), Markdown, plain text.

## Step 6 — Summary

Review all the information you have provided:

- Use case and target definition
- List of uploaded technical assets (with file names and sizes)
- List of uploaded documents

If anything needs to be corrected, click the **Back** button to return to the relevant step.

When satisfied, click **Submit for Evaluation**. P4SaMD begins processing your uploaded materials.

## After Submission

You are redirected to the **Evaluation page** for your session. This page shows:

- Current processing status (Queued → Processing → Complete)
- A progress indicator for each analysis phase
- Final results once processing is complete

Processing can take from a few minutes to several hours depending on the volume of uploaded content. You can leave the page and return later — the evaluation continues in the background.

## Resuming a Saved Session

If you saved and exited the wizard before completing it:

1. Go to the **Products page** and click **Import Project**.
2. If a saved session exists, P4SaMD shows a prompt to resume or discard it.
3. Click **Resume** to continue from where you left off.

## Next Steps

- [Understand the evaluation results →](./overview)
- [Create a new project after import →](../products)
