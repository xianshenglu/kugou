import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  ElementRef,
  ViewChild,
  ViewChildren,
  TemplateRef,
  ContentChild,
} from '@angular/core';
import { lazyLoad } from 'src/app/utils';

@Component({
  selector: 'app-my-card-list',
  templateUrl: './my-card-list.component.html',
  styleUrls: ['./my-card-list.component.scss'],
})
export class MyCardListComponent implements OnInit {
  // @ts-ignore
  @Input() pubList: { path: string; imgUrl: string }[];
  // @ts-ignore
  @ViewChild('lazyLoadRoot') lazyLoadRoot: ElementRef<HTMLElement>;
  // @ts-ignore
  @ViewChildren('lazyImages') lazyImages: ElementRef<HTMLImageElement>;
  // @ts-ignore
  @ContentChild(TemplateRef) template: TemplateRef<>;
  constructor() {}

  ngOnInit(): void {}
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
    lazyLoad(
      // @ts-ignore
      this.lazyImages.toArray().map((ref) => ref.nativeElement),
      {
        root: this.lazyLoadRoot.nativeElement,
      }
    );
  }
}
