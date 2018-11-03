import axios from 'axios'
import api from '../assets/js/api'
import utils from '../assets/js/utils'
import store from './index'
function getCurMusicIndex(state) {
  return state.musicList.findIndex(music => music === state.music)
}
const player = {
  namespaced: true,
  state: {
    musicList: [],
    music: {
      filename: ''
    },
    song: {},
    lyrics: '',
    audioEl: {},
    isPlaying: false,
    isShow: false
  },
  getters: {
    curMusicIndex: getCurMusicIndex,
    singerImg(state) {
      if (!state.song.img) {
        return
      }
      return utils.$_xsl__replaceImgUrlSize(state.song.img, 400)
    },
    singerName(state) {
      //use music because song have to get by ajax.
      return state.music.filename.split(/\s+-\s+/)[0]
    },
    songName(state) {
      return state.music.filename.split(/\s+-\s+/)[1]
    },
    lyricItems: state => {
      let lyricsArr = state.lyrics.split(/\n/)
      lyricsArr.pop()
      return lyricsArr.map(text => {
        let arr = text.replace('[', '').split(']')
        let time = arr[0]
        let min = time.split(':')[0]
        let sec = time.split(':')[1].split('.')[0]
        let millisecond = time.split(':')[1].split('.')[1]
        return {
          time: min * 60 * 1000 + sec * 1000 + Number(millisecond),
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
      state.isShow = true
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
