import { AutoFillPage } from './app.po';

describe('auto-fill App', () => {
  let page: AutoFillPage;

  beforeEach(() => {
    page = new AutoFillPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
