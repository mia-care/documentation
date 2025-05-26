---
id: therapy-and-monitoring
title: Therapy and Monitoring
sidebar_label: Therapy and Monitoring
---

# 🩺 Therapy and Monitoring Module

## Overview

The **Therapy and Monitoring Module** is a core component of the Health Composable Platform (HCP) designed to manage patient therapies and monitor health conditions.  
It enables healthcare professionals to define therapy plans, monitor patient adherence and compliance, and integrate data from medical and wearable devices such as Apple Watch.  
This module ensures a comprehensive approach to patient care by combining therapy management with real-time health data monitoring.

## Key Features

- **Therapy Management**: Define and manage therapy plans tailored to individual patient needs.
- **Monitoring Plans**: Set up monitoring protocols to track specific health parameters.
- **Device Integration**: Collect and analyze data from medical devices and wearables.
- **Adherence and Compliance Tracking**: Monitor patient adherence to therapy schedules and compliance with prescribed activities.
- **Notifications**: Configure alerts to notify healthcare providers and patients of critical events or deviations.

## Microservices Architecture

The Therapy and Monitoring Module comprises two primary microservices that work in tandem to provide comprehensive therapy and monitoring functionalities:

### 1. Device Manager

The **Device Manager** is responsible for collecting, storing, and visualizing patient health data from medical and wearable devices.  
It supports integration with providers such as Medisanté and Apple HealthKit, enabling real-time acquisition of health data.

**Key Capabilities:**

- **Data Collection**: Acquire health data from various devices and providers.
- **Data Normalization**: Standardize health data formats for consistency and analysis.
- **Integration with Therapy and Monitoring Manager**: Forward relevant health data to the Therapy and Monitoring Manager for inclusion in monitoring plans.

**Documentation:**

- [Device Manager Overview](https://docs.mia-platform.eu/docs/runtime_suite/device-manager/overview)
- [Device Manager Usage](https://docs.mia-platform.eu/docs/runtime_suite/device-manager/usage)
- [Device Manager Configuration](https://docs.mia-platform.eu/docs/runtime_suite/device-manager/configuration)

### 2. Therapy and Monitoring Manager (TMM)

The **Therapy and Monitoring Manager** enables healthcare professionals to manage patient therapies and monitor health conditions, adherence, and compliance.  
It allows the definition of thresholds and the sending of notifications to alert involved parties of events occurring during the therapy and monitoring period.

**Key Capabilities:**

- **Therapy and Monitoring Plan Management**: Create and manage therapy and monitoring plans with defined start and end dates, associated doctors and patients, and specific prototypes for validation.
- **Detection Handling**: Process patient-entered data (detections) to assess adherence and compliance.
- **Notification System**: Send alerts based on predefined thresholds and patient data entries.

**Documentation:**

- [Therapy and Monitoring Manager Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/therapy-and-monitoring-manager/overview)
- [Therapy and Monitoring Manager Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/therapy-and-monitoring-manager/usage)
- [Therapy and Monitoring Manager Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/therapy-and-monitoring-manager/configuration)

## Configurability

The module offers extensive configurability to cater to diverse healthcare needs:

- **Custom Prototypes**: Define validation schemas (prototypes) for detections to ensure data integrity.
- **Threshold Settings**: Set thresholds for health parameters to trigger notifications.
- **Device Enrollment**: Manually or automatically enroll devices for data collection.
- **Notification Channels**: Configure multiple channels (email, SMS, etc.) for sending alerts.

## Integration and Extensibility

The Therapy and Monitoring Module is designed for seamless integration with other HCP modules and external systems:

- **Interoperability**: Supports integration with national and regional health information systems.
- **API Access**: Provides RESTful APIs for data exchange and system interoperability.
- **Modular Design**: Can be extended with additional microservices to meet evolving healthcare needs.

## Conclusion

The Therapy and Monitoring Module of the Health Composable Platform offers a robust and flexible solution for managing patient therapies and monitoring health conditions.  
Its integration capabilities with medical devices and wearables, combined with comprehensive configurability, empower healthcare providers to deliver personalized and proactive care.

For more detailed information, refer to the official Mia-Platform documentation:

- [Device Manager Documentation](https://docs.mia-platform.eu/docs/runtime_suite/device-manager/overview)
- [Therapy and Monitoring Manager Documentation](https://docs.mia-platform.eu/docs/next/runtime_suite/therapy-and-monitoring-manager/overview)

> _Note: The information provided here is based on the official Mia-Platform documentation as of the latest available versions. For the most up-to-date details, please consult the official documentation links provided above._
