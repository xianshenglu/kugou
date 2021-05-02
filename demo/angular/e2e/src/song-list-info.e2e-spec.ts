import { expectNoErrorLog, waitForListRendered } from './common/index';
import { browser, $$ } from 'protractor';
import { AppPage } from './app.po';

describe('song-list-info', () => {
  let page: AppPage;
  const dataListFinders = $$(
    '[test-id="page-song-list-info"] [test-id^="music-item"]'
  );
  beforeEach(async (done) => {
    page = new AppPage();

    await page.navigateToSongListInfo();
    await waitForListRendered(dataListFinders);

    done();
  });

  afterEach(async () => {
    expectNoErrorLog();
  });

  afterAll(() => {
    page.returnHome();
  });
});
