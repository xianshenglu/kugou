import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SongListService } from './song-list.service';

describe('SongListService', () => {
  let service: SongListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SongListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
