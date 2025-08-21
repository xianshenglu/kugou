import type { MediaItem } from '../common/model'

export interface PlaylistItem extends MediaItem {
  audio_id: number
  filename: string
  duration: number
  hash: string
}

export interface Playlist {
  specialid: number
  specialname: string
  playcount?: number
  collectcount?: number
  songs?: PlaylistItem[]
}

export interface PlaylistListResponse {
  plist: {
    list: {
      timestamp?: number
      info: Playlist[]
      total?: number
    }
  }
}
