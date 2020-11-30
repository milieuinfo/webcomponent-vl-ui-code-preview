const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlCodePreviewPage = require('./pages/vl-code-preview.page');

describe('vl-code-preview', async () => {
  let vlCodePreviewPage;

  before(() => {
    vlCodePreviewPage = new VlCodePreviewPage(getDriver());
    return vlCodePreviewPage.load();
  });

  it('als gebruiker kan ik de code preview bekijken', async () => {
    const element = await vlCodePreviewPage.getCodePreview();
    const text = await element.getText();
    await assert.include(text, '<h3>This is a title</h3>');
    await assert.include(text, '<h2>This is a subtitle</h2>');
    await assert.include(text, '<p>test</p>');
    await assert.include(text, '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam impedit dolor maxime incidunt eos labore aut delectus, omnis repellat officia id dolores, magni velit beatae similique ex optio enim, nulla.</p>');
    await assert.include(text, '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>');
  });
});
