import http from './http'
import { getSingerInfo } from '../api/singerInfo'

export const fetchSingerInfo = ({ singerId, params = {} } = {}) => {
  let { url, ...props } = getSingerInfo
  url += '/' + singerId + '&json=true'
  return http({ ...props, url, params })
}
