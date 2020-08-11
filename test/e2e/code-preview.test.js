const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlCodePreviewPage = require('./pages/vl-code-preview.page');

describe('vl-code-preview', async () => {
  const vlCodePreviewPage = new VlCodePreviewPage(driver);

  before(() => {
    return vlCodePreviewPage.load();
  });

  it('als gebruiker kan ik de code preview bekijken', async () => {
    const element = await vlCodePreviewPage.getCodePreview();
    await assert.eventually.equal(element.getText(), 'test');
  });
});
