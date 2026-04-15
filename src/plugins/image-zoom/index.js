const path = require('path');

function pluginImageZoom() {
  return {
    name: 'docusaurus-image-zoom',

    getClientModules() {
      return [path.resolve(__dirname, './zoom')];
    },
  };
}

module.exports = pluginImageZoom;
