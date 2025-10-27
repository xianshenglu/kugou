import type { RankInfoResponseDto, RankItemDto } from './dto'

export interface RankItem extends RankItemDto {
  imgUrl: string
  path: string
  title: string
}
export type RankInfoSongs = Pick<RankInfoResponseDto['songs'], 'list' | 'timestamp'>
export type RankInfoData = {
  info: RankItem
  songs: RankInfoSongs
}