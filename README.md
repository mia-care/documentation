# Mia-Care P4SaMD Handbook

This repository contains the official handbook for **Mia-Care P4SaMD** — the Platform for Software as a Medical Device.

The site is built with [Docusaurus 3](https://docusaurus.io/).

## Local Development

**Requirements:** Node.js 18+ and [Yarn](https://yarnpkg.com/).

Install dependencies:

```shell
yarn install
```

Start the development server (available at <http://localhost:3000>):

```shell
yarn start
```

Build and preview the production site:

```shell
yarn build
yarn serve
```

> Note: Algolia search does not work in local development mode.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on reporting issues, suggesting improvements, and opening pull requests.

## Releasing a New Version

1. Update `sidebars.json` with any new pages.
2. Snapshot the current docs as a versioned release:
   ```shell
   yarn docusaurus docs:version x.y.z
   ```
3. In `docusaurus.config.js`:
   - Set `lastVersion` to the new version string.
   - Add the new version to the `versions` map and mark it as current.
   - Update the label and path of the previous version.
