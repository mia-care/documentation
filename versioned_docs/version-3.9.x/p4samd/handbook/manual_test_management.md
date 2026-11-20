---
id: manual_test_management
title: Manual Test Management
sidebar_label: Manual Test Management
---

# Manual Test Management

Not every check can be automated. **Manual Test Management** lets you write a manual test, get it approved, assign it to testers and keep the evidence of every run, all inside the **Verification** area and traceable to your requirements and risks. It works at every test level: unit, integration and system.

## Writing a manual test

1. Open **Verification**, choose the test level and click **Create Test**.
2. In the **Identity** step, name the test and choose **Manual** as the execution mode.
3. In the **Details** step, fill in the **Manual test setup** section: the preconditions, the environment, the test data, the test tools, the hardware and software configuration, and the pass criteria. All of these are optional.
4. Choose the **Interface** or interfaces the test runs on, for example a web application or a command line. The list is fed by the interfaces already used in the project. Type a new label to add it to the list.
5. In the **Config** step, add the ordered **steps**. Each step has one **action** and one **expected result**. A test can have up to 100 steps.
6. Add test data as links (up to 20) or attachments (up to 10 files of 10 MB each), then save.

Creating a test requires the QA role or higher.

The test case page of a manual test shows a **Test procedure** card with the preconditions, the environment, the conditions and the steps. Edit them in place and save them in one go. A **Traceability** card lists the linked requirements, risks and software items, and lets you link more.

:::note Editing an approved test
Saving a change to an approved manual test creates a new revision and revokes its approval. P4SaMD warns you first and asks for a short summary of the change. The test must be approved again before new executions can be assigned.
:::

## Test lifecycle

A manual test moves through its own lifecycle. The status badge in the test list, and the status button on the test case page, open the available actions.

| Status | Meaning | Next actions |
|---|---|---|
| **Draft** | Being written. | Submit for approval, delete |
| **In Review** | Waiting for the named approver. | Approve, reject |
| **Approved** | Ready to be executed. | Assign an execution, deprecate |
| **Deprecated** | Retired. Read-only. | None |

- **Submit for approval**: the test needs at least one step. Name the approver, who must be an Admin or QA member. Self-approval is allowed.
- **Approve or Reject**: the named approver decides. A rejection needs a reason and returns the test to **Draft**. The approval record is shown on the test case page.
- **Deprecate**: needs a rationale and an impact analysis, and shows how many manual executions the test has. A deprecated test shows a banner with both and cannot be edited.
- **Delete**: only a **Draft** test can be deleted. Retire any other test by deprecating it.

In the test list, tick the checkboxes of manual tests to run a lifecycle action, or **Assign an Execution**, on several of them at once. Automated tests cannot be selected, because only manual tests have this lifecycle.

## Assigning executions

1. Select an **Approved** manual test from its page, its row in the list or the bulk bar, and click **Assign an Execution**.
2. Choose the **executor** for each interface. Executors must have write access to Verification.
3. Optionally set a **due date**. The due date is a planning aid: no reminder is sent.
4. Confirm. P4SaMD creates one execution for each interface.

Each execution is bound to the test revision that was approved when it was created, so a later edit never changes what the tester was asked to run. The **Manual executions** view in Verification lists the executions of the selected version and test level, and the **Executors** column and filter show who is responsible.

## Executing a test

Open an execution to see its key, test, interface, executor, status and the revision it is bound to.

1. Fill in the **Conditions used** card: the environment, test data, test tools and hardware and software configuration actually used.
2. Set the result of each step to **Pass**, **Fail**, **Blocked** or **Not executed**. Do it one step at a time, in bulk, with **Pass all remaining steps**, or with the keys **P**, **F**, **B** and **N**. Only the executor can record results.
3. Attach **evidence** files and describe any **anomalies** you observed.
4. Click **Complete execution**. The result is derived from the steps: any **Fail** makes the execution **Fail**, otherwise any step that is not executed makes it **Not executed**, otherwise it is **Pass**. Completion notes are required whenever the result is not **Pass**.
5. Use **Complete and start next** to go straight to your next execution.

A completed execution is read-only for everyone.

## Reruns and history

- **Rerun**: from a completed execution, or from the execution history, click **Rerun**. P4SaMD creates a new execution of the same test, interface and executor, bound to the revision that is approved now.
- **Execution history**: the **Executions** card on the test case page lists every execution, either for the test's own version or for all versions. Open a row to see its details.
- **Download history**: exports one row per manual execution, with result, executor, dates, step counts, notes, anomalies and conditions.
- The test list shows the number of manual runs and the last valid result of each test.

## Known limitations

- Only the executor can record step results and complete an execution.
- A completed execution cannot be edited. Rerun it instead.
