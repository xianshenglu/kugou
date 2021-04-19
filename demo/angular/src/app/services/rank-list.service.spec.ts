import { TestBed } from '@angular/core/testing';

import { RankListService } from './rank-list.service';

describe('RankListService', () => {
  let service: RankListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
