import { PlayerService } from 'src/app/services/player.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild('audioEl') audioEl: ElementRef<HTMLAudioElement>;

  constructor(private device: DeviceService, public player: PlayerService) {}

  ngAfterViewInit(): void {
    document.documentElement.style.setProperty(
      '--vh',
      `${this.device.vh / 100}px`
    );
    this.player.findAudioEl(this.audioEl.nativeElement);
  }
}
