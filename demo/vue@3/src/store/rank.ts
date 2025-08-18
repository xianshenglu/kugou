// 定义排行榜状态接口
interface RankInfo {
  info: Record<string, any>
  songs: {
    timestamp: number
    list: any[]
  }
}

interface RankState {
  rankList: any[]
  rankInfo: RankInfo
}

const rank: {
  namespaced: boolean
  state: () => RankState
} = {
  namespaced: true,
  state: (): RankState => ({
    rankList: [],
    rankInfo: {
      info: {},
      songs: {
        timestamp: Date.now(),
        list: []
      }
    }
  })
}

export default rank
