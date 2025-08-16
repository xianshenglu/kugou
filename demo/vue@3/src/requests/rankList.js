import http from './http'
import { getRankList } from '@shared/api/rankList'

export const fetchRankList = ({ params = {} } = {}) => {
  return http({ ...getRankList, params: { ...params } })
}
