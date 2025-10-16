import http from './http'
import { getRankInfo } from '@shared/api/rankInfo'
import type { RankInfoResponse } from '@shared/domains/rank/model'
import type { PaginationQuery } from '@shared/domains/common/model'
import type { AxiosPromise } from 'axios'

interface RankInfoParams extends PaginationQuery {
  json?: boolean
  rankid?: number
}

export const fetchRankInfo = ({ params = {} }: { params?: RankInfoParams } = {}): AxiosPromise<RankInfoResponse> => {
  return http({ ...getRankInfo, params: { json: true, page: 1, ...params } })
}
