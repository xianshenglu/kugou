import type { MediaItem } from '../common/model'

export interface HotSearchItem {
  sort: number
  keyword: string
  jumpurl?: string
}

export interface HotSearchResponse {
  status: number
  data: { timestamp?: number; info: HotSearchItem[] }
}

export interface SearchResultItem extends MediaItem {
  songname?: string
  singername?: string
}

export interface SearchResultResponse {
  status: number
  data: { total?: number; info: SearchResultItem[] }
}
