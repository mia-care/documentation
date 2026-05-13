---
id: risks
title: Risk Management
sidebar_label: Risks
---

# Risk Management

The **Risk Analysis** section of P4SaMD enables you to identify, assess, mitigate, and track risks associated with your medical device software in compliance with ISO 14971. Risks are managed natively inside the platform — no external tool is required. Open it by clicking **Risk Analysis** in the left project sidebar.

## Creating a Risk

To add a new risk, click **+ New Risk** at the top of the risk list. You will be prompted to provide:

- **Title** — a concise description of the risk
- **Hazard** — the source of potential harm
- **Harm** — the damage that could result (e.g., patient injury, data loss)
- **Harm category** — one of: Patient, Operator, Environment, or Device
- **Initial severity** — rated S1 (negligible) through S5 (catastrophic)
- **Initial probability** — rated P1 (improbable) through P5 (frequent)

You can also optionally provide the **sequence of events** (the causal chain leading from hazard to harm), the **hazardous situation** (the specific scenario in which harm could occur), and an **assignee** responsible for managing this risk.

After saving, the risk appears in the list with an automatically assigned display ID (e.g., `RSK-0001`) and an **Identified** status.

## ISO 14971 Risk Matrix

P4SaMD automatically computes the **initial risk level** based on the severity × probability combination using a 5×5 risk matrix aligned with ISO 14971:

| Risk Level | Meaning |
|---|---|
| **Unacceptable** | Risk must be mitigated before the device can proceed |
| **ALARP** | Risk is tolerable only if reduced as low as reasonably practicable |
| **Acceptable** | Risk is within acceptable limits |

The matrix classification:
- **Unacceptable**: Any risk with S5 severity; S4 with P2–P5; S3 with P3–P5
- **ALARP**: S4/P1; S3/P1–P2; S2/P3–P5; S1/P5
- **Acceptable**: All remaining combinations

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
| **Accepted** | Risk formally accepted with documented rationale | — (terminal) |
| **Transferred** | Risk responsibility transferred with rationale | — (terminal) |
| **Deprecated** | Risk no longer applicable | — (terminal) |

**Accepting** or **transferring** a risk requires a mandatory rationale explaining the decision. **Verifying** a risk requires that all linked control measures have been verified first.

## Control Measures

Control measures are the mitigations you put in place to reduce a risk. You can add control measures to any risk from the risk detail view. Each control measure can be marked as verified once its effectiveness has been confirmed.

After control measures are applied, you can record **residual severity** and **residual probability** values on the risk to document the reduced risk level.

## Risk List and Filtering

The risk list displays all risks in the active workspace version with summary columns showing the display ID, hazard, harm, severity, probability, risk level, residual risk level, status, and assignee.

**Summary cards** at the top provide an at-a-glance view:
- **Total** risks in the version
- **Unacceptable** risk count
- **ALARP** risk count
- **Under Control** risk count

### Filters

You can filter the risk list by:
- Harm category (Patient, Operator, Environment, Device)
- Severity level (S1–S5)
- Probability level (P1–P5)
- Initial risk level (Unacceptable, ALARP, Acceptable)
- Residual risk level
- Status
- Assignee

### Search and Sort

Use the search bar to find risks by title or display ID. Sorting is available by sequence number, last updated date, severity, probability, or risk level.

## Traceability

From the risk detail view, you can see and manage links to:
- **Requirements** — which requirements this risk relates to
- **Test cases** — verification evidence for control measures
- **History** — a full audit trail of every change, transition, and rationale

## Import and Export

You can **import** risks from a CSV file for bulk onboarding and **export** the current risk register (with active filters applied) for use in external reports or regulatory submissions.

## Deprecating a Risk

If a risk is no longer applicable (e.g., the related feature was removed), use the **Deprecate** action from the risk detail view. A mandatory rationale is required. Deprecated risks remain in the system for audit traceability but are excluded from active risk counts.
