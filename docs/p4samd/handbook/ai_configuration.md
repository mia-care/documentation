---
id: ai_configuration
title: AI Configuration
sidebar_label: AI Configuration
slug: ai-configuration
---

An administrator configures P4SaMD's AI capabilities per organization, among them the [Whisper AI Assistant](./whisper.md) and AI-powered compliance evaluation. This page covers how to enable AI features and connect your own LLM provider. AI configuration was introduced in **v3.2**.

:::note Who can configure this
Only users with the **Admin** role in the active organization can see and change AI configuration. See [Roles and Permissions](../security/roles_permissions.md).
:::

## Enabling AI Features

A per-organization **AI features** toggle in the organization settings gates AI capabilities. When the toggle is off, the AI configuration forms are disabled and Whisper does not appear. Turning it on enables the AI configuration and, once a chat provider is configured, makes Whisper available to your team.

## LLM Profiles

P4SaMD uses your own LLM provider credentials, configured on the **LLM Profiles** settings page (under **Settings**). Credentials are assigned per **workload**, so different purposes can use different providers or models. The two workloads are:

- **Chat**: powers the Whisper conversational assistant.
- **Evaluation**: powers AI-based compliance analysis (the suggestions Whisper surfaces).

Each workload is configured independently, so you can, for example, use a fast, inexpensive model for chat and a more capable model for compliance evaluation.

### Configuring a workload

For each workload (Chat and Evaluation), provide:

| Field | Description |
|---|---|
| **Provider** | The LLM provider. Supported options: **OpenAI**, **Anthropic**, **Google Vertex AI**, **Azure OpenAI**. |
| **Model** | The default model used for the workload. |
| **API Base URL** | The provider endpoint (when applicable). |
| **API Key** | The credential used to authenticate with the provider. |

Click **Save** to store the configuration. P4SaMD **validates the credentials live** before saving, so an invalid key is reported immediately: "Invalid API key. Please check your credentials and try again."

Each workload shows its current status (**Configured** or **Not configured**) and the date it was last updated. On the Chat workload, **Use same configuration as Evaluation** copies the Evaluation provider settings across.

:::info Credential security
API keys are stored **encrypted at rest (AES-256-GCM)** in the database. They are never returned to the browser; the configuration form only indicates whether a key is currently stored. As of v3.3, every AI-powered evaluation workload (Requirement Quality Score, Brownfield analysis, and Whisper compliance suggestions) uses your organization's own configured **Evaluation** credentials end to end for every request.
:::

### Available chat models

A provider can optionally define an **allow-list of available models** alongside its default model. When an allow-list is set, those models become selectable in the Whisper chat model picker. When the allow-list is empty, only the default model is available. You can also **discover** the live model list directly from the provider (OpenAI and Anthropic) to populate or refresh the available models.

In chat, users can **override the model per message** by choosing from the available models. If a chosen model is unavailable or unrecognized, Whisper silently falls back to the default model. Evaluation always uses its single configured model.

## How this powers Whisper

Whisper becomes available to your team once **AI features** are enabled and a **Chat** profile is configured. The **Evaluation** profile drives the compliance suggestions Whisper displays for each version. If Whisper reports "No active chat provider configured", assign a provider and model to the Chat workload on the **LLM Profiles** page.
