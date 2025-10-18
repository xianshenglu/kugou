import type { SingerInfoData, SingerListData, SingerCategoryData } from '@shared/domains/singer/model'

export interface SingerState {
  singerCategories: SingerCategoryData[]
  singerInfo: SingerInfoData
  singerList: SingerListData
}

const singer: {
  namespaced: boolean
  state: () => SingerState
} = {
  namespaced: true,
  state: (): SingerState => ({
    singerCategories: [],
    singerInfo: {
      info: null as any,
      data: []
    },
    singerList: {
      info: {} as any,
      data: []
    }
  })
}

export default singer
