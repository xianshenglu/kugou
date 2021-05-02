import { expectNoErrorLog } from './common/index';
import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(async (done) => {
    page = new AppPage();
    await page.returnHome();
    done();
  });

  afterEach(async () => {
    expectNoErrorLog();
  });

  afterAll(() => {
    page.returnHome();
  });
});
