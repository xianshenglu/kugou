import http from './http'
import { getRankInfo } from '@shared/mock/requestConfig/rankInfo'
import type { PaginationQuery } from '@shared/domains/common/model'
import type { AxiosPromise } from 'axios'
import type { RankInfoResponseDto } from '@shared/domains/rank/dto'

interface RankInfoParams extends PaginationQuery {
  json?: boolean
  rankid?: number
}

export const fetchRankInfo = ({ params = {} }: { params?: RankInfoParams } = {}): AxiosPromise<RankInfoResponseDto> => {
  return http({ ...getRankInfo, params: { json: true, page: 1, ...params } })
}
