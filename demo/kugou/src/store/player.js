import axios from 'axios'
import api from '../assets/js/api'
import utils from '../assets/js/utils'
import store from './index'
function getCurMusicIndex(state) {
  return state.musicList.findIndex(music => music.hash === state.song.hash)
}
const player = {
  namespaced: true,
  state: {
    musicList: [],
    song: null,
    lyrics: '',
    audioEl: null,
    isPlaying: false,
    isPlayerMedShow: false,
    isPlayerMedSmall: false
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
      return state.song.author_name
    },
    songName(state) {
      return state.song.song_name
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
          millisecond: min * 60 * 1000 + sec * 1000 + Number(millisecond),
          text: arr[1].trim().replace(/(男[:：]\s*)|(女[:：]\s*)/, '')
        }
      })
    }
  },
  mutations: {
    findAudioEl(state, el) {
      state.audioEl = el
    },
    wantPlay(state, { musicHash, musicList = state.musicList }) {
      state.isPlayerMedShow = true
      state.isPlayerMedSmall = false
      //todo move async to actions.
      axios.get(api.songLyric + musicHash).then(res => {
        let data = res.data.data
        state.musicList = musicList.length === 0 ? [data] : musicList
        store.commit('replaceProperty', {
          paths: 'player.lyrics',
          data: data.lyrics
        })
        store.commit('replaceProperty', {
          paths: 'player.song',
          data: data
        })
      })
    },
    togglePlay(state, status = !state.isPlaying) {
      if (status) {
        let playState = state.audioEl.play()
        if (typeof playState !== 'undefined') {
          playState
            .then(() => {
              state.isPlaying = true
            })
            .catch(() => {
              state.audioEl.pause()
              state.isPlaying = false
            })
        }
      } else {
        state.audioEl.pause()
        state.isPlaying = false
      }
    },
    next(state) {
      let index = getCurMusicIndex(state)
      if (index < 0) {
        return
      }
      index = index === state.musicList.length - 1 ? -1 : index
      store.commit('player/wantPlay', {
        musicHash: state.musicList[index + 1].hash
      })
    },
    prev(state) {
      let index = getCurMusicIndex(state)
      if (index < 0) {
        return
      }
      index = index === 0 ? state.musicList.length : index
      store.commit('player/wantPlay', {
        musicHash: state.musicList[index - 1].hash
      })
    },
    togglePlayers(state, from) {
      switch (from) {
        case 0:
          state.curPlayerId = 1
          break
        case 1:
          state.curPlayerId = 0
          break
      }
    }
  },
  actions: {}
}
export default player
