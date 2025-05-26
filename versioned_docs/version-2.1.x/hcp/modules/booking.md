---
id: booking
title: Booking Module
sidebar_label: Booking Module
---

# 📅 Booking Module

## Overview

The **Booking Module** is a key component of the Health Composable Platform (HCP), designed to manage appointments between users of the platform, such as patients, doctors, and other resources. It enables the creation of availability slots, the management of exceptions (e.g., vacations or illnesses), and the booking of appointments. Additionally, it supports the creation of teleconsultations through integration with video conferencing services.

## Key Features

- **Appointment Management**: Create, update, and delete appointments between users.
- **Availability Slots**: Define time slots available for booking, including exception periods.
- **Resource Booking**: Reserve resources such as doctors, rooms, or medical equipment.
- **Teleconsultation**: Create and manage virtual rooms for remote consultations.

## Microservices Architecture

The Booking Module consists of several microservices working together to provide all the needed functionalities:

### 1. Appointment Manager

The **Appointment Manager** microservice is responsible for managing appointments, availability slots, and exceptions. It supports two operational modes:

- **Appointments Mode**: Direct appointment management without setting up availability.
- **Full Mode**: Complete management with availability configuration, exceptions, and slot-based appointment booking.

**Main Capabilities:**

- CRUD operations for appointments
- Availability and time slot definition
- Exception handling (e.g., holidays, sick leave)
- Integration with notification systems for appointment reminders

**Documentation:**

- [Appointment Manager Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/appointment-manager/overview)
- [Appointment Manager Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/appointment-manager/usage)
- [Appointment Manager Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/appointment-manager/configuration)

### 2. Teleconsultation Service Backend

The **Teleconsultation Service Backend** acts as a Backend For Frontend (BFF) for the teleconsultation service. It manages the creation, update, and deletion of teleconsultation sessions and integrates with the Kaleyra SaaS platform for video conferencing.

**Main Capabilities:**

- Create, update, and delete teleconsultation sessions
- Integration with Kaleyra for video calls
- Support for call features like chat, whiteboard, screen sharing, and file upload

**Documentation:**

- [Teleconsultation Service Backend Overview](https://docs.mia-platform.eu/docs/runtime_suite/teleconsultation-service-backend/overview)
- [Teleconsultation Service Backend Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/teleconsultation-service-backend/configuration)

### 3. Teleconsultation Service Frontend

The **Teleconsultation Service Frontend** provides the user interface for teleconsultations. It embeds the video conferencing interface via an iframe and includes a set of tools to improve the remote visit experience.

**Main Capabilities:**

- Visual interface for remote consultations
- Tools such as chat, whiteboard, screen sharing, and file upload
- Multi-language support (English and Italian)

**Documentation:**

- [Teleconsultation Service Frontend Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/teleconsultation-service-frontend/overview)
- [Teleconsultation Service Frontend Configuration](https://docs.mia-platform.eu/docs/next/runtime_suite/teleconsultation-service-frontend/configuration)

## Configuration and Customization

The Booking Module is highly configurable and can be adapted to fit the specific needs of any healthcare organization:

- **Role and Permission Management**: Customize user roles and access levels for appointment management.
- **Integration with External Systems**: Connect to external systems for resource and notification management.
- **UI Customization**: Adapt the teleconsultation interface to align with your organization's branding.

## Integration and Interoperability

The Booking Module is designed for seamless integration with other HCP modules and third-party systems:

- **Interoperability**: Connect with national and regional healthcare information systems.
- **API Access**: Expose RESTful APIs for appointment and teleconsultation management.
- **Modular Design**: Extend functionality by integrating additional microservices as needed.

## Conclusion

The **Booking Module** of the Health Composable Platform offers a complete and flexible solution for managing healthcare appointments and teleconsultations. Its modular architecture and wide range of configuration options allow healthcare organizations to optimize resource management and improve patient experience.

**Further Reading:**

- [Booking Module Overview](https://docs.mia-platform.eu/docs/next/runtime_suite_applications/booking-module/overview)
- [Appointment Manager Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/appointment-manager/overview)
- [Teleconsultation Service Backend Overview](https://docs.mia-platform.eu/docs/runtime_suite/teleconsultation-service-backend/overview)
- [Teleconsultation Service Frontend Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/teleconsultation-service-frontend/overview)
