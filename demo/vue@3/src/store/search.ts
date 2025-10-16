import type { SearchResultItem, HotSearchItem } from '@shared/domains/search/model'

interface SearchRes {
  info: SearchResultItem[]
}

export interface SearchState {
  searchRecArr: HotSearchItem[]
  searchRes: SearchRes
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
