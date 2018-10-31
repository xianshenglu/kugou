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
    lyrics: '',
    audioEl: {},
    isPlaying: false
  },
  getters: {
    curMusicIndex: getCurMusicIndex,
    lyricsItems: state => {
      let lyricsArr = state.lyrics.split(/\n/)
      lyricsArr.pop()
      return lyricsArr.map(text => {
        let arr = text.replace('[', '').split(']')
        let time = arr[0]
        let min = time.split(':')[0]
        let sec = time.split(':')[1].split('.')[0]
        let millisecond = time.split(':')[1].split('.')[1]
        return {
          time: min * 60 * 1000 + sec * 1000 + millisecond,
          text: arr[1].trim().replace(/(男[:：]\s*)|(女[:：]\s*)/, '')
        }
      })
    }
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
