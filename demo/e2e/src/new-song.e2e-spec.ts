import { test } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('new-song', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);

    await page.returnHome();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-new-song"] [test-id^="music-item"]'
    );
    await waitForListRendered(dataListLocators);
  });
});

