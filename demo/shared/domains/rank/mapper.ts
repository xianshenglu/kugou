import type { RankItemDto, RankListResponseDto, RankInfoResponseDto } from './dto'
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
const mapRankInfoDetail = (data: RankItemDto): RankItem => {
  return {
    ...data,
    ...mapRankItem(data),
    imgUrl: replaceSizeInUrl(data.banner7url),
  }
}
export const mapRankInfoResponse = (data: RankInfoResponseDto) => {
  return {
    info: mapRankInfoDetail(data.info),
    songs: data.songs
  }
}
