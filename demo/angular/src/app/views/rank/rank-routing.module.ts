import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankListComponent } from './rank-list/rank-list.component';
import { RankInfoComponent } from './rank-info/rank-info.component';
import { MyMainComponent } from '../../components/my-main/my-main.component';

const routes: Routes = [
  {
    path: 'list',
    component: MyMainComponent,
    children: [
      {
        path: '',
        component: RankListComponent,
      },
    ],
  },
  {
    path: 'info/:rankId',
    component: RankInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RankRoutingModule {}
