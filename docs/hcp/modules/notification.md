---
id: notification
title: Notification Module
sidebar_label: Notification Module
---

# 🔔 Notification Module

## Overview

The **Notification Module** is a core component of the Health Composable Platform (HCP) responsible for managing the communication of time-sensitive and contextual information across multiple channels. It enables the sending of messages such as alerts, reminders, confirmations, and updates to both individual users and user groups via email, SMS, voice calls, WhatsApp, and more.

This module provides powerful tools to create, manage, and deliver personalized notifications based on system events or scheduled triggers, making it crucial for ensuring effective and timely communication in healthcare scenarios.

## Key Capabilities

- **Multi-channel Support**: Deliver messages via email, SMS, voice, WhatsApp, and push notifications.
- **Template-based Messaging**: Easily create reusable and customizable message templates.
- **Event-driven and Scheduled Messaging**: Notifications can be triggered by system events or scheduled in advance.
- **File Attachments**: Support for attaching documents or reports to notifications.
- **Extensive Integrations**: Seamless integration with other HCP modules and third-party providers.

## Architecture & Microservices

The Notification Module is composed of several independently deployable microservices. Each is responsible for a specific function within the messaging pipeline:

---

### 1. Notification Manager

The Notification Manager handles the full lifecycle of a notification: listening to triggering events, resolving templates, routing messages through the appropriate channel, and managing delivery statuses. It can also schedule messages to be sent later and supports user targeting via custom rules.

**Main Capabilities:**

- Register and manage notification templates
- Receive and process events from other platform components
- Route messages to the appropriate channel (email, SMS, etc.)
- Integrate with services for scheduling and template rendering

**Documentation**:
- [Notification Manager Overview](https://docs.mia-platform.eu/docs/runtime_suite/notification-manager-service/overview)
- [Notification Manager Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/notification-manager-service/usage)

---

### 2. Mail Service

This service sends emails using AWS SES or SMTP. It integrates with the File Service to include attachments and supports HTML rendering.

**Main Capabilities:**

- Send transactional and scheduled emails
- Handle attachments
- Support CC/BCC and recipient lists

**Documentation**:
- [Mail Service Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/ses-mail-notification-service/usage)

---

### 3. SMS Service

The SMS Service sends messages through providers like Twilio and Kaleyra. It includes safeguards to prevent abuse.

**Main Capabilities:**

- Send real-time or scheduled SMS
- Support for multiple providers
- Data validation and sanitation

**Documentation**:
- [SMS Service Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/sms-service/overview)
- [SMS Service Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/sms-service/usage)

---

### 4. Email Builder

This frontend tool allows admins to design and preview email templates via a drag-and-drop interface.

**Main Capabilities:**

- Create and manage HTML templates
- Export for use with the Notification Manager

**Documentation**:
- [Email Builder Overview & Usage](https://docs.mia-platform.eu/docs/runtime_suite/email-builder/overview_and_usage)

---

### 5. Timer Service

Enables actions like reminders and delayed notifications.

**Main Capabilities:**

- Schedule future events
- Manage queues
- Ensure timely delivery

**Documentation**:
- [Timer Service Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/timer-service/usage)

---

### 6. Files Service

Supports notification attachments and secure document handling.

**Main Capabilities:**

- Upload and store files
- Retrieve files via API
- Metadata and access management

**Documentation**:
- [Files Service Usage](https://docs.mia-platform.eu/docs/runtime_suite/files-service/usage)

---

## Configuration & Customization

The Notification Module can be tailored to your needs:

- Enable/disable specific channels
- Choose external providers (e.g., AWS SES, Twilio)
- Create role- and language-specific templates
- Schedule recurring or one-time messages

## Use Cases

- Appointment confirmations and reminders
- Prescription renewal alerts
- Follow-up care instructions
- Group broadcasts (e.g., staff updates)
- Test result availability
- Emergency and health campaign alerts

## Integration

- Event-driven architecture
- RESTful APIs
- Multi-tenant support

## Conclusion

The **Notification Module** is a flexible messaging infrastructure for healthcare. It ensures that vital communications—alerts, reminders, results—are delivered through the right channels at the right time, improving both care quality and operational efficiency.

**Links to Documentation**:
- [Notification Manager Overview](https://docs.mia-platform.eu/docs/runtime_suite/notification-manager-service/overview)
- [Mail Service Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/ses-mail-notification-service/usage)
- [SMS Service Overview](https://docs.mia-platform.eu/docs/next/runtime_suite/sms-service/overview)
- [Email Builder Overview](https://docs.mia-platform.eu/docs/runtime_suite/email-builder/overview_and_usage)
- [Timer Service Usage](https://docs.mia-platform.eu/docs/next/runtime_suite/timer-service/usage)
- [Files Service Usage](https://docs.mia-platform.eu/docs/runtime_suite/files-service/usage)
