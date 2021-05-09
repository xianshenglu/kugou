import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListInfoComponent } from './song-list-info.component';

describe('SongListInfoComponent', () => {
  let component: SongListInfoComponent;
  let fixture: ComponentFixture<SongListInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongListInfoComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
