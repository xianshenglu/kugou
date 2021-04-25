import { ResponseTypeFromServiceReq } from 'src/app/typings/index';
import { SongListInfoService } from 'src/app/services/song-list-info.service';
import {replaceSizeInUrl}from 'src/app/utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-list-info',
  templateUrl: './song-list-info.component.html',
  styleUrls: ['./song-list-info.component.scss'],
})
export class SongListInfoComponent implements OnInit {
  songListInfo: ResponseTypeFromServiceReq<
    typeof SongListInfoService,
    'fetchSongListInfo'
  > = { info: { list: {}, songs: { list: { info: [] } } } };
  constructor(private songListInfoService: SongListInfoService) {}

  get getModuleHeadInfo() {
    // @ts-ignore
    const data = this.songListInfo.info.list;
    return {
      imgUrl: replaceSizeInUrl(data.imgurl),
      name: data.specialname,
      intro: data.intro,
    };
  }
  get getMusicList() {
    // @ts-ignore
    return this.songListInfo.songs.list.info;
  }
  async ngOnInit(): Promise<void> {
    const songListId = window.location.pathname.split('/').pop();
    if (songListId === undefined) {
      return;
    }
    this.songListInfo = await this.songListInfoService.fetchSongListInfo(
      songListId
    );
  }
}
