import { browser, $$, $, ElementFinder } from 'protractor';
const NO_LIST_ITEM_ERROR_TIP =
  "data list is not rendered, so can't go to info page";

export class AppPage {
  navLinks = $$('[test-id^="nav-link"]');
  async returnHome(): Promise<unknown> {
    return this.navigateTo();
  }
  async navigateTo(url = browser.baseUrl): Promise<unknown> {
    return browser.get(url);
  }
  async navigateToRankList() {
    await this.returnHome();
    await this.navLinks.get(1).click();
  }
  async navigateToRankInfo(rankListLocator?: ElementFinder) {
    await this.navigateToRankList();

    if (rankListLocator === undefined) {
      const elFinders = $$(
        '[test-id="page-rank-list"] [test-class="list"] [test-class="link"]'
      );
      const hasList = async () => {
        const count = await elFinders.count();
        return count > 0;
      };
      browser.wait(hasList, 4000, NO_LIST_ITEM_ERROR_TIP);
      rankListLocator = elFinders.get(0);
    }

    await rankListLocator.click();
  }
  async navigateToSongList() {
    await this.returnHome();
    await this.navLinks.get(2).click();
  }
  async navigateToSongListInfo(songListFinder?: ElementFinder) {
    await this.navigateToSongList();

    if (songListFinder === undefined) {
      const hasList = async () =>
        (await $$(
          '[test-id="page-song-list"] [test-class="list"] [test-class="link"]'
        ).count()) > 0;
      browser.wait(hasList, 4000, NO_LIST_ITEM_ERROR_TIP);
      songListFinder = $(
        '[test-id="page-song-list"] [test-class="list"] [test-class="link"]'
      );
    }

    await songListFinder.click();
  }
  async navigateToSingerCategory() {
    await this.returnHome();
    await this.navLinks.get(3).click();
  }
  async navigateToSingerList(singerCategory?: ElementFinder) {
    await this.navigateToSingerCategory();

    if (singerCategory === undefined) {
      const hasList = async () =>
        (await $$(
          '[test-id="page-singer-category"] [test-class="link"]'
        ).count()) > 0;
      browser.wait(hasList, 4000, NO_LIST_ITEM_ERROR_TIP);
      singerCategory = $(
        '[test-id="page-singer-category"] [test-class="link"]'
      );
    }

    await singerCategory.click();
  }
  async navigateToSingerInfo(
    singerCategory?: ElementFinder,
    singerList?: ElementFinder
  ) {
    await this.navigateToSingerList(singerCategory);
    if (singerList === undefined) {
      const hasList = async () =>
        (await $$('[test-id="page-singer-list"] [test-class="link"]').count()) >
        0;
      browser.wait(hasList, 4000, NO_LIST_ITEM_ERROR_TIP);
      singerList = $('[test-id="page-singer-list"] [test-class="link"]');
    }
    await singerList.click();
  }
}
