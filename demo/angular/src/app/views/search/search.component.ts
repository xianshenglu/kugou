import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // @ts-ignore
  @ViewChild('searchCont') searchCont: ElementRef;
  title = '搜索';
  searchType = '最近热门';
  placeholder = '歌手/歌名/拼音';
  searchRecArr: ResponseTypeFromServiceReq<
    typeof SearchService,
    'fetchHotSearch'
  > = [];
  searchRes: ResponseTypeFromServiceReq<
    typeof SearchService,
    'fetchSearchResult'
  > = { info: [] };
  keyword = '';
  isSearchRecShow = false;
  isSearchResShow = false;
  get searchResInfo() {
    // @ts-ignore
    return this.searchRes.info;
  }
  constructor(
    private eventBus: EventBusService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchByUrl();
  }

  searchByUrl() {
    // remove in destroy?
    this.eventBus.on('searchBtnClicked', this.scrollTopSearchCont);
    const queryKeyword = new URLSearchParams(window.location.search).get(
      'keyword'
    );
    const isKeywordValid =
      typeof this.keyword === 'string' && this.keyword !== '';
    const isQueryKeywordValid =
      typeof queryKeyword === 'string' && queryKeyword !== '';
    if (isQueryKeywordValid && queryKeyword !== this.keyword) {
      // @ts-ignore
      this.keyword = queryKeyword;
      this.getSearchRes();
    } else if (isKeywordValid) {
      this.isSearchRecShow = false;
      this.isSearchResShow = true;
    } else {
      this.getSearchRec();
    }
  }

  async getSearchRec() {
    if (this.searchRecArr.length !== 0) {
      this.isSearchResShow = false;
      this.isSearchRecShow = true;
      return;
    }
    this.searchRecArr = await this.searchService.fetchHotSearch();

    this.isSearchResShow = false;
    this.isSearchRecShow = true;
  }
  async getSearchRes() {
    if (this.keyword === '') {
      return;
    }
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { keyword: this.keyword },
      queryParamsHandling: 'merge',
    });

    this.searchRes = await this.searchService.fetchSearchResult(this.keyword);

    this.isSearchRecShow = false;
    this.isSearchResShow = true;
  }
  scrollTopSearchCont() {
    if (this.searchCont.nativeElement) {
      this.searchCont.nativeElement.scrollTop = 0;
    }
  }
}
