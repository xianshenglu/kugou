import type { SongDto } from '../song/dto'
export interface SingerCategoryDto {
  classid: number
  classname: string
  imgurl: string
}

export interface SingerSummaryDto {
  singerid: number
  singername: string
  imgurl: string
}

export interface SingerInfoDto extends SingerSummaryDto {
  intro: string
  songcount: number
  albumcount: number
}

export interface SingerListResponseDto {
  classid: number
  classname: string
  singers: {
    total: number
    list: { info: SingerSummaryDto[] }
  }
}

export interface SingerCategoryListResponseDto {
  list: SingerCategoryDto[]
}
export interface SingerSongDto extends SongDto {
  publish_date:      string;
  lyrics_info:      any[];
  composer_info:    any[];
}
export interface SingerInfoResponseDto {
  info: SingerInfoDto
  songs: { total: number; list: SingerSongDto[] }
}
