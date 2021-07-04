import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { SongListInfoService } from './song-list-info.service';

describe('SongListInfoService', () => {
  let service: SongListInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SongListInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
