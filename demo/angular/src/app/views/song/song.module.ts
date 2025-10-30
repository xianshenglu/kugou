import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongListComponent } from './song-list/song-list.component';
import { SongListInfoComponent } from './song-list-info/song-list-info.component';
import { SongRoutingModule } from './song-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SongListComponent, SongListInfoComponent],
  imports: [CommonModule, SharedModule, SongRoutingModule],
})
export class SongModule {}
