// 定义歌手状态接口
interface SingerData {
  info: Record<string, any>
  data: any[]
}

interface SingerState {
  singerCategories: any[]
  singerInfo: SingerData
  singerList: SingerData
}

const singer: {
  namespaced: boolean
  state: () => SingerState
} = {
  namespaced: true,
  state: (): SingerState => ({
    singerCategories: [],
    singerInfo: {
      info: {},
      data: []
    },
    singerList: {
      info: {},
      data: []
    }
  })
}

export default singer
