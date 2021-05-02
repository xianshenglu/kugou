import { expectNoErrorLog, waitForListRendered } from './common/index';
import { browser, $$ } from 'protractor';
import { AppPage } from './app.po';

describe('singer-list', () => {
  let page: AppPage;
  const dataListFinders = $$(
    '[test-id="page-singer-list"] [test-class="list"]'
  );
  beforeEach(async (done) => {
    page = new AppPage();

    await page.navigateToSingerList();
    await waitForListRendered(dataListFinders);

    done();
  });

  it('should navigate to singer/info after click >', async () => {
    const firstListItemLink = dataListFinders.get(0).$('[test-class="link"]');
    const targetHref = await firstListItemLink.getAttribute('href');
    await firstListItemLink.click();
    expect(await browser.getCurrentUrl()).toContain(targetHref);
  });

  afterEach(async () => {
    expectNoErrorLog();
  });

  afterAll(() => {
    page.returnHome();
  });
});
