import { TestBed } from '@angular/core/testing';

import { SingerCategoryService } from './singer-category.service';

describe('SingerCategoryService', () => {
  let service: SingerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
