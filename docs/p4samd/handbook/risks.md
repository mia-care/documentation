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
- **Initial severity**: rated from S1 (lowest) up to the highest level of your product's [risk scale](#risk-scale). The default scale goes from S1 (negligible) to S5 (catastrophic)
- **Initial probability**: rated from P1 (lowest) up to the highest level of your product's risk scale. The default scale goes from P1 (improbable) to P5 (frequent)

Optionally, add the **sequence of events** (the causal chain from hazard to harm), the **hazardous situation** (the specific scenario in which harm could occur), and an **assignee** responsible for the risk.

On save, the risk appears in the list with an automatically assigned display ID (e.g., `RSK-0001`) and an **Identified** status.

## ISO 14971 Risk Matrix

P4SaMD automatically computes the **initial risk level** based on the severity × probability combination. New products start with the ISO 14971:2019 "Option A" 5×5 risk matrix, which you can change for your product (see [Risk scale](#risk-scale)):

| Risk Level | Meaning |
|---|---|
| **Unacceptable** | Risk must be mitigated before the device can proceed |
| **Tolerable** | Risk is tolerable only if reduced as low as reasonably practicable |
| **Acceptable** | Risk is within acceptable limits |

:::note Terminology update in v3.5.0
This zone was previously labelled **ALARP**. As of P4SaMD v3.5.0, it is called **Tolerable** everywhere in the platform, and the matrix's severity/probability boundaries were realigned to the ISO 14971 "Option A" matrix. This was a genuine reclassification, not just a rename: some combinations that were previously **Unacceptable** are now **Tolerable**, including Severity 5/Probability 1, Severity 4/Probability 2, and Severity 3/Probability 3. See the [v3.5.0 release notes](../release-notes/v3.0.mdx#p4samd-v350-26-august-2026) for details. You can customize how the three zone names are displayed for your project from the Project Customization settings; this does not affect how risk levels are computed.
:::

## Risk Scale

Every product has its own risk scale. A new product starts with the default scale: five severity levels (Negligible, Minor, Serious, Critical, Catastrophic) and five probability levels (Improbable, Remote, Occasional, Probable, Frequent), with the zones of the ISO 14971 "Option A" matrix. You can adapt it to your own risk policy.

### Viewing the scale

Open **Configuration → Product** and look at the **Risk scale** card in the **Details** tab. Every member can see it. Every risk form, matrix, badge and filter in the product uses the product's levels and their names.

### Changing the scale

Only an **Admin** can change the scale, at any time.

1. In the **Risk scale** card, set the number of severity levels and probability levels, from 2 to 10 each. You cannot go below the number of levels your existing risks already use. The card shows that minimum and the risks that set it.
2. Give each level a name, up to 40 characters.
3. Click a cell of the matrix to change its zone, or restore the proposed matrix.
4. Click save. A review step lists the risks whose level would change and highlights the ones that get worse.
5. Enter a **rationale**. It is mandatory when the product already has risks.
6. Confirm.

Every change is recorded with its rationale in the product's **History** tab.

P4SaMD warns you when the scale looks unusual, for example when the most severe cell is acceptable or when most cells are acceptable. The warnings are advice and do not block you.

### Risks outside the current scale

A released risk whose stored severity or probability falls outside the current scale keeps its stored values and level. It is shown with grey badges and marked as outside the scale. When you create or edit a risk, or import risks from a CSV file, a value outside the scale is refused with a message naming the allowed levels.

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
- Severity level (the levels of your product's risk scale)
- Probability level (the levels of your product's risk scale)
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
