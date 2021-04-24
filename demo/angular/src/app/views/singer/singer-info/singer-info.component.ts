import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { SingerInfoService } from './../../../services/singer-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singer-info',
  templateUrl: './singer-info.component.html',
  styleUrls: ['./singer-info.component.scss'],
})
export class SingerInfoComponent implements OnInit {
  singerInfo: ResponseTypeFromServiceReq<
    typeof SingerInfoService,
    'fetchSingerInfo'
  > = { info: {}, data: [] };
  constructor(private singerInfoService: SingerInfoService) {}
  get getModuleHeadInfo() {
    // @ts-ignore
    return this.singerInfo.info;
  }
  get getMusicList() {
    // @ts-ignore
    return this.singerInfo.data;
  }
  async ngOnInit(): Promise<void> {
    const singerId = window.location.pathname.split('/').pop();
    if (singerId === undefined) {
      return;
    }
    this.singerInfo = await this.singerInfoService.fetchSingerInfo(singerId);
  }
}
