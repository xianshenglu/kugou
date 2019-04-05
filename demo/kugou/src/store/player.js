import axios from 'axios'
import api from '../assets/js/api'
import store from './index'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
function getCurMusicIndex(state) {
  return state.song === null
    ? -1
    : state.musicList.findIndex(music => music.hash === state.song.hash)
}
const player = {
  namespaced: true,
  state: {
    musicList: [],
    music: null, //music info without playUrl, singerImg and some key info.
    song: null, //music with  playUrl, singerImg and some key info.
    lyrics: '',
    audioEl: null,
    isLoading: false,
    isPlaying: false,
    isPlayerMedShow: false,
    isPlayerMedSmall: false
  },
  getters: {
    curMusicIndex: getCurMusicIndex,
    // todo getters got triggered when target component hasn't render?
    singerImg(state) {
      if (state.song === null || !state.song.img) {
        return
      }
      return replaceSizeInUrl(state.song.img, 400)
    },
    singerName(state) {
      return state.music && state.music.filename.split('-')[0].trim()
    },
    songName(state) {
      return state.music && state.music.filename.split('-')[1].trim()
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
    wantPlay(state, { music, musicList = state.musicList }) {
      if (state.music && music.hash === state.music.hash) {
        return
      }
      state.music = music
      state.isLoading = true
      state.isPlayerMedSmall = false
      // when resize event was triggered, PlayerMed will show
      if (window.innerHeight > store.state.device.vMax * 0.8) {
        state.isPlayerMedShow = true
      }
      store.dispatch('player/fetchMusic', { musicHash: music.hash, musicList })
    },
    togglePlay(state, status = !state.isPlaying) {
      if (status) {
        state.isLoading = false
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
        music: state.musicList[index + 1]
      })
    },
    prev(state) {
      let index = getCurMusicIndex(state)
      if (index < 0) {
        return
      }
      index = index === 0 ? state.musicList.length : index
      store.commit('player/wantPlay', {
        music: state.musicList[index - 1]
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
  actions: {
    fetchMusic({ commit }, { musicHash, musicList }) {
      axios.get(api.songLyric + musicHash).then(res => {
        let data = res.data.data
        musicList = musicList.length === 0 ? [data] : musicList
        commit(
          'replaceProperty',
          {
            paths: 'player.musicList',
            data: musicList
          },
          { root: true }
        )
        commit(
          'replaceProperty',
          {
            paths: 'player.lyrics',
            data: data.lyrics
          },
          { root: true }
        )
        commit(
          'replaceProperty',
          {
            paths: 'player.song',
            data: data
          },
          { root: true }
        )
      })
    }
  }
}
export default player
