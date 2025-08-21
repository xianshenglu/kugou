import type { MediaItem } from '../common/model'

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

export interface NewSongResponse {
  JS_CSS_DATE?: number
  kg_domain?: string
  data: Song[]
  banner?: any[]
}

export interface Lyric {
  hash: string
  timelength: number
  filesize: number
  audio_name: string
  lyrics: string
  play_url?: string
}

export interface SongLyricResponse {
  status: number
  err_code?: number
  data: Lyric
}

