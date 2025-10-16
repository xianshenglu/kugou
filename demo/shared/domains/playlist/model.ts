import type { MediaItem } from '../common/model'
import type { Song } from '../song/model'

export interface PlaylistItem extends MediaItem {
  audio_id: number
  filename: string
  duration: number
  hash: string
}

interface PlaylistBase {
  collectcount?: number
  imgurl: string
  intro: string
  playcount?: number
  singername: string
  slid: number
  specialid: number
  specialname: string
  suid: number
}

export interface PlaylistSummary extends PlaylistBase {
  collectcount?: number
  songs?: PlaylistItem[]
  username: string
}
export interface PlaylistInnerInfo extends PlaylistBase {
  nickname: string
  songcount: number
  tags: any[]
}

export interface PlaylistListResponse {
  plist: {
    list: {
      timestamp?: number
      info: PlaylistSummary[]
      total?: number
    }
  }
}

export interface PlaylistInfoResponse {
  list: {
    list: {
      info: Song[]
    }
  }
  info: {
    list: PlaylistInnerInfo
  }
}
