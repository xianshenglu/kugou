import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMuduleHeadComponent } from './my-module-head.component';

describe('MyMuduleHeadComponent', () => {
  let component: MyMuduleHeadComponent;
  let fixture: ComponentFixture<MyMuduleHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMuduleHeadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMuduleHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
