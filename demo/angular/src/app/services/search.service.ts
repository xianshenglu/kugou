import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KU_GOU_MOBILE_CDN_ORIGIN } from '../constants/index';

type SearchResponse = {
  data: { info: { keyword: string }[] };
};
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  async fetchSearchResult(keyword: string) {
    const response = await this.http
      .get<SearchResponse>(
        `${KU_GOU_MOBILE_CDN_ORIGIN}/api/v3/search/song/&format=json&page=1&pagesize=20&showtype=1&keyword=${keyword}`
      )
      .toPromise();
    return response.data;
  }

  async fetchHotSearch() {
    const response = await this.http
      .get<SearchResponse>(
        `${KU_GOU_MOBILE_CDN_ORIGIN}/api/v3/search/hot&format=json&plat=0&count=30`
      )
      .toPromise();
    return response.data.info;
  }
}
