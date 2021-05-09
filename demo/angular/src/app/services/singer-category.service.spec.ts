import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SingerCategoryService } from './singer-category.service';

describe('SingerCategoryService', () => {
  let service: SingerCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SingerCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
