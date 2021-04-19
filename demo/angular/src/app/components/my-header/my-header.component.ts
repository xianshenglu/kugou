import { EventBusService } from './../../services/event-bus.service';
import { PlayerService } from 'src/app/services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
})
export class MyHeaderComponent implements OnInit {
  constructor(private player: PlayerService, private bus: EventBusService) {}

  ngOnInit(): void {}
  // computed: {
  //   ...mapState('images', ['logo__text']),
  // }
  goBack() {
    if (this.player.curPlayerId === 1) {
      this.player.togglePlayers(1);
      return;
    }
    history.go(-1);
  }
  onSearchBtnClick() {
    this.bus.emit({ name: 'searchBtnClicked' });
  }
}
