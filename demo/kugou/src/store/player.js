import axios from 'axios'
import api from '../assets/js/api'
const player = {
  namespaced: true,
  state: {
    musicList: [],
    music: null,
    song: {},
    audioEl: {},
    isPlaying: false
  },
  getters: {
    curMusicIndex: state => {
      return state.musicList.findIndex(music => music === state.music)
    }
  },
  mutations: {
    findAudioEl(state, el) {
      state.audioEl = el
    },
    wantPlay(state, { music, musicList = state.musicList }) {
      state.music = music
      state.musicList = musicList
      axios.get(api.songInfo + music.hash).then(res => {
        state.song = res.data
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
      let index = player.getters.curMusicIndex
      index = index === state.musicList.length - 1 ? -1 : index
      player.commit('wantPlay', { music: state.musicList[index + 1] })
    },
    prev(state) {
      let index = player.getters.curMusicIndex
      index = index === 0 ? state.musicList.length : index
      player.commit('wantPlay', { music: state.musicList[index - 1] })
    }
  }
}
export default player
