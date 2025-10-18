import type { RankItemDto, RankListResponseDto } from './dto'
import { replaceSizeInUrl } from '../common/mapper'
import type { RankItem } from './model'

const mapRankItem = (item: RankItemDto): RankItem => {
  return {
    ...item,
    imgUrl: replaceSizeInUrl(item.imgurl),
    path: '/rank/info/' + item.rankid,
    title: item.rankname
  }
}

export const mapRankListResponse = (data: RankListResponseDto): RankItem[] => {
  return data.rank.list.map(item => mapRankItem(item))
}
