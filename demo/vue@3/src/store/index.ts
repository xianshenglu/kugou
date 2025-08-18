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

// 定义Vuex store状态接口
interface RootState {
  [key: string]: any
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
      paths = paths.split('.')
      let targetObj = paths.slice(0, -1).reduce((re: any, key: string) => re[key], state)
      targetObj[paths.pop()!] = data
    }
  }
})
// window.store = store
export default store
