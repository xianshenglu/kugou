import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RankListService } from './rank-list.service';

describe('RankListService', () => {
  let service: RankListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RankListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
