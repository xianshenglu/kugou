import { Page, Locator } from '@playwright/test';

const NO_LIST_ITEM_ERROR_TIP =
  "data list is not rendered, so can't go to info page";

export class AppPage {
  private baseURL: string;

  constructor(private page: Page) {
    this.baseURL = this.getBaseURL();
  }

  private getBaseURL(): string {
    const context = this.page.context();
    const options = (context as any)._options || (context as any).options;
    if (!options?.baseURL) {
      throw new Error('baseURL is not set');
    }
    return options.baseURL;
  }

  get navLinks(): Locator {
    return this.page.locator('[test-id^="nav-link"]');
  }

  get baseUrl(): string {
    return this.baseURL;
  }

  async returnHome(): Promise<void> {
    await this.navigateTo();
  }

  async navigateTo(url?: string): Promise<void> {
    if (url) {
      await this.page.goto(url);
    } else {
      await this.page.goto(this.baseURL);
    }
  }

  async navigateToRankList(): Promise<void> {
    await this.returnHome();
    await this.navLinks.nth(1).click();
  }

  async navigateToRankInfo(rankListLocator?: Locator): Promise<void> {
    await this.navigateToRankList();

    if (rankListLocator === undefined) {
      const elLocators = this.page.locator(
        '[test-id="page-rank-list"] [test-class="list"] [test-class="link"]'
      );
      await elLocators.first().waitFor({ state: 'visible', timeout: 4000 });
      rankListLocator = elLocators.first();
    }

    await rankListLocator.click();
  }

  async navigateToSongList(): Promise<void> {
    await this.returnHome();
    await this.navLinks.nth(2).click();
  }

  async navigateToSongListInfo(songListLocator?: Locator): Promise<void> {
    await this.navigateToSongList();

    if (songListLocator === undefined) {
      const elLocators = this.page.locator(
        '[test-id="page-song-list"] [test-class="list"] [test-class="link"]'
      );
      await elLocators.first().waitFor({ state: 'visible', timeout: 4000 });
      songListLocator = elLocators.first();
    }

    await songListLocator.click();
  }

  async navigateToSingerCategory(): Promise<void> {
    await this.returnHome();
    await this.navLinks.nth(3).click();
  }

  async navigateToSingerList(singerCategory?: Locator): Promise<void> {
    await this.navigateToSingerCategory();

    if (singerCategory === undefined) {
      const elLocators = this.page.locator(
        '[test-id="page-singer-category"] [test-class="link"]'
      );
      await elLocators.first().waitFor({ state: 'visible', timeout: 4000 });
      singerCategory = elLocators.first();
    }

    await singerCategory.click();
  }

  async navigateToSingerInfo(
    singerCategory?: Locator,
    singerList?: Locator
  ): Promise<void> {
    await this.navigateToSingerList(singerCategory);
    if (singerList === undefined) {
      const elLocators = this.page.locator(
        '[test-id="page-singer-list"] [test-class="link"]'
      );
      await elLocators.first().waitFor({ state: 'visible', timeout: 4000 });
      singerList = elLocators.first();
    }
    await singerList.click();
  }
}

