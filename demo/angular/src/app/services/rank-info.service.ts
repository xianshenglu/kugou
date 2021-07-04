import { BASE_ORIGIN } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type RankInfoResponse = {
  info: {
    banner7url: string;
    rankname: string;
  };
  songs: {
    list: { index: number }[];
    timestamp: number;
  };
};
@Injectable({
  providedIn: 'root',
})
export class RankInfoService {
  rankInfoUrl = `${BASE_ORIGIN}/rank/info/&json=true&page=1&rankid=`;

  constructor(private http: HttpClient) {}

  async fetchRankInfo(rankId: string) {
    console.log(122, rankId);
    const response = await this.http
      .get<RankInfoResponse>(this.rankInfoUrl + rankId)
      .toPromise();
    response.songs.list.forEach((obj, index) => {
      obj.index = index;
    });
    console.log(12345, response);
    return response;
  }
}
