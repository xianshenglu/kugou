import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSongComponent } from './new-song.component';

const routes: Routes = [
  {
    path: '',
    component: NewSongComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSongRoutingModule {}
