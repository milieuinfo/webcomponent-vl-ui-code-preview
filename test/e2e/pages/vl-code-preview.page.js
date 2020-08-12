const VlCodePreview = require('../components/vl-code-preview');
const {Page, Config} = require('vl-ui-core').Test;

class VlCodePreviewPage extends Page {
  async getCodePreview() {
    return this._getCodePreview('vl-code-preview');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-code-preview.html');
  }

  async _getCodePreview(selector) {
    return new VlCodePreview(this.driver, selector);
  }
}

module.exports = VlCodePreviewPage;
