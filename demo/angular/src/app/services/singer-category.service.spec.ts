import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SingerCategoryService } from './singer-category.service';

describe('SingerCategoryService', () => {
  let service: SingerCategoryService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SingerCategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchSingerCategory return expected transformed data', () => {
    const mockResponse = {
      list: [
        {
          classid: 88,
          classname: '热门歌手',
        },
        {
          classid: 1,
          classname: '华语男歌手',
        },
        {
          classid: 2,
          classname: '华语女歌手',
        },
      ],
    };
    const expectedResponse = [
      {
        data: [
          {
            path: '/singer/list/88',
            classid: 88,
            classname: '热门歌手',
          },
        ],
        category: '热门',
      },
      {
        data: [
          {
            path: '/singer/list/1',
            classid: 1,
            classname: '华语男歌手',
          },
          {
            path: '/singer/list/2',
            classid: 2,
            classname: '华语女歌手',
          },
        ],
        category: '华语',
      },
    ];

    service.fetchSingerCategory().then((result) => {
      expect(result).toEqual(expectedResponse);
    });

    const reqMatches = httpTestingController.match((req) =>
      req.urlWithParams.includes(service.singerCategoryUrl)
    );

    reqMatches[0].flush(mockResponse);
  });
});
