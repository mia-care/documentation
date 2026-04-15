const isDocVersioned = (versionDocDirPath) => /versioned_docs/.test(versionDocDirPath);

/**
 * https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#ex-config
 * @param {{versionDocsDirPath: string, docPath: string}} param
 * @returns {string|undefined}
 */
module.exports = ({versionDocsDirPath, docPath}) => {
  if (!isDocVersioned(versionDocsDirPath)) {
    return `https://github.com/mia-care/p4samd-handbook/edit/main/${versionDocsDirPath}/${docPath}`;
  }
};