import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SingerListService } from './singer-list.service';

describe('SingerListService', () => {
  let service: SingerListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SingerListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetchSingerList return expected transformed data', () => {
    const mockResponse = {
      classid: 0,
      classname: '热门歌手',
      singers: {
        list: {
          total: 471840,
          info: [
            {
              singerid: 3520,
              singername: '周杰伦',
              imgurl:
                'http://singerimg.kugou.com/uploadpic/softhead/{size}/20180515/20180515002522714.jpg',
              id: 3520,
            },
          ],
        },
      },
    };
    const expectedResponse = {
      info: {
        id: 0,
        name: '热门歌手',
        count: 471840,
      },
      data: [
        {
          singerid: 3520,
          singername: '周杰伦',
          imgurl:
            'http://singerimg.kugou.com/uploadpic/softhead/{size}/20180515/20180515002522714.jpg',
          id: 3520,
          name: '周杰伦',
          imgUrl:
            'http://singerimg.kugou.com/uploadpic/softhead/400/20180515/20180515002522714.jpg',
          path: '/singer/info/3520',
        },
      ],
    };

    const singerListId = 88;
    service.fetchSingerList(String(singerListId)).then((result) => {
      expect(result).toEqual(expectedResponse);
    });
    const reqMatches = httpTestingController.match((req) =>
      req.urlWithParams.includes(`${service.singerListUrl}${singerListId}`)
    );

    reqMatches[0].flush(mockResponse);
  });
});
