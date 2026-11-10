---
id: risks
title: Risk Management
sidebar_label: Risks
---

# Risk Management

The **Risk Analysis** section of P4SaMD is where you identify, assess, mitigate, and track risks for your medical device software in compliance with ISO 14971. Risks are managed natively inside the platform, so no external tool is required. Open it by clicking **Risk Analysis** in the left project sidebar.

## Creating a Risk

Click **+ New Risk** at the top of the risk list, then provide:

- **Title**: a concise description of the risk
- **Hazard**: the source of potential harm
- **Harm**: the damage that could result (e.g., patient injury, data loss)
- **Harm category**: one of Patient, Operator, Environment, or Device
- **Initial severity**: rated S1 (negligible) through S5 (catastrophic)
- **Initial probability**: rated P1 (improbable) through P5 (frequent)

Optionally, add the **sequence of events** (the causal chain from hazard to harm), the **hazardous situation** (the specific scenario in which harm could occur), and an **assignee** responsible for the risk.

On save, the risk appears in the list with an automatically assigned display ID (e.g., `RSK-0001`) and an **Identified** status.

## ISO 14971 Risk Matrix

P4SaMD automatically computes the **initial risk level** based on the severity × probability combination using the ISO 14971:2019 "Option A" 5×5 risk matrix:

| Risk Level | Meaning |
|---|---|
| **Unacceptable** | Risk must be mitigated before the device can proceed |
| **Tolerable** | Risk is tolerable only if reduced as low as reasonably practicable |
| **Acceptable** | Risk is within acceptable limits |

:::note Terminology update in v3.5.0
This zone was previously labelled **ALARP**. As of P4SaMD v3.5.0, it is called **Tolerable** everywhere in the platform, and the matrix's severity/probability boundaries were realigned to the ISO 14971 "Option A" matrix. This was a genuine reclassification, not just a rename: some combinations that were previously **Unacceptable** are now **Tolerable**, including Severity 5/Probability 1, Severity 4/Probability 2, and Severity 3/Probability 3. See the [v3.5.0 release notes](../release-notes/v3.0.mdx#p4samd-v350-26-august-2026) for details. You can customize how the three zone names are displayed for your project from the Project Customization settings; this does not affect how risk levels are computed.
:::

## Risk Lifecycle

Each risk progresses through the following statuses:

```
Identified → Analyzed → Mitigation Required → Under Control → Verified
                 ↓              ↓                   ↓            ↓
              Accepted       Accepted            Accepted     Accepted
                 ↓              ↓                   ↓            ↓
              Transferred   Transferred         Transferred  Transferred
```

| Status | Description | Available Actions |
|--------|-------------|-------------------|
| **Identified** | Newly created risk, not yet fully analyzed | Analyze |
| **Analyzed** | Risk has been evaluated; risk level computed | Start Mitigation, Accept, Transfer |
| **Mitigation Required** | Risk requires control measures to reduce | Control (mark mitigated), Accept, Transfer |
| **Under Control** | Control measures are in place | Verify, Accept, Transfer |
| **Verified** | All control measures verified effective | Accept |
| **Accepted** | Risk formally accepted with documented rationale | None (terminal) |
| **Transferred** | Risk responsibility transferred with rationale | None (terminal) |
| **Deprecated** | Risk no longer applicable | None (terminal) |

**Accepting** or **transferring** a risk requires a mandatory rationale explaining the decision. **Verifying** a risk requires all linked control measures to be verified first.

## Control Measures

Control measures are the mitigations you put in place to reduce a risk. Add them to any risk from the risk detail view. Mark each control measure as verified once its effectiveness is confirmed.

After control measures are applied, you can record **residual severity** and **residual probability** values on the risk to document the reduced risk level.

## Risk List and Filtering

The risk list shows all risks in the active workspace version. The summary columns are display ID, hazard, harm, severity, probability, risk level, residual risk level, status, and assignee.

**Summary cards** at the top show:
- **Total** risks in the version
- **Unacceptable** risk count
- **Tolerable** risk count
- **Under Control** risk count

### Filters

Filter the risk list by:
- Harm category (Patient, Operator, Environment, Device)
- Severity level (S1 to S5)
- Probability level (P1 to P5)
- Initial risk level (Unacceptable, Tolerable, Acceptable)
- Residual risk level
- Status
- Assignee

### Search and Sort

Use the search bar to find risks by title or display ID. Sort by sequence number, last updated date, severity, probability, or risk level.

## Traceability

From the risk detail view, you can see and manage links to:
- **Requirements**: which requirements this risk relates to
- **Test cases**: verification evidence for control measures
- **History**: a full audit trail of every change, transition, and rationale

## Import and Export

**Import** risks from a CSV file for bulk onboarding. **Export** the current risk register, with active filters applied, for external reports or regulatory submissions.

## Deprecating a Risk

If a risk is no longer applicable (e.g., the related feature was removed), use the **Deprecate** action from the risk detail view. A rationale is mandatory. Deprecated risks remain in the system for audit traceability but are excluded from active risk counts.
