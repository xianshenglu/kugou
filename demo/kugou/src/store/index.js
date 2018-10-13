import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '../assets/js/api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    music: undefined,
    song: {},
    audioEl: {},
    isPlaying: false
  },
  mutations: {
    findAudioEl (state, el) {
      state.audioEl = el
    },
    wantPlay (state, music) {
      state.music = music
      axios.get(api.song_info + music.hash).then(res => {
        state.song = res.data
      })
    },
    play (state) {
      state.audioEl.play()
      state.isPlaying = true
    },
    pause (state) {
      state.audioEl.pause()
      state.isPlaying = false
    }
  }
})