import { PoptinBuilderPage } from './app.po';

describe('poptin-builder App', () => {
  let page: PoptinBuilderPage;

  beforeEach(() => {
    page = new PoptinBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
