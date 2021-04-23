import replaceSizeInUrl from 'src/app/utils/replaceSizeInUrl';
import { BASE_ORIGIN } from 'src/app/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
type SingerListResponse = {
  classid: string;
  classname: string;
  singers: {
    list: {
      info: {
        singerid: string;
        singername: string;
        imgurl: string;
        id: string;
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
  constructor(private http: HttpClient) {}

  async fetchSingerList(singerListId: string) {
    const response = await this.http
      .get<SingerListResponse>(
        BASE_ORIGIN + '/singer/list/&json=true&singerListId=' + singerListId
      )
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
      obj.path = '/singer/info/' + obj.id;
    });
    return {
      info: {
        id: classid,
        name: classname,
        count: singers.total,
      },
      data: singers.list.info,
    };
  }
}
