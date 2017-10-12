import { SvgSpinnerPage } from './app.po';

describe('svg-spinner App', function() {
  let page: SvgSpinnerPage;

  beforeEach(() => {
    page = new SvgSpinnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
