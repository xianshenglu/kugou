import { getHotSearch, getSearchResult } from '@shared/api/search'
import http from './http'

export const fetchHotSearch = ({ params = {} } = {}) => {
  return http({
    ...getHotSearch,
    params: { format: 'json', plat: 0, count: 30, ...params }
  })
}
export const fetchSearchResult = ({ params = {} } = {}) => {
  return http({
    ...getSearchResult,
    params: { format: 'json', page: 1, pagesize: 20, showtype: 1, ...params }
  })
}
