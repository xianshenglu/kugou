import http from './http'
import { getRankList } from '../api/rankList'

export const fetchRankList = (params = {}) => {
  return http({ ...getRankList, params: { ...params } })
}
