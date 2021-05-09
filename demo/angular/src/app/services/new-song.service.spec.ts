import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NewSongService } from './new-song.service';

describe('NewSongService', () => {
  let service: NewSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
