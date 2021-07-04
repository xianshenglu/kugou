import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_ORIGIN } from '../constants/index';

export type SingerCategory = {
  path: string;
  classid: number;
  classname: string;
};
type SingerCategoryResponse = {
  list: SingerCategory[];
};
@Injectable({
  providedIn: 'root',
})
export class SingerCategoryService {
  singerCategoryUrl = `${BASE_ORIGIN}/singer/class&json=true`;

  constructor(private http: HttpClient) {}

  async fetchSingerCategory() {
    const { list } = await this.http
      .get<SingerCategoryResponse>(this.singerCategoryUrl)
      .toPromise();

    const singerCategories = list.reduce(
      (
        re: {
          data: SingerCategory[];
          category: string;
        }[],
        obj
      ) => {
        obj.path = `/singer/list/${obj.classid}`;
        const findCategories = re.find(
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
