import {
  Component,
  Input,
  SimpleChanges,
  ElementRef,
  ViewChild,
  ViewChildren,
  TemplateRef,
  ContentChild,
  OnChanges,
} from '@angular/core';
import { lazyLoad } from 'src/app/utils';

@Component({
  selector: 'app-my-card-list',
  templateUrl: './my-card-list.component.html',
  styleUrls: ['./my-card-list.component.scss'],
})
export class MyCardListComponent implements OnChanges {
  // @ts-ignore
  @Input() pubList: { path: string; imgUrl: string }[];

  // @ts-ignore
  @ViewChild('lazyLoadRoot') lazyLoadRoot: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChildren('lazyImages') lazyImages: ElementRef<HTMLImageElement>;

  // @ts-ignore
  @ContentChild(TemplateRef) template: TemplateRef<>;

  ngOnChanges(changes: SimpleChanges): void {
    requestAnimationFrame(() => {
      // @ts-ignore
      this.onPubListChange(changes.pubList.currentValue);
    });
  }

  onPubListChange() {
    if (this.pubList.length === 0 || this.lazyImages === undefined) {
      return;
    }
    // console.log(lazyLoad,123,);

    lazyLoad(
      // @ts-ignore
      // eslint-disable-next-line
      this.lazyImages.toArray().map((ref) => ref.nativeElement),
      {
        root: this.lazyLoadRoot.nativeElement,
      }
    );
  }
}
