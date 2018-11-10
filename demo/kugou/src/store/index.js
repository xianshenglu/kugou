import Vue from 'vue'
import Vuex from 'vuex'
import device from './device'
import loading from './loading'
import player from './player'
import rank from './rank'
import singer from './singer'
import song from './song'
import search from './search'
import newSong from './newSong'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    device,
    loading,
    player,
    rank,
    singer,
    song,
    newSong,
    search
  },
  mutations: {
    replaceProperty(state, { paths, data }) {
      if (typeof paths !== 'string') {
        return
      }
      paths = paths.split('.')
      let targetObj = paths.slice(0, -1).reduce((re, key) => re[key], state)
      targetObj[paths.pop()] = data
    }
  }
})
window.store = store
export default store
