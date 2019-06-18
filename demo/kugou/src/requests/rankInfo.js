import http from './http'
import { getRankInfo } from '../api/rankInfo'

export const fetchRankInfo = ({ params = {} } = {}) => {
  return http({ ...getRankInfo, params: { json: true, page: 1, ...params } })
}
