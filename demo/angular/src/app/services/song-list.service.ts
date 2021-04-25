import { BASE_ORIGIN } from 'src/app/constants/index';
import {replaceSizeInUrl}from 'src/app/utils';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
type SongListResponse = {
  plist: {
    list: {
      info: SongItem[];
    };
  };
};
type SongItem = {
  imgurl: string;
  imgUrl: string;
  specialid: string;
  path: string;
  specialname: string;
  title: string;
  playcount: number;
  popularity: number;
};
@Injectable({
  providedIn: 'root',
})
export class SongListService {
  constructor(private http: HttpClient) {}

  async fetchSongList(params = {}) {
    const response = await this.http
      .get<SongListResponse>(BASE_ORIGIN + '/plist/index&json=true')
      .toPromise();
    const {
      plist: {
        list: { info },
      },
    } = response;
    info.forEach((obj) => {
      obj.imgUrl = replaceSizeInUrl(obj.imgurl);
      obj.path = '/song/list/' + obj.specialid;
      obj.title = obj.specialname;
      obj.popularity = obj.playcount;
    });
    return info;
  }
}
