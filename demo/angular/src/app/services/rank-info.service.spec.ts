import { TestBed } from '@angular/core/testing';

import { RankInfoService } from './rank-info.service';

describe('RankInfoService', () => {
  let service: RankInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
