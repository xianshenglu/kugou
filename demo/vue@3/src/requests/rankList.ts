import http from './http'
import { getRankList } from '@shared/api/rankList'
import type { AxiosPromise } from 'axios'
import type { RankListResponseDto } from '@shared/domains/rank/dto'

interface RankListParams {
  [key: string]: any
}

export const fetchRankList = ({ params = {} }: { params?: RankListParams } = {}): AxiosPromise<RankListResponseDto> => {
  return http({ ...getRankList, params: { ...params } })
}
