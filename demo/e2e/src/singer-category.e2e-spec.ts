import { test, expect } from '@playwright/test';
import { waitForListRendered } from './common/index';
import { AppPage } from './app.po';

test.describe('singer-category', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);

    await page.navigateToSingerCategory();
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-singer-category"] [test-class="list"]'
    );
    await waitForListRendered(dataListLocators);
  });

  test('should navigate to singer/list after click >', async ({ page: playwrightPage }) => {
    const dataListLocators = playwrightPage.locator(
      '[test-id="page-singer-category"] [test-class="list"]'
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

