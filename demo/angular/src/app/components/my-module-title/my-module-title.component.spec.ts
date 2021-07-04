import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleTitleComponent } from './my-module-title.component';

describe('MyModuleTitleComponent', () => {
  let component: MyModuleTitleComponent;
  let fixture: ComponentFixture<MyModuleTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModuleTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModuleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
