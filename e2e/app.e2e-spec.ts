import { HerosAppPage } from './app.po';

describe('heros-app App', function() {
  let page: HerosAppPage;

  beforeEach(() => {
    page = new HerosAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
