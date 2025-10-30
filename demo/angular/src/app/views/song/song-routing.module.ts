import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './song-list/song-list.component';
import { SongListInfoComponent } from './song-list-info/song-list-info.component';
import { MyMainComponent } from '../../components/my-main/my-main.component';

const routes: Routes = [
  {
    path: 'list',
    component: MyMainComponent,
    children: [
      {
        path: '',
        component: SongListComponent,
      },
    ],
  },
  {
    path: 'list/:songListId',
    component: SongListInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongRoutingModule {}
