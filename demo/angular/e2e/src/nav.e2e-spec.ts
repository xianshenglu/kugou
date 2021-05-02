import { expectNoErrorLog } from './common/index';
import { $$, browser } from 'protractor';
import { AppPage } from './app.po';

describe('nav', () => {
  let page: AppPage;
  const navBtns = $$('[test-id^="nav-link"]');

  beforeEach(async (done) => {
    page = new AppPage();
    await page.returnHome();
    done();
  });

  it('should display 4 nav-link', async () => {
    expect(await navBtns.count()).toBe(4);
  });

  it('should the first nav navigate correctly', async () => {
    await navBtns.get(0).click();
    expect(await browser.getCurrentUrl()).toContain('/');
  });

  it('should the second nav navigate correctly', async () => {
    await navBtns.get(1).click();
    expect(await browser.getCurrentUrl()).toContain('/rank/list');
  });

  it('should the third nav navigate correctly', async () => {
    await navBtns.get(2).click();
    expect(await browser.getCurrentUrl()).toContain('/song/list');
  });

  it('should the fourth nav navigate correctly', async () => {
    await navBtns.get(3).click();
    const currentUrl = await browser.getCurrentUrl();
    // can't use code below because it always return true
    //  expect(browser.getCurrentUrl()).toContain('1/singer/category');
    expect(await browser.getCurrentUrl()).toContain('/singer/category');
  });

  afterEach(async () => {
    expectNoErrorLog();
  });
  afterAll(async () => {
    page.returnHome();
  });
});
