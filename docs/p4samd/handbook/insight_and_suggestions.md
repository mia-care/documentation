---
id: insight_and_suggestions
title: Insight & Suggestions
sidebar_label: Insight and Suggestions
---

P4SaMD ensures compliance with **IEC 62304** rules by analyzing Software Items, Requirements, Risks, and Tests.<br/> It detects inconsistencies and suggests modifications to improve compliance and reduce risks.

## Overview

Each suggestion includes:
- **Gravity Check**: 
  - **<span style={{color:'rgba(255, 84, 83, 1)'}}>Error</span>**: Actions that must be performed;
  - **<span style={{color:'rgba(246, 143, 31, 1)'}}>Warning</span>**:  Recommended actions to improve compliance;
  - **<span style={{color:'rgba(24, 144, 255, 1)'}}>Info</span>**: Optional actions to enhance software quality;
- **Issue Resolution**: The actions needed to resolve the detected issue;
- **Actionable Guidance**: Instructions on what must be done;
- **Standard Reference**: The applicable IEC 62304 requirement, including the paragraph number, title, and explanation.

![Example of a warning suggestion](img/suggestion_example.png)

## Suggestions Rules

### Software Items

For Software Items suggestions, visit the [Software Items](./software_items.md#software-item-drawer) page.

### Requirements

| IEC 62304 Reference Requirement                  | Title                                     | Description                                                       |
| ------------------------------------------------ | ----------------------------------------- | ----------------------------------------------------------------- |
| [**5.7.4**] Evaluate SOFTWARE SYSTEM testing     | Missing Tests                             | Each Requirement must be associated with at least one test.       |

### Tests

| IEC 62304 Reference Requirement                       | Title                                     | Description                                                                   |
| ----------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- |
| [**5.7.1**] Establish tests for software requirements | Test not executed                         | This test has not been executed.                                              |
| [**5.7.5**] SOFTWARE SYSTEM test record contents      | Missing Information in the Last Execution | The last execution of the manual test must include all mandatory information. |
| -                                                     | Missing Execution Mode                    | The test Execution Mode (automatic or manual) is not specified.               |

### Risks

| IEC 62304 Reference Requirement          | Title                         | Description                                                                                                                |
| ---------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [**7.2.1**] Define RISK CONTROL measures | Missing Risk Control Measures | Risks associated with Software Items of class B or C must be linked to at least one Requirement as a Risk Control Measure. |

## Suggestions Indicators  

Two types of icons can appear in the **Suggestions column** of tables:  

| Icon                                        | Meaning                                                                                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![alt text](img/suggestion_icon_cluste.png) | One or more child Software Items have suggestions.<br/> *Only for Software Items.*                                                                                        |
| ![alt text](img/suggestion_icon_number.png) | The number of suggestions for the entity.<br/> Hovering over it reveals a **clickable menu** that links to the **Suggestions Drawer** section.                             |
