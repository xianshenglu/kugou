import http from './http'
import { getSingerList } from '../api/rankInfo'

export const fetchSingerList = (params = {}) => {
  return http({ ...getSingerList, params: { json: true, ...params } })
}
