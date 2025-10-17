import type { PlaylistInfoData, PlaylistListData } from '@shared/domains/playlist/model'

export interface SongState {
  songList: PlaylistListData
  songListInfo: PlaylistInfoData
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
        list: null
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
