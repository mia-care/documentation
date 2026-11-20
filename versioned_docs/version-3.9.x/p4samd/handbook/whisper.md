---
id: whisper
title: Whisper AI Assistant
sidebar_label: Whisper AI Assistant
---

**Whisper** is the in-platform AI assistant. It continuously surfaces **compliance suggestions** for the active version, and answers questions and proposes changes through an interactive **chat**.

:::info Availability: on request
Whisper is available from **v3.2**, but it is **not enabled by default**. Access is granted **on request**: contact Mia-Care (or your account manager) to enable Whisper for your organization. After access is granted, an administrator must turn on **AI features** and configure a chat provider before Whisper appears. See [AI Configuration](./ai_configuration.md).
:::

## Opening Whisper

Whisper is available on every project-scoped page. Click the **sparkles icon** in the top navigation bar to open it. It opens as a panel on the right-hand side of the screen. You can **expand it to full page** or restore it to the panel at any time, and close it when you are done.

A context strip at the top of the panel shows the **project** and **version** Whisper is working against. Its suggestions and answers are scoped to that version.

The sparkles icon carries a **badge** showing the number of open compliance findings for the active version.

## Compliance Suggestions

In the **Suggestions** view, Whisper lists AI-detected compliance findings for the active version, sorted by priority (**High → Medium → Low**). Each finding is a card with a title and a priority label.

Clicking a finding opens a detail drawer containing:

- **Priority** and **Category**
- **Normative Reference**: the regulatory clause the finding relates to
- **Description** and **Reasoning**: what was detected and why
- **Remediation Steps**: suggested actions to resolve it
- **Confidence**: how confident the analysis is in the finding

### Running an analysis

Click **Analyze now** to run a fresh compliance analysis of the active version. The list shows a re-analyzing indicator while the job runs, then a confirmation once results are updated. A **freshness label** ("Updated N minutes ago") tells you when the analysis last ran. The list also refreshes when you return to the tab.

### Triaging findings

Handle each finding from its card:

- **Dismiss**: mark a finding as not applicable. You can add an optional reason.
- **Resolve**: mark a finding as addressed.

After you dismiss or resolve a finding, an **undo** prompt lets you reopen it. By default the list hides handled findings and the badge counts only **open** findings. Use the **Show dismissed/resolved** toggle to see the full history.

Findings automatically reconcile when your requirements change: unchanged findings are preserved, findings whose underlying item changed are reopened, and findings that no longer apply are superseded.

## Chat

Switch to **Chat** to ask Whisper questions in natural language. Answers stream in token by token, and conversations are saved.

- **Conversations**: a sidebar lists your past conversations; start a fresh one with **New chat**. Conversations are private to you within your organization.
- **Composer**: type your question in the **Ask Whisper…** box and send it.
- **References**: answers can cite the **normative references** they are based on, and every assistant message is marked as **AI-generated**.

### Confirmable actions

Whisper can also propose changes to your project, for example creating or updating a requirement, or removing a risk link. It then presents a **Proposed action** card with **Confirm** and **Decline** buttons.

:::tip You are always in control
Whisper never changes your data on its own. A proposed action is applied only when **you** confirm it. Confirmed and declined actions are attributed to you ("AI-assisted · confirmed by you") and recorded in the project audit log.
:::

### From a finding to a chat

Start a chat directly from a compliance finding. Whisper opens a conversation seeded with the context of that finding, so it can suggest concrete remediation steps.

### Choosing a model

If your administrator has made more than one chat model available, use the model selector in the chat to pick which model answers a given message. You can also refresh the list of available models from the configured provider. If a selected model is unavailable, Whisper falls back to the default model rather than failing.

## When Whisper is unavailable

Whisper reports a message when it cannot run, for example:

- **AI features are disabled**: an administrator has not enabled AI for your organization.
- **No active chat provider configured**: AI is enabled but no chat provider/model has been assigned. See [AI Configuration](./ai_configuration.md).
