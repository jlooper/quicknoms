import { QuicknomsWebPage } from './app.po';

describe('quicknoms-web App', function() {
  let page: QuicknomsWebPage;

  beforeEach(() => {
    page = new QuicknomsWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
