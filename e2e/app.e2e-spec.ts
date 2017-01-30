import { AngularStudy1Page } from './app.po';

describe('angular-study1 App', function() {
  let page: AngularStudy1Page;

  beforeEach(() => {
    page = new AngularStudy1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Study1 works!');
  });
});
