import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMusicListComponent } from './my-music-list.component';

describe('MyMusicListComponent', () => {
  let component: MyMusicListComponent;
  let fixture: ComponentFixture<MyMusicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMusicListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
