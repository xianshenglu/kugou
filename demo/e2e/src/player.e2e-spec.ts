import { test, expect } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('player', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.returnHome();
    await playwrightPage.waitForLoadState('networkidle');
    await playwrightPage.waitForSelector('[test-id="page-new-song"]', { timeout: 10000 });
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-new-song"] [test-id^="music-item"]'
    );
    await waitForListRendered(dataListLocators, { timeout: 20000 });
  });

  test('should show mini player after clicking first song and show max player after clicking mini player', async ({ page: playwrightPage }) => {
    const firstSong = playwrightPage.locator(
      '[test-id="page-new-song"] [test-id^="music-item"]'
    ).first();
    
    await expect(firstSong).toBeVisible({ timeout: 10000 });
    
    const firstSongInfo = firstSong.locator('[test-id^="music-item-info-"]');
    const hasMusicItemInfo = await firstSongInfo.count() > 0;
    
    if (hasMusicItemInfo) {
      await firstSongInfo.click();
    } else {
      await firstSong.click();
    }
    
    await playwrightPage.waitForTimeout(1000);
    
    const miniPlayer = playwrightPage.locator('[test-id="player-med"]');
    await expect(miniPlayer).toBeVisible({ timeout: 15000 });
    
    const miniPlayerLink = playwrightPage.locator('[test-id="player-med-link"]');
    await miniPlayerLink.click();
    
    await expect(playwrightPage).toHaveURL(/\/player\/max/);
    
    const maxPlayer = playwrightPage.locator('[test-id="player-max"]');
    await expect(maxPlayer).toBeVisible();
    
    const songTitle = playwrightPage.locator('[test-id="player-max-song-name"]');
    await expect(songTitle).toBeVisible();
    
    const lyrics = playwrightPage.locator('[test-id="player-max-lyrics"]');
    await expect(lyrics).toBeVisible();
    
    const progress = playwrightPage.locator('[test-id="player-max-progress"]');
    await expect(progress).toBeVisible();
  });
});

