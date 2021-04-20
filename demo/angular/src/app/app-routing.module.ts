import { SongListComponent } from './views/song/song-list/song-list.component';
import { RankListComponent } from './views/rank/rank-list/rank-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMainComponent } from './components/my-main/my-main.component';
import { NewSongComponent } from './views/new-song/new-song.component';

const routes: Routes = [
  {
    path: '',
    component: MyMainComponent,
    children: [
      {
        path: '',
        component: NewSongComponent,
      },
      {
        path: 'rank/list',
        component: RankListComponent,
      },
      {
        path: 'song/list',
        component: SongListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
