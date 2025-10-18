import type { RankInfoResponseDto, RankItemDto } from './dto'

export interface RankItem extends RankItemDto {
  imgUrl: string
  path: string
  title: string
}

export type RankInfoData = {
  info: RankInfoResponseDto['info'] | null
  songs: Pick<RankInfoResponseDto['songs'], 'list' | 'timestamp'>
}