import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerCategoryComponent } from './singer-category.component';

describe('SingerCategoryComponent', () => {
  let component: SingerCategoryComponent;
  let fixture: ComponentFixture<SingerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingerCategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
