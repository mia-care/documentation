---
id: software_items
title: Software Items
sidebar_label: Overview
---

The section allows users to view, create, and edit software items in the Software System Version. It provides an intuitive interface for managing software items, including detailed views, adding new entries, and updating existing records. Additionally, using the console, software items are also detected automatically, ensuring efficient and seamless handling of software-related data.

The Software Items are described by **General** and **Specific** properties: the former are reporting the item information, shared with all the possible instances of the item (e.g. name of Manufacturer for a SOUP-type SWI); the latter refers to properties related to the instances of the SWI, considering the location in the software system, parent and specific usage. 

## Create Software Item Design 

1. **Click the "Add software item design" Button**  
   This will open the modal to create a new Software Item.

2. **Fill in the Required Fields**  
   In the modal, you will be prompted to fill out the **Software Item Name** field.  
   When you click on this field, a dropdown will appear. In the dropdown, you can either:  
   - **Enter a new Software Item name**: Type the name you want to assign to the new Software Item and select **Create new**.
   - **Select an existing Software Item**: If a Software Item with the same name, type and version already exists in the system, you can select it from the list. This will automatically prefill the form with the details of the selected Software Item.
   Fill in the required fields as needed ([Fields description](#fields-description))

3. **Save the New Software Item**  
   Once you've completed the form, click the **"Add software item design"** button at the end of the modal to create and save the new Software Item in the system.

:::tip
You can create a new Software Item starting from an existing one. Simply select it from the dropdown, modify the `name` and other fields as needed, it will be added as a *new* instance within the current system version.
::: 

### Existing software item

If you choose a new software item name, but a software item **already exists** with the same name, type and version, the user will be prompted to choose how to proceed:

![Version Conflict Modal](img/swi_create_modal_compare.png)

The modal displays two options:

- **Existing software item**  
  Refers to the already existing Software Item and instances in the system.
  Selecting this option, no changes are applied to other instances and the current instance is linked to the existing SWI.

- **New software item**  
  Uses the current information in the modal for updating the existing SWI.
  Selecting this option, the current info in **General Properties** are propagated to the existing instances of the SWI.
  _NB. Editing the general properties of a SWI will revert the approval of the related instances and their tree structure (parents chain)_
  
## Software Items Visualization

### Table

![alt text](img/swi_table.png)
The table shows basic info of the tree of software items:

1. **+/-**: Expand/Collapse Software Item children
2. **Software Item**: Name of the Software Item, clickable if the `Implementation link` is filled.
3. **Suggestions**: Count of the suggestions, hover to show a dropdown with a number of how much is in error, in warning and in info. Clicking open drawer in the suggestion tab.
4. **SOUP**: Show a label if the Software Item `Is SOUP` is filled or the number of SOUPS children if there are
5. **Safety**: Show a label containing the Software item Safety class 
6. **Design**: Show design status and version
7. **Implementation**: Show Implementation status and detected version
8. **Vulnerabilities**: Count of the vulnerabilities found, hover to show a dropdown with a number of how much are accepted and how much are still open. Clicking open drawer in the vulnerabilities tab.
9. `Fast Action | Vulnerabilities Details | Three dots`: 
   - **Edit software item design**: Opens a modal to edit the item, following the guidelines in the ([Fields description](#fields-description)).
   - **Download**: Opens a menu to download History and/or Changelog.
   - **Delete item**: Opens a confirmation modal to delete the item.

:::warning
When **missing implementation** or **mismatch** status of SWI, the vulnerabilities of the designed SWI are not counted in the table. However, if the Repository ID is present and P4SaMD could access to pipeline information related to the implementation, the vulnerability column in table shows a warning badge if the scanning has detected at least one vulnerability in the associated repo. 
:::

**N.B.** Every edit of the software item is reflected in all instances.

### Graph  

The graph provides a visual representation of software items, displaying only the first two levels of the hierarchy. Clicking on a box open the related drawer.

![Software Item Graph](img/swi_chart.png)  

Each box contains key details about a software item, including:  
1. **Name** 
2. **Version** 
4. **Count of Suggestions** (shown only if greater than 0)  
3. **Approval Status**
5. **Implementation Status**  
6. **Software Safety Class** (shown only for medical device)

##### **Minimap**  
- The minimap (bottom-right corner) provides an overview of the entire graph, helping users navigate large structures efficiently.  

##### **Caption (Legend)**  
- Located in the top-left corner, the caption explains the different symbols and colors used in the graph, see **Status** of [Software Item States and Related Actions](#software-item-states-and-related-actions) for more infos.

##### **Actions**  
- **Zoom In (+):** Increases the zoom level for a closer view of details.  
- **Zoom Out (-):** Decreases the zoom level for a broader view.  
- **Fit View:** Adjusts the graph to fit within the visible area, ensuring all elements are displayed properly.  


## Software Item States and Related Actions

Depending on the status of the software items, several fast actions are available:

| Status | Button | Description | Action |
|:-------------:|:--------:|-----------|-----------|
|![alt text](img/swi_ok.png)|  |The software item is in correct status |
|![alt text](img/swi_missing_approval.png)|![alt text](img/swi_approve_btn.png)|The Software Item should be approved|Approve the item, if `SOUP` open a modal to fill required fields|
|![alt text](img/swi_missing_version.png)|![alt text](img/swi_tag_btn.png)|Project \| Service need to be tagged |Redirect to console to create a tag|
|![alt text](img/swi_invalid_version.png)|![alt text](img/swi_create_tag_btn.png)|Version is not following the semantic versioning |Redirect to console to edit a tag|
|![alt text](img/swi_missing_implementation.png)|![alt text](img/swi_create_project_btn.png) ![alt text](img/swi_create_service_btn.png)|The Software Item is not implemented in the console  |Redirect to console create Project \| Service|
|![alt text](img/swi_missing_design.png)|![alt text](img/swi_create_btn.png)|A Software Item was detected but not designed | Open modal to create a Software Item, If a design for a Software Item with the same name and version already exists, open modal to suggest duplicating|
|![alt text](img/swi_version_unmatched.png)|        |Versions designed and detected are not matched| |
|![alt text](img/swi_undetectable.png)|        |Software Item can't be detected| |

## Software Item Drawer

Clicking on a row or the specific button will open a navigable drawer.

From here, you can approve or disapprove a Software Item. <br/>Additionally, all the actions available from the menu inside the table are accessible here as well, just click on the three dots icon in the top right corner.

This is divided into multiple tabs:
- **Detail**: Displays all the fields entered ([Fields description](#fields-description)) for the Software Item.
- **Traceability**: Shows the linked issues (Requirements, Risks, Integration Tests, Changes), which are clickable.
- **Suggestions**: Displays a list of suggestions, if any, to ensure the Software Item meets the reference standards.
- **Vulnerabilities**: Displays a list of vulnerabilities, if any.

| # | Reference Requirement | Title | Description |
|-----|-------|-----------|----------|
| 1 |[IEC 62304 **5.3.1**] Transform software requirements into an ARCHITECTURE | Missing architecture reference | Each Software Item of class B or C must include a reference to its architecture. |
| 2 |[IEC 62304 **5.3.2**] Develop an ARCHITECTURE for the interfaces of SOFTWARE ITEMS | Missing interface architecture reference | Each Software Item of class B and class C must include a reference to the architecture of its interfaces. |
| 3 |[IEC 62304 **5.3.3**] Specify functional and performance requirements of SOUP item | Missing functional or performance requirements | Each SOUP Software Item of class B or C must include specified functional and performance requirements necessary for its intended use. |
| 4 |[IEC 62304 **5.3.4**] Specify SYSTEM hardware and software required by SOUP item | Missing system hardware and software requirements | Each SOUP Software Item of class B or C must include the system hardware and software necessary to support the proper operation of the item. |
| 5 |[IEC 62304 **5.4.2**] Develop detailed design for each SOFTWARE UNIT | Missing detailed design | Each Software Item of class C must have a detailed design documented to allow correct implementation. |
| 6 |[IEC 62304 **5.4.3**] Develop detailed design for interfaces | Missing detailed design for interfaces |Each Software Item of class C must include a detailed design for its interfaces with external components and other Software Units |
| 7 |[IEC 62304 **5.6.1**] Integrate SOFTWARE UNITS <br /> [IEC 62304 **5.6.2**] Verify software integration <br /> [IEC 62304 **5.6.3**] Software integration testing <br /> [IEC 62304 **5.6.4**] Software integration testing content <br /> [IEC 62304 **5.6.7**] Integration test record contents| Missing integration tests | Each Software Item of class B or C must be associated with at least one integration test. |
| 8 |[IEC 62304 **8.1.2**] Identify SOUP | Missing Manufacturer in SOUP Software Item | Each SOUP Software Item must include the manufacturer's information. |
| 9 |[IEC 62304 **7.1.1**] Identify SOFTWARE ITEMS that could contribute to a hazardous situation <br /> [IEC 62304 **7.1.2**] Identify potential causes of contribution to a hazardous situation | Missing Risks | Each Software Item of class B or C must be associated with at least one risk |
| 10 | [EU AI Act / FDA / GMLP] Transparency & Explainability Requirement | Missing transparency details | AI-based Software Items must include transparency details such as the AI component toggle and a link to the model card or transparency documentation. |
| 11 | [GMLP] Data Bias Mitigation Requirement | Missing bias mitigation strategy | AI-based Software Items should document strategies for ensuring data diversity and mitigating AI bias. |
| 12 | [EU AI Act / FDA / GMLP] Technical Documentation Requirement | Missing technical documentation | AI-based Software Items must include a link to technical documentation that details the model’s performance, limitations, and integration. |
| 13 | [EU AI Act / GMLP] Model Location & Data Treatment Requirement | Missing model location details | AI-based Software Items must specify where the AI model and its data are hosted. |
| 14 | [EU AI Act / FDA / GMLP] Risk Classification Requirement | Missing risk classification | AI-based Software Items must have a risk classification based on defined risk levels. |
| 15 | [EU AI Act / FDA / GMLP] Risk Control Measures Documentation | Missing risk control rationale | AI-based Software Items must include a documented rationale and control measures for risk mitigation. |
| 16 | - | Missing repository ID | ID of the repository associated with the Software Item is needed to correctly detect software item implementation. |
| 17 |[IEC 62304 **4.3**] | Undocumented SWI Reclassification | Please justify the re-classification of the SWI with a rationale in the dedicated classification reason field, describing how the new SOFTWARE ITEMS are segregated so that they may be classified separately. |
| 18 |[IEC 62304 **4.3**] | Possible Software Item Misclassification | This software item has a safety class lower than at least one of its children. |
| 19 |[IEC 62304 **5.3.1**] | Missing SWI Design | When a SWI is included in the software system, if detected but the design is missing, the user shall be warned. |

:::warning
If a Software Item is not designed but detected by the system, a warning will appear, and you can proceed with its creation.
:::

## Edit Software Item

When the **Edit** button is clicked, an edit modal will appear:

![Edit Modal](img/swi_edit_modal.png)

### Behavior of Edits by Tab

#### Specific Properties Tab

Changes made **exclusively** in the **Specific Properties** tab will affect **only the current instance** of the software item.

#### General Properties Tab and Switches

Changes made in the **General Properties** tab and/or to the switches:

- **SOUP**
- **Based on AI technology**

will be **propagated to all software items** that share this instance.  
This will cause **disapproval** of their associated tree structures (parents).

### Special Case: Version Change

When changing the **version** of a software item, there are two possible outcomes:

####  1. No Existing Software Item with matching version

If **no Software Item exists** with the same name and type and the new version:

- The current instance under modification will be **disassociated** from the existing Software Item.
- A **new SWI** will be created.
- Other existing instances of the starting SWI remain **unaffected**.

#### 2. A Software Item Already Exists with the New Version

If a Software Item **already exists** with the same name and type and the new version, the user will be prompted to choose how to proceed:

![Version Conflict Modal](img/swi_edit_modal_compare.png)

The modal displays two options:

- **Existing software item**  
  Refers to the already existing Software Item and instances in the system.
  Selecting this option, no changes are applied to other instances and the current instance is linked to the existing SWI.

- **New software item**  
  Uses the current information in the modal for updating the existing SWI.
  Selecting this option, the current info in **General Properties** are propagated to the existing instances of the SWI.
  _NB. Editing the general properties of SWI will revert the approval of the related instances and their tree structure (parents chain)_
  

:::warning
 Be mindful of which tab you're editing. Only changes in Specific Properties are instance-specific. All others may have broader implications.
:::


## Fields description

- **Software item name**:  Name of Software Item.
   - *Only for creation*
- **Version**: Version of Software Item.
   - *Only for creation*
   - Should follow **semantic versioning** format.
- **Implementation link**: Link to the implementation of the Software Item.
- **Resource type**: Type of the Software Item (project, service, library, or other).
   - *Only for creation*
   - Selectable from the following options: `Project`, `Service`, `Library`, `Other`.
- **Parent software item**: Select the parent Software Items.
   - *Only for creation*
   - Editable only if the Software Item type is `Service` or `Library`.
   - Allows the selection of multiple parent Software Items.
- **Description**: Description of the Software Item.
- **Is medical device**: Flag indicating whether the Software Item is a medical device.
- **Is SOUP**: Flag indicating whether the Software Item is a "Software of Unknown Provenance" (SOUP).
    - Selectable only if the Software Item **IS NOT** of type `Project`.
- **Is AI**: Flag indicating whether the Software Item uses AI-based technologies.
- **Repository ID**: ID of the repository associated with the Software Item.
- **Repository link**: Link to the repository of the Software Item.
- **Architecture reference**: Link to the architecture reference of the Software Item.
- **Interface architecture reference**: Link to the interface architecture reference of the Software Item.
- **Linked requirements**: Requirements associated with the Software Item.
    - Requirements are defined in the provider application.
- **Linked integration tests**: Integration tests associated with the Software Item.
    - Integration tests are defined in the provider application.
- **Linked risks**: Risks associated with the Software Item.
    - Risks are defined in the provider application.
- **Linked changes**: Applicable regulations for the Software Item.
    - Changes are defined in the provider application.

### Medical device

If you select **Is medical device**, the following additional fields are available:

- **Software safety classification**: Safety class of the medical device.
   - Available options: `A`, `B`, `C`.
- **Software safety classification reason**: The rationale behind the safety classification of the medical device.
- **Detailed design reference**: Link to the detailed design documentation.
- **Detailed interface architecture reference**: Link to the detailed interface architecture documentation.

### SOUP

If you select **Is SOUP**, the following additional fields are available:

- **Manufacturer**: Name of the Software Item manufacturer.
- **License**: License of the Software Item.
- **Required hardware and software**: Hardware and Software required for the Software Item.
- **Verification reason**: Reason for verifying the Software Item.

### AI

If you select **Is AI**, the following additional fields are available:

- **AI type**: type of AI technology (`Agent`, `Model`).
- **AI Bias Mitigation Strategies**: measures adopted to address and mitigate AI bias risks.
- **AI Transparency & Explainability**: measures adopted to ensure AI transparency and accountability.
- **Technical Documentation Link/Reference**: link or reference to technical documentation about the model.
- **AI Model/Data Hosting Location**: location of AI hosting and data processing facilities. 
- **AI Risk Classification**: risk level of AI system (`Minimal`, `Limited`, `High Risk`, `Unacceptable`)
- **AI Risk Classification description**: additional information about the risk level for the AI system.

:::warning
To **Approve** a Software Item all his children should be approved.
:::

## Software Items settings 

P4SaMD detects the implementation of the Software Items, considering all the Projects belonging to your Company by default. You can customize your Software System, excluding detected Projects so that they and all of their SWI children will not appear in the SWI table and will not be taken into account in the Software System documentation. It applies, for example, on test/POC projects which are not part of your software product.

![alt text](img/system_versions_setting.png)

The settings modal is available in the SWI tab, for each version when they are not released

1. **Click the "Settings" Button**  
   This will open the modal to customize the Software System at the Project level.

2. **Customize the Software System** 
   In the modal, select/deselect the Projects to define your Software System.

3. **Save the customized Software System**  
   Saving customization, the changes will be immediately apply on your Software System.

:::info
   - The exclusion of a Project is only possible when there is no associated design.
   - The customization is only valid for the selected Software System Version
::: 
