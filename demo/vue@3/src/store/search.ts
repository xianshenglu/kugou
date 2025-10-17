import type { HotSearchItem, SearchResultData } from '@shared/domains/search/model'

export interface SearchState {
  searchRecArr: HotSearchItem[]
  searchRes: SearchResultData
  keyword: string
  isSearchRecShow: boolean
  isSearchResShow: boolean
}

const search: {
  namespaced: boolean
  state: () => SearchState
} = {
  namespaced: true,
  state: (): SearchState => ({
    searchRecArr: [],
    searchRes: {
      info: []
    },
    keyword: '',
    isSearchRecShow: false,
    isSearchResShow: false
  })
}

export default search
