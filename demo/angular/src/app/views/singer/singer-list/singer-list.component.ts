import { lazyLoad } from 'src/app/utils';
import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { SingerListService } from './../../../services/singer-list.service';
import {
  Component,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewChildren,
} from '@angular/core';

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
    return this.singerList.data;
  }
  get singerName() {
    // @ts-ignore
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
      //todo ? why ngOnChanges not work here?
      this.onSingerListChange();
    });
  }
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
  }
}
