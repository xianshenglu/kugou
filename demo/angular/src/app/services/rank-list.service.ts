import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ORIGIN } from 'src/app/constants';
import replaceSizeInUrl from '../utils/replaceSizeInUrl';
type RankItem = {
  imgurl: string;
  rankid: string;
  rankname: string;
  imgUrl: string;
  path: string;
  title: string;
};
type RankListResponse = {
  rank: {
    list: RankItem[];
  };
};
@Injectable({
  providedIn: 'root',
})
export class RankListService {
  constructor(private http: HttpClient) {}

  async fetchRankList(params = {}): Promise<RankItem[]> {
    const response = await this.http
      .get<RankListResponse>(BASE_ORIGIN + '/rank/list&json=true', {
        params: { ...params },
        observe: 'body',
        responseType: 'json',
      })
      .toPromise();
    response.rank.list.forEach((obj) => {
      obj.imgUrl = replaceSizeInUrl(obj.imgurl);
      obj.path = '/rank/info/' + obj.rankid;
      obj.title = obj.rankname;
    });
    return response.rank.list;
  }
}
