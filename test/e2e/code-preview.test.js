/* eslint-disable no-unused-vars */
const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlCodePreviewPage = require('./pages/vl-code-preview.page');

describe('vl-code-preview', async () => {
  const vlCodePreviewPage = new VlCodePreviewPage(driver);

  before(() => {
    return vlCodePreviewPage.load();
  });

  it('', async () => {
  });
});
