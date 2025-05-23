---
id: ehr
title: Electronic Health Record
sidebar_label: Electronic Health Record
---

# 🏥 EHR Module – Electronic Health Record

## Overview

The **Electronic Health Record (EHR)** module serves as the central hub for managing patient clinical data within the Health Composable Platform (HCP).  
It provides a unified, structured, and interoperable system that aggregates information from various sources, ensuring a comprehensive view of each patient's medical history.  
Designed with modularity and scalability in mind, the EHR module facilitates seamless integration with other healthcare systems and standards, notably HL7 FHIR.

## Key Features

- **Centralized Data Management**: Consolidates patient information from multiple systems into a single, accessible record.
- **Standards Compliance**: Supports healthcare interoperability standards like FHIR (Fast Healthcare Interoperability Resources).
- **Real-Time Updates**: Ensures that patient data is current, facilitating timely clinical decisions.
- **Role-Based Access Control**: Maintains data security by restricting access based on user roles.
- **Audit Trails**: Keeps detailed logs of data access and modifications for compliance and monitoring purposes.

## Microservices Architecture

The EHR module is composed of several microservices that work in tandem to provide robust and flexible healthcare data management:

### 1. Form Service Backend

The **Form Service Backend** acts as the backend-for-frontend (BFF) for the form management system.  
It handles API requests related to form creation, retrieval, submission, and versioning.

**Key Capabilities:**

- Form Schema Management: Create, update, and retrieve form templates.
- Form Submission Handling: Manage user-submitted data, including drafts and final submissions.
- Versioning Support: Maintain multiple versions of form data for historical reference.
- Export Functionality: Export form data in CSV format for reporting and analysis.

**Documentation:**

- [Form Service Backend Overview](https://docs.mia-platform.eu/docs/runtime_suite/form-service-backend/overview)
- [Form Service Backend Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/form-service-backend/configuration)

### 2. Form Service Frontend

The **Form Service Frontend** provides a user interface for building and visualizing forms.  
It leverages [formio.js](https://formio.github.io/formio.js/) to offer a customizable form builder and renderer.

**Key Capabilities:**

- Form Builder: Allows users to design custom forms using a drag-and-drop interface.
- Form Visualizer: Enables users to fill out and submit forms.
- Styling Support: Customize the appearance of forms to match organizational branding.
- Integration Options: Can be integrated as a micro-frontend or within a headless CMS.

**Documentation:**

- [Form Service Frontend Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/form-service-frontend/overview)
- [Form Service Frontend Configuration](https://docs.mia-platform.eu/docs/runtime_suite/form-service-frontend/configuration)

### 3. FHIR Adapter

The **FHIR Adapter** enables interoperability between systems that implement the FHIR standard and those that do not.  
It allows for the saving and retrieval of FHIR data from a FHIR Server using non-standard JSON payloads, utilizing configurations to map fields between non-standard JSON and standard FHIR JSON formats.

**Key Capabilities:**

- Data Mapping: Translate non-standard JSON to FHIR-compliant JSON and vice versa.
- CRUD Operations: Perform create, read, update, and delete operations on FHIR resources.
- Versioning and History: Access historical versions of FHIR resources.
- File Management: Upload and download files associated with FHIR resources.

**Documentation:**

- [FHIR Adapter Overview and Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/fhir-adapter/overview_and_usage)
- [FHIR Adapter Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/fhir-adapter/configuration)
- [FHIR Adapter File Management](https://docs.mia-platform.eu/docs/next/runtime_suite/fhir-adapter/files_management)

### 4. Mia FHIR Server

The **Mia FHIR Server** is a microservice that fully implements the FHIR standard, based on HAPI FHIR, an open-source Java implementation.  
It is responsible for exposing, storing, and validating FHIR resources as defined by the standard.  
The server supports HL7 FHIR releases DSTU3, R4, and R5.

**Key Capabilities:**

- FHIR Compliance: Full support for FHIR standards and resources.
- RESTful API: Expose FHIR resources via RESTful APIs.
- Web Application and Swagger Interface: User-friendly interfaces for interacting with FHIR resources.
- Versioning and History: Access to specific versions and history of FHIR resources.

**Documentation:**

- [Mia FHIR Server Overview and Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/mia-fhir-server/overview_and_usage)
- [Mia FHIR Server Configuration](https://docs.mia-platform.eu/docs/runtime_suite/mia-fhir-server/configuration)

## Configurability

The EHR module's form services are highly configurable, allowing healthcare providers to tailor forms to specific clinical needs.

**Custom Form Creation:**

- **Anamnesis Forms**: Collect detailed patient medical histories.
- **Therapy Monitoring**: Track ongoing treatments and patient responses.
- **Assessment Tools**: Implement standardized health assessments and scales.

**Form Assignments:**

Forms can be assigned to specific users or groups, ensuring that only authorized personnel can access and submit sensitive information.

**Styling and Theming:**

Customize the look and feel of forms to align with organizational branding, enhancing user experience and consistency.

**Version Control:**

Maintain multiple versions of forms and submissions, enabling historical data analysis and compliance with regulatory requirements.

## Integration and Extensibility

The EHR module is designed for seamless integration with other HCP modules and external systems:

- **Interoperability**: Supports integration with national and regional health information systems.
- **API Access**: Provides RESTful APIs for data exchange and system interoperability.
- **Modular Design**: Can be extended with additional microservices to meet evolving healthcare needs.

## Conclusion

The EHR module of the Health Composable Platform offers a flexible, secure, and comprehensive solution for managing patient health records.  
Its modular architecture, combined with powerful form management capabilities and FHIR integration, empowers healthcare providers to deliver personalized and coordinated care.

For more detailed information, refer to the official Mia-Platform documentation:

- [Form Service Backend Documentation](https://docs.mia-platform.eu/docs/runtime_suite/form-service-backend/overview)
- [Form Service Frontend Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite/form-service-frontend/overview)
- [FHIR Adapter Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite/fhir-adapter/overview_and_usage)
- [Mia FHIR Server Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite/mia-fhir-server/overview_and_usage)

