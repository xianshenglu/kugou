import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBusService } from 'src/app/services/event-bus.service';
import { Object } from 'ts-toolbelt';
import { PlayerService } from '../../services/player.service';
import { MyHeaderComponent } from './my-header.component';

let fixture: Object.Overwrite<
  ComponentFixture<MyHeaderComponent>,
  { nativeElement: HTMLElement }
>;

describe('MyHeaderComponent', () => {
  let component: MyHeaderComponent;
  let playerServiceStub: Pick<PlayerService, 'curPlayerId' | 'togglePlayers'>;
  let busServiceStub: Pick<EventBusService, 'emit'>;
  let page: Page;

  beforeEach(async () => {
    playerServiceStub = {
      curPlayerId: 0,
      togglePlayers() {},
    };
    busServiceStub = {
      emit() {},
    };
    await TestBed.configureTestingModule({
      declarations: [MyHeaderComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: PlayerService, useValue: playerServiceStub },
        { provide: EventBusService, useValue: busServiceStub },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MyHeaderComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line require-atomic-updates
    playerServiceStub = fixture.debugElement.injector.get(PlayerService);
    // eslint-disable-next-line require-atomic-updates
    busServiceStub = fixture.debugElement.injector.get(EventBusService);
    fixture.detectChanges();
    page = new Page();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go back if curPlayerId is 0', () => {
    const spy = spyOn(playerServiceStub, 'togglePlayers');
    page.goBackBtn.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should go back if curPlayerId is 1', () => {
    const spy = spyOn(playerServiceStub, 'togglePlayers');
    playerServiceStub.curPlayerId = 1;
    page.goBackBtn.click();
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should search button emit a event', () => {
    const spy = spyOn(busServiceStub, 'emit');
    page.searchBtn.click();
    expect(spy).toHaveBeenCalledWith({ name: 'searchBtnClicked' });
  });
});

class Page {
  get goBackBtn() {
    return fixture.nativeElement.querySelector(
      '[test-id="go-back-btn"]'
    ) as HTMLElement;
  }
  get searchBtn() {
    return fixture.nativeElement.querySelector(
      '[test-id="search-btn"]'
    ) as HTMLElement;
  }
}
