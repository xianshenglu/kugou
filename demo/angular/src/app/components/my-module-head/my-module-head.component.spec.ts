import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleHeadComponent } from './my-module-head.component';

describe('MyModuleHeadComponent', () => {
  let component: MyModuleHeadComponent;
  let fixture: ComponentFixture<MyModuleHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModuleHeadComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModuleHeadComponent);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
