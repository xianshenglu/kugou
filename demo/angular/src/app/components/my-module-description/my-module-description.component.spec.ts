import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleDescriptionComponent } from './my-module-description.component';

describe('MyModuleDescriptionComponent', () => {
  let component: MyModuleDescriptionComponent;
  let fixture: ComponentFixture<MyModuleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyModuleDescriptionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModuleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
