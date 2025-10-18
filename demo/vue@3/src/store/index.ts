import { createStore } from 'vuex'

import device from './device'
import loading from './loading'
import player from './player'
import rank from './rank'
import singer from './singer'
import song from './song'
import search from './search'
import newSong from './newSong'
import images from './images'

import type { DeviceState } from './device'
import type { LoadingState } from './loading'
import type { PlayerState } from './player'
import type { RankState } from './rank'
import type { SingerState } from './singer'
import type { SongState } from './song'
import type { SearchState } from './search'
import type { NewSongState } from './newSong'
import type { ImagesState } from './images'

export interface RootState {
  device: DeviceState
  loading: LoadingState
  player: PlayerState
  rank: RankState
  singer: SingerState
  song: SongState
  search: SearchState
  newSong: NewSongState
  images: ImagesState
}

let store = createStore<RootState>({
  modules: {
    device,
    loading,
    player,
    rank,
    singer,
    song,
    newSong,
    search,
    images
  },
  strict: import.meta.env.DEV,
  mutations: {
    replaceProperty(state: RootState, { paths, data }: { paths: string; data: any }) {
      if (typeof paths !== 'string') {
        return
      }
      const pathList = paths.split('.')
      let targetObj = pathList.slice(0, -1).reduce((re: any, key: string) => re[key], state)
      targetObj[pathList.pop()!] = data
    }
  }
})
// window.store = store
export default store
