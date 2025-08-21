import type { MediaItem } from '../common/model'

export interface SingerCategory {
  classid: number
  classname: string
  imgurl?: string
}

export interface SingerSummary {
  singerid: number
  singername: string
  imgurl?: string
}

export interface SingerInfo {
  singerid: number
  singername: string
  intro?: string
  songcount?: number
  albumcount?: number
}

export interface SingerListResponse {
  classid?: number
  classname?: string
  singers?: {
    total?: number
    list: { info: SingerSummary[] }
  }
}

export interface SingerInfoResponse {
  info: SingerInfo
  songs?: { total?: number; list?: MediaItem[] }
}
