import { expectNoErrorLog } from './common/index';
import { browser, $, ExpectedConditions } from 'protractor';
import { AppPage } from './app.po';

describe('header ', () => {
  let page: AppPage;

  beforeEach(async (done) => {
    page = new AppPage();
    await page.returnHome();
    done();
  });

  const goBackBtn = $('[test-id="go-back-btn"]');

  it('should display go-back button', async () => {
    expect(await goBackBtn.isPresent()).toBe(true);
  });

  it('should go-back button work', async () => {
    const prevUrl = await browser.getCurrentUrl();
    await goBackBtn.click();
    const curUrl = await browser.getCurrentUrl();
    const isUrlExpected =
      prevUrl !== curUrl ||
      [prevUrl, curUrl].every((v) => v === browser.baseUrl);
    expect(isUrlExpected).toBe(true);
  });

  const searchBtn = $('[test-id="search-btn"]');

  it('should display search button', async () => {
    expect(await searchBtn.isPresent()).toBe(true);
  });

  it('should search button work', async () => {
    await searchBtn.click();
    expect(await browser.getCurrentUrl()).toContain('/search/index');
  });

  const logo = $('[test-id="logo-link"]');

  it('should display logo-link', async () => {
    expect(await logo.isPresent()).toBe(true);
  });

  it('should logo-link work', async () => {
    await logo.click();
    expect(await browser.getCurrentUrl()).toContain(browser.baseUrl);
  });

  afterEach(async () => {
    expectNoErrorLog();
    page.returnHome();
  });
});
