import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './views/search/search.component';
import { SingerInfoComponent } from './views/singer/singer-info/singer-info.component';
import { SingerListComponent } from './views/singer/singer-list/singer-list.component';
import { SongListInfoComponent } from './views/song/song-list-info/song-list-info.component';
import { RankInfoComponent } from './views/rank/rank-info/rank-info.component';
import { SingerCategoryComponent } from './views/singer/singer-category/singer-category.component';
import { SongListComponent } from './views/song/song-list/song-list.component';
import { RankListComponent } from './views/rank/rank-list/rank-list.component';
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
  {
    path: 'song/list/:songListId',
    component: SongListInfoComponent,
  },
  {
    path: 'singer/list/:singerListId',
    component: SingerListComponent,
  },
  {
    path: 'singer/info/:singerId',
    component: SingerInfoComponent,
  },
  {
    path: 'search/index',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
