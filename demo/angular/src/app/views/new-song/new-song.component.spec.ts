import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSongComponent } from './new-song.component';

describe('NewSongComponent', () => {
  let component: NewSongComponent;
  let fixture: ComponentFixture<NewSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewSongComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
