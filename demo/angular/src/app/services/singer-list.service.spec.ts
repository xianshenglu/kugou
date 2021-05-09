import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SingerListService } from './singer-list.service';

describe('SingerListService', () => {
  let service: SingerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SingerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
