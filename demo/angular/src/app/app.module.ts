import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSongComponent } from './views/new-song/new-song.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './views/new-song/slider/slider.component';
import { MyMusicListComponent } from './components/my-music-list/my-music-list.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { MyMainComponent } from './components/my-main/my-main.component';
import { RankListComponent } from './views/rank/rank-list/rank-list.component';
import { MyCardListComponent } from './components/my-card-list/my-card-list.component';
import { SongListComponent } from './views/song/song-list/song-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NewSongComponent,
    SliderComponent,
    MyMusicListComponent,
    MyHeaderComponent,
    MyNavComponent,
    MyMainComponent,
    RankListComponent,
    MyCardListComponent,
    SongListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
