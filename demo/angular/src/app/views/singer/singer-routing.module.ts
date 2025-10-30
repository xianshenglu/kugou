import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingerCategoryComponent } from './singer-category/singer-category.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { SingerInfoComponent } from './singer-info/singer-info.component';
import { MyMainComponent } from '../../components/my-main/my-main.component';

const routes: Routes = [
  {
    path: 'category',
    component: MyMainComponent,
    children: [
      {
        path: '',
        component: SingerCategoryComponent,
      },
    ],
  },
  {
    path: 'list/:singerListId',
    component: SingerListComponent,
  },
  {
    path: 'info/:singerId',
    component: SingerInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingerRoutingModule {}
