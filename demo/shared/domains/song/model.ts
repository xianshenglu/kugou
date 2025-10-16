import type { MediaItem, APIResponse } from '../common/model'

export interface Song extends MediaItem {
  audio_id: number
  hash: string
  filename: string
  duration: number
  bitrate?: number
  filesize?: number
  album_id?: string
  mvhash?: string
  privilege?: number
  price?: number
}

export interface Author {
  author_id: string
  author_name: string
  avatar: string
  sizable_avatar: string
  is_publish: string
}

export interface SongDetail extends MediaItem {
  hash: string
  timelength: number
  filesize: number
  audio_name: string
  have_album: number
  album_name?: string
  album_id?: string
  img?: string
  have_mv: number
  video_id: number
  author_name: string
  song_name: string
  lyrics: string
  author_id: string
  privilege: number
  privilege2: string
  play_url: string
  authors: Author[]
  bitrate: number
}

export interface NewSongResponse {
  JS_CSS_DATE?: number
  kg_domain?: string
  data: Song[]
  banner?: any[]
}

export interface SongLyricResponse extends Omit<APIResponse<SongDetail>, 'errcode'> {
  status: number
  err_code?: number
}

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

