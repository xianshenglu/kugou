import type { MediaItem } from '../common/model'
import type { RankItemDto } from './dto'

export interface RankSummary {
  rankid: number
  id: number
  rankname: string
  update_frequency?: string
  intro?: string
  banner7url: string;
}

export interface RankSong extends MediaItem {
  filename: string
  audio_id: number
  hash: string
  duration?: number
}

export interface RankItem extends RankItemDto {
  imgUrl: string
  path: string
  title: string
}
export interface RankInfoResponse {
  info: RankSummary
  songs: {
    total?: number
    list: { info: RankSong[]; total?: number }
  }
}
