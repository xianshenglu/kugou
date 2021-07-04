import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RankListService, RankListResponse } from './rank-list.service';

describe('RankListService', () => {
  let service: RankListService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RankListService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchRankList return expected transformed data', () => {
    const mockResponse = {
      rank: {
        list: [{ imgurl: '/{size}/', rankid: '123', rankname: 'name' }],
      },
    };
    const expectedResponse: RankListResponse['rank']['list'] = [
      {
        imgurl: '/{size}/',
        rankid: '123',
        rankname: 'name',
        imgUrl: '/400/',
        path: '/rank/info/123',
        title: 'name',
      },
    ];

    service.fetchRankList().then((result) => {
      expect(result).toEqual(expectedResponse);
    });

    const reqMatches = httpTestingController.match((req) =>
      req.urlWithParams.includes(service.rankListUrl)
    );

    reqMatches[0].flush(mockResponse);
  });
});
