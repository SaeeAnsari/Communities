import { CommunitiesPage } from './app.po';

describe('communities App', function() {
  let page: CommunitiesPage;

  beforeEach(() => {
    page = new CommunitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
