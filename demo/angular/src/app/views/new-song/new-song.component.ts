import { Component, OnInit } from '@angular/core';
import { NewSongService } from '../../services/new-song.service';

@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.component.html',
  styleUrls: ['./new-song.component.scss'],
})
export class NewSongComponent implements OnInit {
  newSongs = [];

  sliderData = [];

  constructor(private newSong: NewSongService) {}

  async ngOnInit(): Promise<void> {
    const { data, banner } = await this.newSong.fetchNewSong();
    this.newSongs = data;
    this.sliderData = banner;
  }
}
