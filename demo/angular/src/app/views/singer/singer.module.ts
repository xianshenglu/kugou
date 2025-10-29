import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingerCategoryComponent } from './singer-category/singer-category.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { SingerInfoComponent } from './singer-info/singer-info.component';
import { SingerRoutingModule } from './singer-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SingerCategoryComponent,
    SingerListComponent,
    SingerInfoComponent,
  ],
  imports: [CommonModule, SharedModule, SingerRoutingModule],
})
export class SingerModule {}
