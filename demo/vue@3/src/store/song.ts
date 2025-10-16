import type { RoutableItem } from '@shared/domains/common/model'
import type { PlaylistSummary, PlaylistInnerInfo, PlaylistItem } from '@shared/domains/playlist/model'
export interface PlaylistItemInUi extends PlaylistSummary, RoutableItem {
  popularity?: number
}
interface SongListInfo {
  info: {
    list: PlaylistInnerInfo | null
  }
  songs: {
    list: {
      info: PlaylistItem[]
    }
  }
}

export interface SongState {
  songList: PlaylistItemInUi[]
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
