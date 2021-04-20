import { BASE_ORIGIN } from './../constants/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
type SingerCategoryResponse = {
  list: SingerCategory[];
};
export type SingerCategory = {
  path: string;
  classid: string;
  category: string;
  classname: string;
};
@Injectable({
  providedIn: 'root',
})
export class SingerCategoryService {
  constructor(private http: HttpClient) {}

  async fetchSingerCategory() {
    const { list } = await this.http
      .get<SingerCategoryResponse>(BASE_ORIGIN + '/singer/class&json=true')
      .toPromise();

    const singerCategories = list.reduce(
      (
        re: {
          data: SingerCategory[];
          category: string;
        }[],
        obj
      ) => {
        obj.path = '/singer/list/' + obj.classid;
        let findCategories = re.find(
          (o) => o.category === obj.classname.substring(0, 2)
        );
        if (findCategories) {
          findCategories.data.push(obj);
        } else {
          re.push({
            category: obj.classname.substring(0, 2),
            data: [obj],
          });
        }
        return re;
      },
      []
    );
    return singerCategories;
  }
}
