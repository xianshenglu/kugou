import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankListComponent } from './rank-list/rank-list.component';
import { RankInfoComponent } from './rank-info/rank-info.component';
import { RankRoutingModule } from './rank-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RankListComponent, RankInfoComponent],
  imports: [CommonModule, SharedModule, RankRoutingModule],
})
export class RankModule {}
