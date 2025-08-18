// 定义搜索状态接口
interface SearchRes {
  info: any[]
}

interface SearchState {
  searchRecArr: any[]
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
