import { Subject } from 'rxjs';
import {
  Router,
  NavigationEnd,
  RouterEvent,
  NavigationStart,
} from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavComponent } from './my-nav.component';

class RouterStub {
  private subject = new Subject();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public events = this.subject.asObservable();
  triggerEvent(event: RouterEvent) {
    this.subject.next(event);
  }
}

describe('MyNavComponent', () => {
  let component: MyNavComponent;
  let fixture: ComponentFixture<MyNavComponent>;
  let routerStub = new RouterStub();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyNavComponent],
      providers: [{ provide: Router, useValue: routerStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    routerStub = fixture.debugElement.injector.get(Router) as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change nothing for non NavigationEnd event', () => {
    const { activeIndex: prevActiveIndex } = component;
    // @ts-ignore
    routerStub.triggerEvent(new NavigationStart(0, '/just-a-url'));
    fixture.detectChanges();
    expect(component.activeIndex).toBe(prevActiveIndex);
  });

  it('should call setActiveIndexByPathname for NavigationEnd event ', () => {
    spyOn(component, 'setActiveIndexByPathname');
    // @ts-ignore
    routerStub.triggerEvent(new NavigationEnd(0, '/just-a-url'));
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(component.setActiveIndexByPathname).toHaveBeenCalled();
  });

  it('should set correct activeIndex by url pathname', () => {
    component.navs.forEach((nav, index) => {
      component.setActiveIndexByPathname(nav.path);
      expect(component.activeIndex).toBe(index);
    });
    const prevActiveIndex = component.activeIndex;
    component.setActiveIndexByPathname('/404');
    expect(component.activeIndex).toBe(prevActiveIndex);
  });
});
