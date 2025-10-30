import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, SharedModule, SearchRoutingModule],
})
export class SearchModule {}
