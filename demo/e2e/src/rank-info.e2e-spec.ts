import { test } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('rank-info', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);

    await page.navigateToRankInfo();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-rank-info"] [test-id^="music-item"]'
    );
    await waitForListRendered(dataListLocators);
  });
});

