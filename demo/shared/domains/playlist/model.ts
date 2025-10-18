import type { RoutableItem } from '../common/model'
import type { PlaylistSummaryDto, PlaylistDetailSummaryDto, PlaylistInfoResponseDto } from './dto'

export interface PlaylistSummary extends PlaylistSummaryDto, RoutableItem {
  popularity: number
}

export type PlaylistDetailSummary = PlaylistDetailSummaryDto

export type PlaylistListData = PlaylistSummary[]

export interface PlaylistInfoData {
  info: PlaylistInfoResponseDto['info']
  songs: PlaylistInfoResponseDto['list']
}
