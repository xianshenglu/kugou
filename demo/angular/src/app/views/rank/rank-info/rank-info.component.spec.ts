import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankInfoComponent } from './rank-info.component';

describe('RankInfoComponent', () => {
  let component: RankInfoComponent;
  let fixture: ComponentFixture<RankInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
