import type { HotSearchResponseDto, SearchResultResponseDto } from './dto'
import type { HotSearchItem, SearchResultData } from './model'

export function mapSearchResultData(
  dto: SearchResultResponseDto
): SearchResultData {
  return dto.data
}

export function mapHotSearchData(dto: HotSearchResponseDto): HotSearchItem[] {
  return dto.data.info
}
