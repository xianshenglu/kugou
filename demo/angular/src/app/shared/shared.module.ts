import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyCardListComponent } from '../components/my-card-list/my-card-list.component';
import { MyModuleHeadComponent } from '../components/my-module-head/my-module-head.component';
import { MyModuleDescriptionComponent } from '../components/my-module-description/my-module-description.component';
import { MyModuleTitleComponent } from '../components/my-module-title/my-module-title.component';
import { MyMusicListComponent } from '../components/my-music-list/my-music-list.component';

@NgModule({
  declarations: [
    MyCardListComponent,
    MyModuleHeadComponent,
    MyModuleDescriptionComponent,
    MyModuleTitleComponent,
    MyMusicListComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    MyCardListComponent,
    MyModuleHeadComponent,
    MyModuleDescriptionComponent,
    MyModuleTitleComponent,
    MyMusicListComponent,
  ],
})
export class SharedModule {}
