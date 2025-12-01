---
id: document_engine
title: Documentation Engine
sidebar_label: Documentation Engine
---

# Documentation engine

## Overview
This module provides a centralized documentation management system accessible to team members. It enables users to create, manage, and edit documentation templates in `Markdown` and `Docx` format.

![Documentation Engine Table](./img/documentation_engine_table.png)

## Features

### Template Management
- **Create**: Generate templates to extend the default template set
- **Edit**: Modify templates in `Markdown` and `Docx` format
- **Publish**: Make templates available for use by changing status from `Draft` to `Published`
- **Delete**: Delete templates

For each template the following informations are available:

- **Title**:  Changeable title for the template
- **Revision**: Automatic version tracking for the published templates.
- **Last Edit Date/Time**: Timestamp of the most recent modification
- **Editor**: User who performed the last edit
- **Status**: Template state indicator
    - `Draft`: Template in progress
    - `Published`: Template available for use
- **Actions**: Available actions per template row (based on user permissions):
    - `Edit/View`: Modify or view template content
    - `Download`: Export template file
    - `Delete`: Remove template from system

### Image and Data Integration

**Data Interpolation:**
Variables from the variable list can be inserted into templates using copy-paste or the specific syntax format. These variables are automatically populated with actual data when generating the final report.

**Image Integration:**
Software Item design images can be downloaded from the overview page. To include images in your document:
1. Insert a placeholder in your template where the image should appear
2. Generate and download the report
3. Manually add the downloaded image to the placeholder location


#### Automatic Data Generation

The documentation engine supports dynamic content generation using predefined variables. Variables must follow the syntax: `{{CATEGORY.variable_name}}`.

**Generating Lists and Tables:**

To display specific data points, use the category followed by the variable name:
```
{{CATEGORY.variable_name}}
```

To generate tables or lists with all available data (e.g., all risks for a specific version), use loops:
```
{{#each CATEGORY}}
{{variable_name}}
{{/each}}
```

For categories with nested data, append the sub-variable name after the parent variable.

**Available Categories:**
- `BUG`
- `CHANGE_REQUEST`
- `CURRENT_USER`
- `GENERAL`
- `REQUIREMENT`
- `RISK`
- `SOFTWARE_ITEM`
- `SYSTEM_VERSION`
- `TEST`
- `TEST_EXECUTION`
- `TEST_SUITE`

### Revision Management

The system automatically maintains revision history for each published template without requiring manual intervention. When a template is published, the revision number increments automatically with each subsequent modification and save operation.

**Key Features:**
- Automatic version increment on save for published templates
- Complete change history tracking
- Ability to restore previous revisions

### Error Management

The editor includes built-in validation that alerts users to syntax errors in variables or loop structures.


### Report and Template Generation

**Template Download:**
Raw templates can be downloaded directly from the template table without data interpolation.

**Report Generation:**
Once a template is published, it becomes available in the reports list on the overview tab. Published templates can be used to generate reports with interpolated data.

**Supported Formats:**
Both templates and reports are available in `Markdown` and `Docx` formats.
