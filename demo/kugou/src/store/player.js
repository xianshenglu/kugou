import axios from 'axios'
import api from '../assets/js/api'
import store from './index'
function getCurMusicIndex(state) {
  return state.musicList.findIndex(music => music === state.music)
}
const player = {
  namespaced: true,
  state: {
    musicList: [],
    music: null,
    song: {},
    lyrics: {},
    audioEl: {},
    isPlaying: false
  },
  getters: {
    curMusicIndex: getCurMusicIndex
  },
  mutations: {
    findAudioEl(state, el) {
      state.audioEl = el
    },
    wantPlay(state, { music, musicList = state.musicList }) {
      state.music = music
      state.musicList = musicList
      axios.get(api.songInfoLyric + music.hash).then(res => {
        store.commit('replaceProperty', {
          paths: 'player.lyrics',
          data: res.data.data.lyrics
        })
        store.commit('replaceProperty', {
          paths: 'player.song',
          data: res.data.data
        })
      })
    },
    togglePlay(state, status = !state.isPlaying) {
      if (status) {
        state.audioEl.play()
        state.isPlaying = true
      } else {
        state.audioEl.pause()
        state.isPlaying = false
      }
    },
    next(state) {
      let index = getCurMusicIndex(state)
      index = index === state.musicList.length - 1 ? -1 : index
      store.commit('player/wantPlay', { music: state.musicList[index + 1] })
    },
    prev(state) {
      let index = getCurMusicIndex(state)
      index = index === 0 ? state.musicList.length : index
      store.commit('player/wantPlay', { music: state.musicList[index - 1] })
    }
  },
  actions: {}
}
export default player
