import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { SingerInfoService } from './singer-info.service';

describe('SingerInfoService', () => {
  let service: SingerInfoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SingerInfoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchSingerInfo return expected transformed data', () => {
    const singerId = '3520';
    service.fetchSingerInfo(singerId).then((result) => {
      const mockResponse = {
        songs: {
          info: {
            singerid: 3520,
            singername: '周杰伦',
            songcount: 992,
            albumcount: 37,
            imgurl:
              'http://singerimg.kugou.com/uploadpic/softhead/{size}/20180515/20180515002522714.jpg',
            intro: '周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市,,,',
          },
          list: [
            {
              filename: '周杰伦 - 晴天',
            },
          ],
        },
      };
      const expectedResponse = {
        info: {
          id: 3520,
          name: '周杰伦',
          count: 992,
          albumcount: 37,
          imgUrl:
            'http://singerimg.kugou.com/uploadpic/softhead/400/20180515/20180515002522714.jpg',
          intro: '周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市,,,',
        },
        data: [
          {
            filename: '周杰伦 - 晴天',
            name: '周杰伦 - 晴天',
          },
        ],
      };

      expect(result).toEqual(expectedResponse);

      const reqMatches = httpTestingController.match((req) =>
        req.urlWithParams.includes(
          `${service.singerInfoUrl}/${singerId}&json=true`
        )
      );

      reqMatches[0].flush(mockResponse);
    });
  });
});
