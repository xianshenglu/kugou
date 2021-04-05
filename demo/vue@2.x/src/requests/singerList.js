import http from './http'
import { getSingerList } from '../api/singerList'

export const fetchSingerList = ({ singerListId, params = {} } = {}) => {
  let { url, ...props } = getSingerList
  url += '/' + singerListId
  return http({ ...props, url, params: { json: true, ...params } })
}
