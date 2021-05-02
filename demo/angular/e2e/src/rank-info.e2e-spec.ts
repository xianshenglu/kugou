import { expectNoErrorLog, waitForListRendered } from './common/index';
import { browser, $$, $ } from 'protractor';
import { AppPage } from './app.po';

describe('rank-info', () => {
  let page: AppPage;
  const dataListFinders = $$(
    '[test-id="page-rank-info"] [test-id^="music-item"]'
  );
  beforeEach(async (done) => {
    page = new AppPage();

    await page.navigateToRankInfo();
    await waitForListRendered(dataListFinders);

    done();
  });

  afterEach(async () => {
    expectNoErrorLog();
  });

  afterAll(() => {
    page.returnHome();
  });
});
