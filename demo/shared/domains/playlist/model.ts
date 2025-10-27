import type { RoutableItem } from '../common/model'
import type { SongDto } from '../song/dto'
import type { PlaylistSummaryDto, PlaylistDetailSummaryDto, PlaylistInfoResponseDto } from './dto'

export interface PlaylistSummary extends PlaylistSummaryDto, RoutableItem {
  popularity: number
}
export type PlaylistSong = SongDto;
export interface PlaylistDetailSummary extends PlaylistDetailSummaryDto {
  imgUrl: string;
}
export type PlaylistListData = PlaylistSummary[]

export type PlaylistInfoDetail = {
  list: PlaylistDetailSummary
}
export interface PlaylistInfoData {
  info: PlaylistInfoDetail
  songs: PlaylistInfoResponseDto['list']
}
