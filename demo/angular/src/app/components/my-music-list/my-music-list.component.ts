import { Music } from 'src/app/services/player.service';
import { PlayerService } from 'src/app/services/player.service';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-my-music-list',
  templateUrl: './my-music-list.component.html',
  styleUrls: ['./my-music-list.component.scss'],
})
export class MyMusicListComponent implements OnInit {
  // @ts-ignore
  @Input() musicList: Music[];
  // @ts-ignore
  @ContentChild(TemplateRef) template: TemplateRef<>;
  constructor(public player: PlayerService) {}

  ngOnInit(): void {}
}
