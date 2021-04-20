import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { SingerCategoryService } from 'src/app/services/singer-category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singer-category',
  templateUrl: './singer-category.component.html',
  styleUrls: ['./singer-category.component.scss'],
})
export class SingerCategoryComponent implements OnInit {
  singerCategories: ResponseTypeFromServiceReq<
    typeof SingerCategoryService,
    'fetchSingerCategory'
  > = [];
  constructor(private singerCategoryService: SingerCategoryService) {}

  async ngOnInit(): Promise<void> {
    this.singerCategories = await this.singerCategoryService.fetchSingerCategory();
  }
}
