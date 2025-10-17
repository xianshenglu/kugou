import type {
  HotSearchItemDto,
  SearchResultItemDto,
  SearchResultDataDto,
} from './dto'

export type HotSearchItem = HotSearchItemDto

export type SearchResultItem = SearchResultItemDto

export type SearchResultData = Pick<SearchResultDataDto, 'info'>

