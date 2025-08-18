// 定义歌曲列表信息接口
interface SongListInfo {
  info: {
    list: Record<string, any>
  }
  songs: {
    list: {
      info: any[]
    }
  }
}

interface SongState {
  songList: any[]
  songListInfo: SongListInfo
}

const song: {
  namespaced: boolean
  state: () => SongState
} = {
  namespaced: true,
  state: (): SongState => ({
    songList: [],
    songListInfo: {
      info: {
        list: {}
      },
      songs: {
        list: {
          info: []
        }
      }
    }
  })
}

export default song
