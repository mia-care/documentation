---
id: unit_test_acquisition
title: Test Levels and Automatic Test Acquisition
sidebar_label: Test Levels & Acquisition
---

# Test Levels and Automatic Test Acquisition

The whole **Verification** area works at three test levels: **Unit**, **Integration** and **System**. Pick the level in the Verification menu. At each level you get the **By Report**, **All Tests** and **Test Source** views, and everything you see, including the dashboard figures, is limited to that level. Older links to Verification pages keep working.

Test cases at any level open the same test case page. Manual tests are described in [Manual Test Management](./manual_test_management.md). You can also upload a report by hand and choose its level in the upload dialog.

This page first describes unit test acquisition from a software item, then the test sources used at integration and system level.

Instead of uploading unit test reports by hand, a software item with a linked git repository can pull them in automatically from your CI pipeline, on a schedule or on demand.

## Setting up a source

Automatic acquisition is configured per software item, as an opt-in addition to its repository link:

1. Open the software item's **Add Git Repository** dialog (or edit its existing link) and link it to a reachable repository.
2. Switch on **Enable automatic test ingestion**.
3. Choose the **Provider**: **GitLab** or **GitHub Actions**. These are the only two supported; the option stays unavailable until the repository URL above resolves to one of them.
4. Enter the **Artifact name**: the name of the GitLab CI job, or the GitHub Actions artifact, whose output holds the JUnit report. This is required.
5. Optionally set a **Branch** to pull from. Leave it blank to use the repository's default branch.
6. Set a schedule (see below), then save.

P4SaMD reads every matching report file in the job's or artifact's output and combines them into one report, so tests split across several files are never lost. The report shows how many documents were merged. If any file cannot be read as a test report, the whole acquisition fails and nothing is imported.

You can also configure or change these settings later from **Repository health** (below), which opens the same dialog.

## Choosing a schedule

A source pulls on one of two cadences, shown and set in your own local time:

- **Daily**: runs once a day, starting from a time you choose.
- **Weekly**: runs on the day or days of the week you choose, at a time you choose.

Change the schedule at any time from Repository health, or trigger a pull immediately regardless of the schedule (see below).

## Repository health

Open **Repository health** from the Verification page to see every software item in the project that has a repository linked, whether or not automatic acquisition is configured for it yet. Search by name, URL, or software item, and filter by:

- **Status**: Enabled, Paused, Auto-disabled, or No automatic schedule.
- **Access**: Public or Private.
- **Condition**: Reachable, Unreachable, or Not checked yet.

Each row shows the item's current status, its last attempt and outcome, and when it's next due to run. From a row you can:

- **Trigger acquisition now**: pull immediately, outside the schedule. Unavailable until a source is configured, and while a source is auto-disabled (re-enable it first).
- **Set up automatic acquisition** / **Configure automatic schedule** / **Pause automatic schedule** / **Resume automatic schedule**: the available action depends on the row's current state.
- **Edit git repository**: change the repository link and its acquisition settings together.
- **Delete**: removes the automatic acquisition configuration only. Reports already pulled through it are not affected.

## When a source stops pulling automatically

A source is automatically disabled after too many consecutive failed attempts, so a broken credential or a renamed CI job doesn't keep failing silently. The row shows why the last attempt failed (Repository unreachable, Credential rejected, Report invalid, No report found, or Internal error), so you know what to fix. Once it's fixed, **re-enable** the source from Repository health to resume pulling.

## How an acquired report is attributed

A report pulled in automatically shows **"Acquired automatically on \{date\}"** on its run detail page, instead of the usual **"Uploaded on \{date\} by \{name\}"**, because there is no person to attribute it to.

## Reviewing what changed since the last run

When a run is ingested for a software item that already has a previous run in the same workspace version, its detail page compares the two and flags what changed:

- **Removed**: a test case present in the previous run but missing from this one is listed in a banner and must be **acknowledged**, one by one, before the run can be approved or submitted for approval.
- **Rename / move candidates**: a test case that looks like it may have been renamed or moved rather than deleted and re-added can be **confirmed**, carrying its identifier, traceability links, and approval state forward, or **rejected**, in which case it's treated as two independent test cases (one removed, one added).

A test case that's genuinely new is simply marked **New** in the test list; it needs a traceability link like any other test case, but doesn't require a separate review step here.

## Integration and system test sources

At integration and system level, results come from a **test source**: a connection between a repository and the test level, instead of a single software item.

### Setting up a test source

1. Open **Verification**, choose **Integration** or **System** and open the **Test Source** view.
2. Click to add a source and fill in the **General config** tab: the provider (**GitLab** or **GitHub Actions**), the repository URL, the job or artifact name that holds the JUnit report, the access credential for a private repository, and optionally a branch and the report file path.
3. Choose the **software items** the tests exercise. A source covers a set of items, and each combination of item set and test level can have one active source.
4. Enter the **interface** the tests run on, as a free-text label of up to 64 characters, for example "API" or "Mobile app". Set the **test type** of the suite. You can also declare the requirements and control measures the suite verifies.
5. Set the schedule and save.

The same scenario run on two interfaces is tracked as two separate test cases, each with its own identifier and links.

When you create a test case with **Automated** execution at integration or system level, the last step of the wizard creates or reuses the matching test source for you.

### Getting results into P4SaMD

A source can bring results in four ways:

- **On a schedule**: daily or weekly, as for unit sources.
- **Fetch latest results**: retrieves the results already available at the source. It does not start a test run. It is hidden while no source is configured and while the source is paused or auto-disabled.
- **Run now**: starts a test run remotely. Switch on remote execution in the **Execution config** tab, then enter the execution target and reference, and the access token for that run. **Run now** only appears for sources that have a remote execution target.
- **Push delivery**: your pipeline sends the report to P4SaMD when it finishes. In the source form, enable push delivery to get a one-time secret. Copy it before dismissing the call-out because it is never shown again. You can rotate or disable it at any time.

When a pull finds that several runs finished since the last one, P4SaMD imports them in order, oldest first, up to 20 runs or 7 days. If that limit cuts the catch-up short, the report shows a notice.

The **Automatic executions** view lists every acquisition attempt of the level with its status (running, completed, failed, timed out or rejected), its elapsed time and a **Retry** action.

### Test types

Tests are classified by type: Functional, Non-Functional, Smoke, Performance, Security or Load. You can also type your own label. Use the test type filter in the test list to narrow it down.

## Reviewing a run

When a run is ingested for a source or item that already has a previous run in the same workspace version, its detail page compares the two. At integration and system level the review also shows:

- links a test case carried over from the previous run, tagged **Carried forward**, so they read differently from links you add in this review;
- the interface of each test case in the reconciliation list;
- the software items the comparison was made against;
- when approval is blocked because coverage is incomplete, the names of the test cases that lack traceability, up to five and then "and N more".

**Accept all** and **Reject all** in the rename and move card, and **Acknowledge all** in the removed banner, apply a decision to every pending test case at once. Your rejections and acknowledgements are saved, so they are still there after a refresh.

## Approving a report

Approving a report needs write access to Verification and the Admin or QA role.

Approving a report now also approves every automated test case that ran in it and is not already approved or retired. A deprecated test case that reappears is revived. Test cases you acknowledged as removed are retired.

**Reversing** an approval undoes exactly those changes: each test case returns to the status it had before. The confirmation lists the affected test cases and the status each one returns to.
