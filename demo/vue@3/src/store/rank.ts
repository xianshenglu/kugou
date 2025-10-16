import type { RoutableItem } from '@shared/domains/common/model'
import type { RankSummary, RankSong } from '@shared/domains/rank/model'
export interface RankSummaryWithRoute extends RankSummary, RoutableItem {}
interface RankInfo {
  info: RankSummary | null
  songs: {
    timestamp: number
    list: RankSong[]
  }
}

export interface RankState {
  rankList: RankSummaryWithRoute[]
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
