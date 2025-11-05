import { test } from '@playwright/test';
import { AppPage } from './app.po';

test.describe('App', () => {
  let page: AppPage;

  test.beforeEach(async ({ page: playwrightPage }) => {
    page = new AppPage(playwrightPage);
    await page.returnHome();
  });
});

