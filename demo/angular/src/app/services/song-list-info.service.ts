import { BASE_ORIGIN } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type SongListInfoResponse = {
  info: {
    list: {
      imgurl: string;
      specialname: string;
      intro: string;
    };
  };
  list: { list: { info: [] } };
};
@Injectable({
  providedIn: 'root',
})
export class SongListInfoService {
  constructor(private http: HttpClient) {}

  async fetchSongListInfo(songListId: string) {
    const response = await this.http
      .get<SongListInfoResponse>(
        BASE_ORIGIN + `/plist/list/${songListId}&json=true`
      )
      .toPromise();
    const { info, list } = response;
    return {
      info,
      songs: list,
    };
  }
}
