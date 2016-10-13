import { Ng2PickadateDemoPage } from './app.po';

describe('ng2-pickadate-demo App', function() {
  let page: Ng2PickadateDemoPage;

  beforeEach(() => {
    page = new Ng2PickadateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
