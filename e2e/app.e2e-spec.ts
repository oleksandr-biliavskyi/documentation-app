import { DocumentationAppPage } from './app.po';

describe('documentation-app App', () => {
  let page: DocumentationAppPage;

  beforeEach(() => {
    page = new DocumentationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
