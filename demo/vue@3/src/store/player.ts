import { fetchSongLyric } from '../requests/player'
import store from './index'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

import type { Song, LyricItem, SongPlayingInfo } from '@shared/domains/song/model'


export interface PlayerState {
  musicList: Song[]
  music: Song | null
  song: SongPlayingInfo | null
  lyrics: string
  audioEl: HTMLAudioElement | null
  isLoading: boolean
  isPlaying: boolean
  isPlayerMedShow: boolean
  isPlayerMedSmall: boolean
  curPlayerId?: number
}

function getCurMusicIndex(state: PlayerState): number {
  return state.song === null
    ? -1
    : state.musicList.findIndex(music => music.hash === state.song!.hash)
}

const player: {
  namespaced: boolean
  state: () => PlayerState
  getters: any
  mutations: any
  actions: any
} = {
  namespaced: true,
  state: (): PlayerState => ({
    musicList: [],
    music: null, //music info without playUrl, singerImg and some key info.
    song: null, //music with  playUrl, singerImg and some key info.
    lyrics: '',
    audioEl: null,
    isLoading: false,
    isPlaying: false,
    isPlayerMedShow: false,
    isPlayerMedSmall: false
  }),
  getters: {
    curMusicIndex: getCurMusicIndex,
    // todo getters got triggered when target component hasn't render?
    singerImg(state: PlayerState): string | undefined {
      if (state.song === null || !state.song.img) {
        return undefined
      }
      return replaceSizeInUrl(state.song.img, '400')
    },
    singerName(state: PlayerState) {
      return state.music && state.music.filename?.split('-')[0]!.trim()
    },
    songName(state: PlayerState) {
      return state.music && state.music.filename?.split('-')[1]!.trim()
    },
    lyricItems(state: PlayerState): LyricItem[] {
      if (!state.lyrics) return []
      
      const lyricsArr = state.lyrics.split(/\n/)
      lyricsArr.pop()
      return lyricsArr.map(text => {
        const arr = text.replace('[', '').split(']')
        const time = arr[0]!
        const min = time.split(':')[0]
        const sec = time.split(':')[1]!.split('.')[0]
        const millisecond = time.split(':')[1]!.split('.')[1]
        return {
          millisecond: Number(min) * 60 * 1000 + Number(sec) * 1000 + Number(millisecond),
          text: arr[1]?.trim().replace(/(男[:：]\s*)|(女[:：]\s*)/, '') || ''
        }
      })
    }
  },
  mutations: {
    findAudioEl(state: PlayerState, el: HTMLAudioElement | null) {
      state.audioEl = el
    },
    wantPlay(state: PlayerState, { music, musicList = state.musicList }: { music: Song; musicList?: Song[] }) {
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
    togglePlay(state: PlayerState, status: boolean = !state.isPlaying) {
      if (status) {
        state.isLoading = false
        if (state.audioEl) {
          const playState = state.audioEl.play()
          if (typeof playState !== 'undefined') {
            playState
              .then(() => {
                state.isPlaying = true
              })
              .catch(() => {
                state.audioEl?.pause()
                state.isPlaying = false
              })
          }
        }
      } else {
        state.audioEl?.pause()
        state.isPlaying = false
      }
    },
    next(state: PlayerState) {
      const index = getCurMusicIndex(state)
      if (index < 0) {
        return
      }
      const nextIndex = index === state.musicList.length - 1 ? -1 : index + 1
      store.commit('player/wantPlay', {
        music: state.musicList[nextIndex]
      })
    },
    prev(state: PlayerState) {
      const index = getCurMusicIndex(state)
      if (index < 0) {
        return
      }
      const prevIndex = index === 0 ? state.musicList.length - 1 : index - 1
      store.commit('player/wantPlay', {
        music: state.musicList[prevIndex]
      })
    },
    togglePlayers(state: PlayerState, from: number) {
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
    async fetchMusic({ commit }: { commit: Function }, { musicHash, musicList }: { musicHash: string; musicList: Song[] }) {
      try {
        const res = await fetchSongLyric({ params: { hash: musicHash } })
        const data = res.data.data!
        const updatedMusicList = musicList.length === 0 ? [data] : musicList
        commit(
          'replaceProperty',
          {
            paths: 'player.musicList',
            data: updatedMusicList
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
      } catch (error) {
        console.error('Failed to fetch music:', error)
      }
    }
  }
}
export default player
