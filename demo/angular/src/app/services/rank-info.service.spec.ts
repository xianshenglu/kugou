import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { RankInfoService, RankInfoResponse } from './rank-info.service';

describe('RankInfoService', () => {
  let service: RankInfoService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RankInfoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetchRankInfo return expected transformed data', () => {
    const rankId = 'rankId';

    const mockResponse = {
      info: {
        banner7url: '',
        rankname: '',
      },
      songs: {
        list: [{}],
        timestamp: 1,
      },
    };
    const expectedResponse: RankInfoResponse = {
      info: {
        banner7url: '',
        rankname: '',
      },
      songs: {
        list: [{ index: 0 }],
        timestamp: 1,
      },
    };

    service.fetchRankInfo(rankId).then((result) => {
      expect(result).toEqual(expectedResponse);
    });

    const reqMatches = httpTestingController.match(
      (req) => req.urlWithParams === service.rankInfoUrl + rankId
    );

    reqMatches[0].flush(mockResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
