import http from './http'
import { getSingerList } from '@shared/api/singerList'

export const fetchSingerList = ({ singerListId, params = {} } = {}) => {
  let { url, ...props } = getSingerList
  url += '/' + singerListId
  return http({ ...props, url, params: { json: true, ...params } })
}
