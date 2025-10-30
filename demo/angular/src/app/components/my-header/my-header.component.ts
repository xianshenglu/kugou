import { PlayerService } from 'src/app/services/player.service';
import { Component } from '@angular/core';
import { EventBusService } from '../../services/event-bus.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent {
  constructor(private player: PlayerService, private bus: EventBusService) {}

  goBack() {
    if (this.player.curPlayerId === 1) {
      this.player.togglePlayers(1);
      return;
    }
    window.history.go(-1);
    /**
     * Under micro-app/wujie, the page will not be updated when user clicks the back button or Browser Back button.
     * So we need to trigger change detection to for the active nav bar update and other pages update after API request
     */
    // setTimeout(() => {    }, 1000);
  }

  onSearchBtnClick() {
    this.bus.emit({ name: 'searchBtnClicked' });
  }
}
