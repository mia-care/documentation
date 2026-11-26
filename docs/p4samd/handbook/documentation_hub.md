---
id: documentation_hub
title: Documentation Hub
sidebar_label: Documentation Hub
---

# Documentation Hub

The **Documentation Hub** is a single place to browse and export every exportable artifact your product has generated, grouped by the section of your compliance file they belong to. Open it from the project sidebar.

## Browsing the catalog

The Hub shows seven cards, one per section:

- **Requirements**
- **Software Design**
- **Software Development**
- **Verification**
- **Risk Analysis**
- **Traceability**
- **Product**

Each card shows how many records it currently holds for the active version. A section that has nothing to export yet is marked **Not available yet**, with a note that downloads for it will come in a future release.

The Hub is visible to **every project member, including Viewers**: anyone can see what exists, even if they cannot export it.

## Downloading

Open a card to download its contents, or an individual record inside it. Items download in their native format (for example, a unit test report keeps the format you chose when exporting it elsewhere in the product); a section with more than one item is downloaded as a zip archive.

Not every member can download. If you don't have permission to export a section's content, its download controls are visible but disabled:

- **Viewer role**: download controls are disabled everywhere in the Hub, with a tooltip explaining that downloading isn't available for Viewers.
- **No read access to a section**: if your role doesn't carry read access to a particular SDLC section, that section's downloads stay disabled for you specifically, with a tooltip explaining why.

### Traceability Matrix

The **Traceability** card includes the **Traceability Matrix**, downloadable as a CSV file. Each row follows one chain from a user requirement, through any intermediate requirements, to a system requirement, and lists the risks, test cases and software items linked to each requirement in the chain. Links made from either side are included. Related-to links, cause links and control measures are not part of the matrix.

If your requirements have an [External Key](./requirements.mdx#external-key), the matrix shows an **External Key** column right after each of the user, intermediate and system requirement IDs. The column is empty for a requirement that has none and for a level with no requirement.

The matrix is limited to the active version of your product and to active records. Downloading it needs read access to the Traceability section, like the rest of that card. A matrix with more than 100,000 rows cannot be downloaded: the Hub shows a message that the file is over the row limit, and nothing is added to Download History.

The **Verification** card's test list defaults to unit-level tests; switching test type re-queries just that card without reloading the rest of the catalog.

## Generating documents

Some items in the Hub are documents that P4SaMD builds for you from a template and the live data of the active version. The built-in templates cover the usual compliance documents, for example **Software Requirements Specification**, **Software Test Plan** and **Traceability Matrix**. Your organization can add its own templates, and a published template appears in the Hub next to the built-in ones.

To generate a document, use its download action. While P4SaMD works you see:

1. **Preparing "name"**: the download starts by itself when the document is ready.
2. **Still preparing "name"**: shown for a long document. Large documents can take up to a minute.
3. **"name" is ready. Downloading**: the file is on its way.

Only one document is prepared at a time. If you start another one while a document is being prepared, P4SaMD may tell you that another document is being prepared. A document that takes too long, or any other failure, has its own message. Each message has a **Try again** action. Trying again is always safe.

Requirements that carry an [External Key](./requirements.mdx#external-key) can show it in a document, next to the P4SaMD ID, when the template is written to use it.

:::note Built-in templates are renamed
The built-in templates no longer have the `MDR-` prefix in their name. For example, **MDR-Software Test Plan** is now **Software Test Plan**. If you or your team refer to these documents by name, in procedures or in your technical file index, update the references.
:::

## Download History

Every download from the Hub is recorded, as is every report or SBOM downloaded from its own page elsewhere in the product. Open **Download History** from the Hub to see:

- Document name, format, date, who downloaded it, and its size.
- Filters to search by document, user, or version, and to narrow by section, downloaded-by, or download date. The origin filter separates **Documents** from **Raw data**.
- A **re-download** action on each row, so you can fetch the exact same file again without navigating back to where it came from.

This gives every project member visibility into who exported what, and when, as part of your record of who has handled regulated artifacts.
