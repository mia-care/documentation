# Contribution Guidelines

Thank you for considering contributing to the P4SaMD Handbook.

Please follow these guidelines to help us address your issue, assess changes, and finalize your pull requests.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Please read and follow it before contributing.

## How to Contribute

### Reporting Issues

Before opening a new issue, search for existing ones. If you find a similar closed issue, reference it in your new report.

### Suggesting Improvements

Open an issue to report typos or suggest changes that would make the documentation clearer or more accurate.

### Opening Pull Requests

1. Fork the repository and create a branch:
   - `edit/topic` — changing one or more existing pages
   - `new/topic` — adding a new page or section
   - `remove/topic` — removing outdated content

2. Make your changes. Pages are written in Markdown — see the [Docusaurus docs](https://docusaurus.io/docs/markdown-features) for supported features.

3. Run the site locally to verify your changes:
   ```bash
   yarn install
   yarn start
   ```

4. Run content checks before submitting:
   ```bash
   yarn lint
   yarn spellcheck
   ```

5. Submit a pull request with a clear description of what changed and why.

## Internal Links

- Links between pages must be relative to `/docs/`.
- File extensions (`.md` or `.mdx`) are required.
- Anchors are supported: `[Section](#anchor-name)`.

## Deleting a Page

If you delete a page, add a redirect entry to [`301redirects.json`](./301redirects.json) so existing links continue to work:

```json
"/docs/path/to/deleted-page": {
  "destination": "/docs/path/to/replacement-page",
  "addedOn": "yyyy-mm-dd"
}
```

## Page Frontmatter

Every `.md` file should include:

```markdown
---
id: <id>
title: <Title displayed on the page>
sidebar_label: <Title displayed in the sidebar>
---
```

## Versioning

Documentation versions correspond to P4SaMD minor releases. To snapshot the current `docs/` folder as a new version:

```bash
yarn docusaurus docs:version <x.y.x>
```

Then register the new version in the `versions` section of `docusaurus.config.js`.
