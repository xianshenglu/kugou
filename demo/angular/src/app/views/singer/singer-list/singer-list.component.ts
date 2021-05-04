import { lazyLoad } from 'src/app/utils';
import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { SingerListService } from '../../../services/singer-list.service';

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.scss'],
})
export class SingerListComponent implements OnInit {
  // @ts-ignore
  @ViewChild('lazyLoadRoot') lazyLoadRoot: ElementRef<HTMLImageElement>;

  // @ts-ignore
  @ViewChildren('lazyImages') lazyImages: ElementRef<HTMLImageElement>;

  singerList: ResponseTypeFromServiceReq<
    typeof SingerListService,
    'fetchSingerList'
  > = {
    info: {
      id: '',
      name: '',
      count: 0,
    },
    data: [],
  };

  constructor(private singerListService: SingerListService) {}

  get singerListData() {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.singerList.data;
  }

  get singerName() {
    // @ts-ignore
    // eslint-disable-next-line
    return this.singerList.info.name;
  }

  async ngOnInit(): Promise<void> {
    const singerListId = window.location.pathname.split('/').pop();
    if (singerListId === undefined) {
      return;
    }
    this.singerList = await this.singerListService.fetchSingerList(
      singerListId
    );
    requestAnimationFrame(() => {
      // todo ? why ngOnChanges not work here?
      this.onSingerListChange();
    });
  }
  /* eslint-disable */

  onSingerListChange() {
    // @ts-ignore
    if (this.singerList.data.length === 0 || this.lazyImages === undefined) {
      return;
    }
    lazyLoad(
      // @ts-ignore
      this.lazyImages.toArray().map((ref) => ref.nativeElement),
      {
        root: this.lazyLoadRoot.nativeElement,
      }
    );
    /* eslint-enable */
  }
}
