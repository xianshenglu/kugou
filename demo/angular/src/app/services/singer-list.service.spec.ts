import { TestBed } from '@angular/core/testing';

import { SingerListService } from './singer-list.service';

describe('SingerListService', () => {
  let service: SingerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
