import { getHotSearch, getSearchResult } from '@shared/api/search'
import http from './http'
import type { HotSearchResponse, SearchResultResponse } from '@shared/domains/search/model'
import type { PaginationQuery } from '@shared/domains/common/model'
import type { AxiosPromise } from 'axios'

interface HotSearchParams {
  format?: string
  plat?: number
  count?: number
}

interface SearchResultParams extends PaginationQuery {
  format?: string
  showtype?: number
  keyword?: string
}

export const fetchHotSearch = ({ params = {} }: { params?: HotSearchParams } = {}): AxiosPromise<HotSearchResponse> => {
  return http({
    ...getHotSearch,
    params: { format: 'json', plat: 0, count: 30, ...params }
  })
}

export const fetchSearchResult = ({ params = {} }: { params?: SearchResultParams } = {}): AxiosPromise<SearchResultResponse> => {
  return http({
    ...getSearchResult,
    params: { format: 'json', page: 1, pagesize: 20, showtype: 1, ...params }
  })
}
