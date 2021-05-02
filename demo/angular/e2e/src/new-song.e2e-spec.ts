import { expectNoErrorLog, waitForListRendered } from './common/index';
import { browser, $$, $ } from 'protractor';
import { AppPage } from './app.po';

describe('new-song', () => {
  let page: AppPage;
  const dataListFinders = $$(
    '[test-id="page-new-song"] [test-id^="music-item"]'
  );
  beforeEach(async (done) => {
    page = new AppPage();

    await page.returnHome();
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
