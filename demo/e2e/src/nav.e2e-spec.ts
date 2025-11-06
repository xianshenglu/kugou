import { test, expect } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('nav', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.returnHome();
  });

  test('should display 4 nav-link', async ({ page: playwrightPage }) => {
    const navBtns = playwrightPage.locator('[test-id^="nav-link"]');
    await expect(navBtns).toHaveCount(4);
  });

  test('should the first nav navigate correctly', async ({ page: playwrightPage }) => {
    const navBtns = playwrightPage.locator('[test-id^="nav-link"]');
    await navBtns.nth(0).click();
    await expect(playwrightPage).toHaveURL(/\/$/);
  });

  test('should the second nav navigate correctly', async ({ page: playwrightPage }) => {
    const navBtns = playwrightPage.locator('[test-id^="nav-link"]');
    await navBtns.nth(1).click();
    await expect(playwrightPage).toHaveURL(/\/rank\/list/);
  });

  test('should the third nav navigate correctly', async ({ page: playwrightPage }) => {
    const navBtns = playwrightPage.locator('[test-id^="nav-link"]');
    await navBtns.nth(2).click();
    await expect(playwrightPage).toHaveURL(/\/song\/list/);
  });

  test('should the fourth nav navigate correctly', async ({ page: playwrightPage }) => {
    const navBtns = playwrightPage.locator('[test-id^="nav-link"]');
    await navBtns.nth(3).click();
    await expect(playwrightPage).toHaveURL(/\/singer\/category/);
  });
});

