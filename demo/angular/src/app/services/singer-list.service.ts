import { replaceSizeInUrl } from 'src/app/utils';
import { BASE_ORIGIN } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type SingerListResponse = {
  classid: number;
  classname: string;
  singers: {
    list: {
      total: number;
      info: {
        singerid: number;
        singername: string;
        imgurl: string;
        id: number;
        name: string;
        imgUrl: string;
        path: string;
      }[];
    };
    total: number;
  };
};
@Injectable({
  providedIn: 'root',
})
export class SingerListService {
  singerListUrl = `${BASE_ORIGIN}/singer/list/&json=true&singerListId=`;

  constructor(private http: HttpClient) {}

  async fetchSingerList(singerListId: string) {
    const response = await this.http
      .get<SingerListResponse>(`${this.singerListUrl}${singerListId}`)
      .toPromise();
    const {
      classid,
      classname,

      singers,
    } = response;
    singers.list.info.forEach((obj) => {
      obj.id = obj.singerid;
      obj.name = obj.singername;
      obj.imgUrl = replaceSizeInUrl(obj.imgurl);
      obj.path = `/singer/info/${obj.id}`;
    });
    return {
      info: {
        id: classid,
        name: classname,
        count: singers.list.total,
      },
      data: singers.list.info,
    };
  }
}
