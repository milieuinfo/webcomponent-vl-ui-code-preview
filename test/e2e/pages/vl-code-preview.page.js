/* eslint-disable no-unused-vars */
const VlCodePreview = require('../components/vl-code-preview');
const {Page, Config} = require('vl-ui-core').Test;

class VlCodePreviewPage extends Page {
  async _getCodePreview(selector) {
    return new VlCodePreview(this.driver, selector);
  }

  async load() {
    await super.load(Config.baseUrl);
  }
}

module.exports = VlCodePreviewPage;
