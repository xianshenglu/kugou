import { getHotSearch, getSearchResult } from '@shared/mock/requestConfig/search'
import http from './http'
import type { PaginationQuery } from '@shared/domains/common/model'
import type { AxiosPromise } from 'axios'
import type { HotSearchResponseDto, SearchResultResponseDto } from '@shared/domains/search/dto'

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

export const fetchHotSearch = ({ params = {} }: { params?: HotSearchParams } = {}): AxiosPromise<HotSearchResponseDto> => {
  return http({
    ...getHotSearch,
    params: { format: 'json', plat: 0, count: 30, ...params }
  })
}

export const fetchSearchResult = ({ params = {} }: { params?: SearchResultParams } = {}): AxiosPromise<SearchResultResponseDto> => {
  return http({
    ...getSearchResult,
    params: { format: 'json', page: 1, pagesize: 20, showtype: 1, ...params }
  })
}
