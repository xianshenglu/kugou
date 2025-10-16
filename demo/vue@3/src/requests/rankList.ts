import http from './http'
import { getRankList } from '@shared/api/rankList'
import type { AxiosPromise } from 'axios'
import type { RankListResponse } from '@shared/domains/rank/model'

interface RankListParams {
  [key: string]: any
}

export const fetchRankList = ({ params = {} }: { params?: RankListParams } = {}): AxiosPromise<RankListResponse> => {
  return http({ ...getRankList, params: { ...params } })
}
