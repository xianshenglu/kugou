import { BASE_ORIGIN } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
type RankInfoResponse = {
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
  constructor(private http: HttpClient) {}

  async fetchRankInfo(rankId: string) {
    const response = await this.http
      .get<RankInfoResponse>(
        BASE_ORIGIN + '/rank/info/&json=true&page=1&rankid=' + rankId
      )
      .toPromise();
    response.songs.list.forEach((obj, index) => {
      obj.index = index;
    });
    return response;
  }
}
