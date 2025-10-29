import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMainComponent } from './components/my-main/my-main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MyMainComponent,
        loadChildren: () =>
          import('./views/new-song/new-song.module').then(
            (m) => m.NewSongModule
          ),
      },
      {
        path: 'rank',
        loadChildren: () =>
          import('./views/rank/rank.module').then((m) => m.RankModule),
      },
      {
        path: 'song',
        loadChildren: () =>
          import('./views/song/song.module').then((m) => m.SongModule),
      },
      {
        path: 'singer',
        loadChildren: () =>
          import('./views/singer/singer.module').then((m) => m.SingerModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./views/search/search.module').then((m) => m.SearchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
