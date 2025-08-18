import { getHotSearch, getSearchResult } from '@shared/api/search'
import http from './http'

// 定义参数接口
interface SearchParams {
  [key: string]: any
}

// 定义获取热门搜索函数
export const fetchHotSearch = ({ params = {} }: { params?: SearchParams } = {}) => {
  return http({
    ...getHotSearch,
    params: { format: 'json', plat: 0, count: 30, ...params }
  })
}

// 定义获取搜索结果函数
export const fetchSearchResult = ({ params = {} }: { params?: SearchParams } = {}) => {
  return http({
    ...getSearchResult,
    params: { format: 'json', page: 1, pagesize: 20, showtype: 1, ...params }
  })
}
