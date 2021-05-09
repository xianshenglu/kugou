import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PlayerService } from 'src/app/services/player.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMusicListComponent } from './my-music-list.component';

describe('MyMusicListComponent', () => {
  let component: MyMusicListComponent;
  let fixture: ComponentFixture<MyMusicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMusicListComponent],
      imports: [HttpClientTestingModule],
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
