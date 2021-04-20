import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { RankListService } from 'src/app/services/rank-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.scss'],
})
export class RankListComponent implements OnInit {
  rankList: ResponseTypeFromServiceReq<
    typeof RankListService,
    'fetchRankList'
  > = [];
  constructor(private rankListService: RankListService) {}

  async ngOnInit(): Promise<void> {
    if (this.rankList.length === 0) {
      this.rankList = await this.rankListService.fetchRankList();
    }
  }
}
