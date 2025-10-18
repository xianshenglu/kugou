import type { RankItem, RankInfoData } from '@shared/domains/rank/model'

export interface RankState {
  rankList: RankItem[]
  rankInfo: RankInfoData
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
