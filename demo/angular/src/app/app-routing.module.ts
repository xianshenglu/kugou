import { RankInfoComponent } from './views/rank/rank-info/rank-info.component';
import { SingerCategoryComponent } from './views/singer/singer-category/singer-category.component';
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
      {
        path: 'singer/category',
        component: SingerCategoryComponent,
      },
    ],
  },
  {
    path: 'rank/info/:rankId',
    component: RankInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
