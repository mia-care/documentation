---
id: sbom
title: Software Bill Of Materials (SBOM)
sidebar_label: SBOM
---

# Software Bill Of Materials (SBOM)

When developing Software as a Medical Device (SaMD), the Software Bill of Materials (SBOM) is an inventory of the software components, libraries, and dependencies that make up a software item. It covers versioning, licensing, and known vulnerabilities.

Medical device software must meet strict regulatory standards, such as those set by the FDA, EU MDR, ISO 13485, and IEC 62304. An SBOM accounts for every component, which supports traceability and reduces the risk of security vulnerabilities arising from third-party software.

P4SaMD generates SBOMs natively, so you do not need to run a separate scanning tool in your own CI/CD pipeline and push the result in. Open the **SBOM** tab on a software item's detail page, or the one on the **System Design** page for a project-wide view.

## How SBOMs are generated

For a software item whose **repository link** points to a resolvable git reference (branch, tag, or commit), P4SaMD can generate the SBOM automatically. It clones the linked repository at the resolved reference and scans it server-side to produce a standard [CycloneDX][cyclone-dx] document. The whole process runs inside P4SaMD, so no credentials or tooling are required on your side.

Automatic generation is not available for software items without a resolvable git reference, for example third-party or SOUP components with no linked repository. The SBOM tab shows a banner explaining why, and you can [import a CycloneDX file manually](#importing-an-sbom) instead.

### Triggering a scan

A scan can start in three ways:

- **Manually**: click **Generate SBOM** (or **Re-scan** if one already exists) on the SBOM tab.
- **Automatically on change**: linking a new repository to a software item, or changing which version/ref it points to, triggers a fresh scan.
- **On a schedule**: configure a **daily** or **weekly** automatic scan for a software item from the SBOM tab. The schedule targets the item's active version and shows badges for when it last ran and when it's next due.

While a scan is running, the tab shows a **generating** status. If a scan does not report back within the expected window (for example after an interruption), P4SaMD detects and recovers it, so you can re-scan.

## Browsing an SBOM

Once a scan completes, the SBOM tab shows the **status** (not generated / generating / ready). From there you can:

- **Download** the raw generated document.
- Browse the full **component table** for the software item, with filtering.
- Use the **version selector** to switch between SBOMs generated for different versions or refs of the same software item, and compare a component's dependency footprint at an earlier point.
- Open a **diff** between two scans of the same version to see which components were added, removed, or changed.

For each component you can review its identity (name, version) and set a per-version **status** and **notes**, for example to record that a flagged component has been reviewed and accepted. The status is scoped to the P4SaMD version you're working in, so the same component is tracked independently across releases of your product.

## Project-wide view

The **System Design** page's SBOM tab gives you a project-level view across every software item's system design in the current version:

- An aggregated **component table** across all software items, with filtering.
- A project-wide **export** of the combined SBOM.
- A project-wide **diff** between two scans.

Use it to see what changed across the whole product between two releases without opening every software item individually.

## Importing an SBOM

If a software item can't be scanned automatically (no resolvable git reference), import an existing CycloneDX file for it instead. The **preview** step shows what will be recorded. Nothing is saved until you confirm.

## Exporting

You can export an SBOM in standard CycloneDX format at any time, either for a single software item's scan or as a project-wide aggregate. Use it in your own compliance records, or share it with auditors and customers.

## Troubleshooting

- If a software item's SBOM tab shows **not generated**, check that it has a repository linked and that the linked reference (branch/tag/commit) can be resolved. If it can't (for example, a component with no linked repository), use [manual import](#importing-an-sbom) instead.
- If a scan stays in **generating** for an unusually long time, automatic recovery eventually marks it as failed. Retry the scan.
- Component **status/notes** are per-version. If a note you expect is missing, check that you're looking at the P4SaMD version it was recorded against.

[cyclone-dx]: https://cyclonedx.org/
