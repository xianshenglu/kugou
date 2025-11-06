import api from 'src/shared/constants/api'
import { mapHotSearchData, mapSearchResultData } from '@shared/domains/search/mapper'
import type { HotSearchItem } from '@shared/domains/search/model'
import axios from 'axios'
import type { HotSearchResponseDto, SearchResultResponseDto } from '@shared/domains/search/dto'

export async function getHotSearch(): Promise<HotSearchItem[]> {
  const response = await axios.get<HotSearchResponseDto>(api.hotSearch)
  return mapHotSearchData(response.data)
}

export async function getKeywordSearch(keyword: string) {
  const response = await axios.get<SearchResultResponseDto>(`${api.keywordSearch}${keyword}`)
  const data = mapSearchResultData(response.data)
  return {
    list: data.info,
    total: response.data.data.total
  }
}

