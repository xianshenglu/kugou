import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardListComponent } from './my-card-list.component';

describe('MyCardListComponent', () => {
  let component: MyCardListComponent;
  let fixture: ComponentFixture<MyCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
