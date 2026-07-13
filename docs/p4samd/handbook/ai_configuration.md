---
id: ai_configuration
title: AI Configuration
sidebar_label: AI Configuration
slug: ai-configuration
---

P4SaMD's AI capabilities — including the [Whisper AI Assistant](./whisper.md) and AI-powered compliance evaluation — are configured per organization by an administrator. This page explains how to enable AI features and connect your own LLM provider. AI configuration was introduced in **v3.2**.

:::note Who can configure this
Only users with the **Admin** role in the active organization can see and change AI configuration. See [Roles and Permissions](../security/roles_permissions.md).
:::

## Enabling AI Features

AI capabilities are gated behind a per-organization **AI features** toggle in the organization settings. When AI features are off, the AI configuration forms are disabled and Whisper does not appear. Turning the toggle on makes the AI configuration available and surfaces Whisper to your team (once a chat provider is configured).

## LLM Profiles

P4SaMD uses your own LLM provider credentials, configured on the **LLM Profiles** settings page (under **Settings**). Credentials are assigned per **workload**, so you can use different providers or models for different purposes. There are two workloads:

- **Chat** — powers the Whisper conversational assistant.
- **Evaluation** — powers AI-based compliance analysis (the suggestions Whisper surfaces).

Each workload is configured independently. This means you can, for example, use a fast, inexpensive model for chat and a more capable model for compliance evaluation.

### Configuring a workload

For each workload (Chat and Evaluation), provide:

| Field | Description |
|---|---|
| **Provider** | The LLM provider. Supported options: **OpenAI**, **Anthropic**, **Google Vertex AI**, **Azure OpenAI**. |
| **Model** | The default model used for the workload. |
| **API Base URL** | The provider endpoint (when applicable). |
| **API Key** | The credential used to authenticate with the provider. |

Click **Save** to store the configuration. P4SaMD **validates the credentials live** before saving, so an invalid key is reported immediately ("Invalid API key. Please check your credentials and try again.") rather than failing later.

Each workload shows its current status — **Configured** or **Not configured** — along with the date it was last updated. On the Chat workload, a **Use same configuration as Evaluation** action copies the Evaluation provider settings across, so you do not have to re-enter them.

:::info Credential security
API keys are stored **encrypted at rest (AES-256-GCM)** in the database. They are never returned to the browser; the configuration form only indicates whether a key is currently stored. As of v3.3, every AI-powered evaluation workload — Requirement Quality Score, Brownfield analysis, and Whisper compliance suggestions — consistently uses your organization's own configured **Evaluation** credentials end to end for every request.
:::

### Available chat models

A provider can optionally define an **allow-list of available models** in addition to its default model. When an allow-list is set, those models become selectable in the Whisper chat model picker; when it is empty, only the default model is available. You can also **discover** the live model list directly from the provider (OpenAI and Anthropic) to populate or refresh the available models.

In chat, users may **override the model per message** by choosing from the available models. If a chosen model is unavailable or unrecognized, Whisper silently falls back to the default model. Evaluation always uses its single configured model.

## How this powers Whisper

Once **AI features** are enabled and a **Chat** profile is configured, the Whisper assistant becomes available to your team. The **Evaluation** profile drives the compliance suggestions Whisper displays for each version. If Whisper reports "No active chat provider configured", return here and assign a provider/model to the Chat workload.
