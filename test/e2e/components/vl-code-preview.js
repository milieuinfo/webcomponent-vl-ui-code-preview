const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlCodePreview extends VlElement {
  async getText() {
    const code = await this._getCodeElement();
    return code.getText();
  }

  async _getCodeElement() {
    const element = await this.shadowRoot.findElement(By.css('code'));
    return new VlElement(this.driver, element);
  }
}

module.exports = VlCodePreview;
