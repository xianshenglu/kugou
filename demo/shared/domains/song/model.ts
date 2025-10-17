import type { NewSongDto, SongBaseDto, SongPlayingInfoDto } from './dto'

export type SongBase = SongBaseDto;

export type Song = SongBaseDto; // todo replace with SongBase?

export type NewSong = NewSongDto;

export interface SongPlayingInfo extends SongPlayingInfoDto {}

export interface LyricItem {
  millisecond: number
  text: string
}

export interface SongLyricParams {
  hash: string
  r?: string
}

export interface SongInfoParams {
  hash: string
  cmd?: string
}

