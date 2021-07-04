import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(async (done) => {
    page = new AppPage();
    await page.returnHome();
    done();
  });

  afterAll(() => {
    page.returnHome();
  });
});
