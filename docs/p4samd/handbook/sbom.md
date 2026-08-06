---
id: sbom
title: Software Bill Of Materials (SBOM)
sidebar_label: SBOM
---

# Software Bill Of Materials (SBOM)

When developing Software as a Medical Device (SaMD), the Software Bill of Materials (SBOM) is a crucial tool for enhancing transparency, security, and compliance. An SBOM is an inventory of all the software components, libraries, and dependencies that make up a particular software item, including versioning, licensing, and known vulnerabilities. Much like a bill of materials in hardware manufacturing, it provides a detailed mapping of what constitutes the software.

Medical device software must adhere to strict regulatory standards, such as those outlined by the FDA, EU MDR, ISO 13485, and IEC 62304. An SBOM helps ensure that all components are accounted for, facilitating traceability and reducing the risk of security vulnerabilities that could arise from third-party software.

P4SaMD generates SBOMs for you natively — you no longer need to run a separate scanning tool in your own CI/CD pipeline and push the result in. Open the **SBOM** tab on a software item's detail page, or on the **System Design** page for a project-wide view, to get started.

## How SBOMs are generated

For a software item whose **repository link** points to a resolvable git reference (branch, tag, or commit), P4SaMD can generate its SBOM automatically: it clones the linked repository at the resolved reference and scans it server-side to produce a standard [CycloneDX][cyclone-dx] document. No credentials or tooling are required on your side — the whole process runs inside P4SaMD.

For software items that aren't backed by a resolvable git reference (for example, third-party or SOUP components without a linked repository), automatic generation isn't available. In this case the SBOM tab shows a banner explaining why, and you can [import a CycloneDX file manually](#importing-an-sbom) instead.

### Triggering a scan

A scan can start in three ways:

- **Manually**: click **Generate SBOM** (or **Re-scan** if one already exists) on the SBOM tab.
- **Automatically on change**: linking a new repository to a software item, or changing which version/ref it points to, triggers a fresh scan.
- **On a schedule**: configure a **daily** or **weekly** automatic scan for a software item from the SBOM tab. The schedule targets the item's active version and shows badges for when it last ran and when it's next due.

While a scan is running, the tab shows a **generating** status. If a scan doesn't report back within the expected window (for example after an interruption), P4SaMD automatically detects and recovers it, so a stuck scan does not block you indefinitely — you can simply re-scan.

## Browsing an SBOM

Once a scan completes, the SBOM tab shows the **status** (not generated / generating / ready) and lets you:

- **Download** the raw generated document.
- Browse the full **component table** for the software item, with filtering.
- Use the **version selector** to switch between SBOMs generated for different versions or refs of the same software item, so you can compare what a component's dependency footprint looked like at an earlier point.
- Open a **diff** between two scans of the same version to see which components were added, removed, or changed.

For each component you can review its identity (name, version) and set a per-version **status** and **notes** — for example to record that a flagged component has been reviewed and accepted, or to leave context for the next reviewer. This status is scoped to the P4SaMD version you're working in, so the same component can be tracked independently across different releases of your product.

## Project-wide view

The **System Design** page's SBOM tab gives you a project-level view across every software item's system design in the current version:

- An aggregated **component table** across all software items, with filtering.
- A project-wide **export** of the combined SBOM.
- A project-wide **diff** between two scans.

This is the fastest way to answer "what changed across the whole product between these two releases" without opening every software item individually.

## Importing an SBOM

If a software item can't be scanned automatically (no resolvable git reference), you can import an existing CycloneDX file for it instead. Use the **preview** step before confirming the import to check what will be recorded — nothing is saved until you confirm.

## Exporting

You can export an SBOM — for a single software item's scan or as a project-wide aggregate — in standard CycloneDX format at any time, for use in your own compliance records or for sharing with auditors and customers.

## Troubleshooting

- If a software item's SBOM tab shows **not generated**, check that it has a repository linked and that the linked reference (branch/tag/commit) can be resolved. If it can't (for example, a component with no linked repository), use [manual import](#importing-an-sbom) instead.
- If a scan appears stuck in **generating** for an unusually long time, P4SaMD's automatic recovery will eventually mark it as failed so you can re-scan; you don't need to take any action other than retrying.
- Component **status/notes** are per-version — if you don't see a note you expect, check that you're looking at the same P4SaMD version it was recorded against.

[cyclone-dx]: https://cyclonedx.org/
