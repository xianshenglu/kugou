import { test } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('song-list-info', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);

    await page.navigateToSongListInfo();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-song-list-info"] [test-id^="music-item"]'
    );
    await waitForListRendered(dataListLocators);
  });
});

