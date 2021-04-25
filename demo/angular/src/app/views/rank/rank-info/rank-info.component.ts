import {replaceSizeInUrl}from 'src/app/utils';
import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { RankInfoService } from 'src/app/services/rank-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-info',
  templateUrl: './rank-info.component.html',
  styleUrls: ['./rank-info.component.scss'],
})
export class RankInfoComponent implements OnInit {
  msg = '上次更新时间';
  rankInfo: ResponseTypeFromServiceReq<
    typeof RankInfoService,
    'fetchRankInfo'
  > = { info: {}, songs: { list: {}, timestamp: 0 } };
  constructor(private rankInfoService: RankInfoService) {}
  get getModuleHeadInfo() {
    return {
      // @ts-ignore
      imgUrl: replaceSizeInUrl(this.rankInfo.info.banner7url),
      // @ts-ignore

      name: this.rankInfo.info.rankname,
    };
  }
  get getMusicList() {
    // @ts-ignore
    return this.rankInfo.songs.list;
  }
  get formatDate() {
    // @ts-ignore
    const date = new Date(this.rankInfo.songs.timestamp * 1000);
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0')
    );
  }
  async ngOnInit(): Promise<void> {
    const rankId = window.location.pathname.split('/').pop();
    if (rankId === undefined) {
      return;
    }
    this.rankInfo = await this.rankInfoService.fetchRankInfo(rankId);
  }
}
