import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewSongComponent } from './new-song.component';
import { SliderComponent } from './slider/slider.component';
import { NewSongRoutingModule } from './new-song-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NewSongComponent, SliderComponent],
  imports: [CommonModule, FormsModule, SharedModule, NewSongRoutingModule],
})
export class NewSongModule {}
