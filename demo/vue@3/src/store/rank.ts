import type { RankSummary, RankSong, RankItem } from '@shared/domains/rank/model'
interface RankInfo {
  info: RankSummary | null
  songs: {
    timestamp: number
    list: RankSong[]
  }
}

export interface RankState {
  rankList: RankItem[]
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
      info: null,
      songs: {
        timestamp: Date.now(),
        list: []
      }
    }
  })
}

export default rank
