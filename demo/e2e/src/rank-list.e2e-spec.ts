import { test, expect } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('rank-list', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.navigateToRankList();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-rank-list"] [test-class="list"]'
    );
    await waitForListRendered(dataListLocators);
  });

  test('should navigate to rank/info after click >', async ({ page: playwrightPage }) => {
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-rank-list"] [test-class="list"]'
    );
    const firstListItemLink = dataListLocators
      .first()
      .locator('[test-class="link"]');
    const targetHref = await firstListItemLink.getAttribute('href');
    await firstListItemLink.click();
    if (targetHref) {
      await expect(playwrightPage).toHaveURL(new RegExp(targetHref.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    }
  });
});

