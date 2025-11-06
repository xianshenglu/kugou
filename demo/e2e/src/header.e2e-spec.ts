import { test, expect } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('header', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.returnHome();
  });

  test('should display go-back button', async ({ page: playwrightPage }) => {
    const goBackBtn = playwrightPage.locator('[test-id="go-back-btn"]');
    await expect(goBackBtn).toBeVisible();
  });

  test('should go-back button work', async ({ page: playwrightPage }) => {
    const searchBtn = playwrightPage.locator('[test-id="search-btn"]');
    await searchBtn.click();
    const prevUrl = playwrightPage.url();
    const goBackBtn = playwrightPage.locator('[test-id="go-back-btn"]');
    await goBackBtn.click();
    const curUrl = playwrightPage.url();
    const baseURL = page.baseUrl;
    const basePath = baseURL.replace(/\/[^/]*\.(html|htm)$/, '').replace(/\/$/, '');
    const isUrlExpected =
      prevUrl !== curUrl ||
      [prevUrl, curUrl].every((v) => {
        const urlWithoutHash = v.split('#')[0].replace(/\/$/, '');
        return urlWithoutHash === basePath || urlWithoutHash === basePath + '/';
      });
    expect(isUrlExpected).toBe(true);
  });

  test('should display search button', async ({ page: playwrightPage }) => {
    const searchBtn = playwrightPage.locator('[test-id="search-btn"]');
    await expect(searchBtn).toBeVisible();
  });

  test('should search button work', async ({ page: playwrightPage }) => {
    const searchBtn = playwrightPage.locator('[test-id="search-btn"]');
    await searchBtn.click();
    await expect(playwrightPage).toHaveURL(/\/search\/index/);
  });

  test('should display logo-link', async ({ page: playwrightPage }) => {
    const logo = playwrightPage.locator('[test-id="logo-link"]');
    await expect(logo).toBeVisible();
  });

  test('should logo-link work', async ({ page: playwrightPage }) => {
    const logo = playwrightPage.locator('[test-id="logo-link"]');
    await logo.click();
    const baseURL = page.baseUrl;
    const basePath = baseURL.replace(/\/[^/]*\.(html|htm)$/, '').replace(/\/$/, '');
    const escapedBasePath = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    await expect(playwrightPage).toHaveURL(new RegExp(`^${escapedBasePath}/(index.html)?#/?$`));
  });

  test.afterEach(async ({ page: playwrightPage }) => {
    const appPage = new AppPage(playwrightPage);
    await appPage.returnHome();
  });
});

