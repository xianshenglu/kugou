import { test } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('singer-info', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);

    await page.navigateToSingerInfo();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-singer-info"] [test-id^="music-item"]'
    );
    await waitForListRendered(dataListLocators);
  });
});

