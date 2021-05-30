import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import * as utils from 'src/app/utils';
import { MyCardListComponent } from './my-card-list.component';

describe('MyCardListComponent', () => {
  let component: MyCardListComponent;
  let fixture: ComponentFixture<MyCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCardListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pubList changes triggered onPubListChange', fakeAsync(() => {
    spyOn(component, 'onPubListChange');
    component.ngOnChanges({
      pubList: {
        previousValue: [],
        currentValue: [],
        isFirstChange: () => true,
        firstChange: true,
      },
    });
    // todo why tick() not work?
    tick(20);
    expect(component.onPubListChange).toHaveBeenCalled();
  }));

  it('should lazyLoad not be called when pubList is empty', () => {
    const spy = spyOnProperty(utils, 'lazyLoad', 'get');
    component.pubList = [];
    fixture.detectChanges();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should lazyLoad be called when pubList is not empty', () => {
    const spy = spyOnProperty(utils, 'lazyLoad', 'get').and.callThrough();
    component.pubList = [
      { imgUrl: 'https://via.placeholder.com/150', path: '' },
    ];
    component.onPubListChange();
    expect(spy).toHaveBeenCalled();
    // todo fix
    //   expect(spy).toHaveBeenCalledWith(
    //     // @ts-ignore
    //     // eslint-disable-next-line
    //     component.lazyImages.toArray().map((ref) => ref.nativeElement),
    //     {
    //       root: component.lazyLoadRoot.nativeElement,
    //     }
    //   );
  });
});
