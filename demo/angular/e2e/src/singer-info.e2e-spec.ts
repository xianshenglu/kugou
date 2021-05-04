import { $$ } from 'protractor';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

describe('singer-info', () => {
  let page: AppPage;
  const dataListFinders = $$(
    '[test-id="page-singer-info"] [test-id^="music-item"]'
  );
  beforeEach(async (done) => {
    page = new AppPage();

    await page.navigateToSingerInfo();
    await waitForListRendered(dataListFinders);

    done();
  });

  afterAll(() => {
    page.returnHome();
  });
});
