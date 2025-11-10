import { create } from 'zustand'
import type { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import React from 'react'
import { PENDING, SUCCESS, ERROR } from '../constants/status'
import type { Song } from '@shared/domains/song/model'
import { fetchSongLyric, type SongInfo } from './player.repo'

type MusicStatus = {
  isPlaying: boolean
  isLoading: boolean
}

type PlayerState = {
  musicStatus: MusicStatus
  audioElRef: React.RefObject<HTMLAudioElement>
  isPlayerMedShow: boolean
  songList: Song[]
  songIndex: number
  songInfo: SongInfo
  status: string
  error: string | null
  
  // Actions
  fetchMusic: (id: string, songIndex: number, songList: Song[]) => void
  fetchMusicIfNeeded: (id: string | null, songIndex?: number, songList?: Song[]) => Promise<void>
  playMusic: () => void
  pauseMusic: () => void
  togglePlay: (status?: boolean) => void
  showMusicLoading: () => void
  hideMusicLoading: () => void
  switchPlayerMed: (isShow: boolean) => void
}

const createState: StateCreator<PlayerState> = (set, get) => ({
  musicStatus: {
    isPlaying: false,
    isLoading: false
  },
  audioElRef: React.createRef() as any,
  isPlayerMedShow: false,
  songList: [],
  songIndex: 0,
  songInfo: {
    hash: '',
    author_name: '',
    song_name: '',
    img: '',
    lyric: '',
    play_url: '',
    timelength: 0
  },
  status: '',
  error: null,

  fetchMusic: (id: string, songIndex: number, songList: Song[]) => {
    set({
      status: PENDING,
      songIndex,
      songList
    })
  },

  fetchMusicIfNeeded: async (id: string | null, songIndex = 0, songList: Song[] = []) => {
    if (!id) return
    
    const { fetchMusic, showMusicLoading, hideMusicLoading } = get()
    
    fetchMusic(id, songIndex, songList)
    showMusicLoading()
    
    try {
      const songInfo = await fetchSongLyric(id)
      
      set({
        status: SUCCESS,
        songInfo,
        error: null
      })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: ERROR
      })
    } finally {
      hideMusicLoading()
    }
  },

  playMusic: () => {
    set(state => ({
      musicStatus: {
        ...state.musicStatus,
        isPlaying: true
      }
    }))
  },

  pauseMusic: () => {
    set(state => ({
      musicStatus: {
        ...state.musicStatus,
        isPlaying: false
      }
    }))
  },

  togglePlay: (status?: boolean) => {
    const { musicStatus, audioElRef } = get()
    
    if (typeof status === 'undefined') {
      status = !musicStatus.isPlaying
    }
    
    if (status) {
      audioElRef.current.play()
      get().playMusic()
    } else {
      audioElRef.current.pause()
      get().pauseMusic()
    }
  },

  showMusicLoading: () => {
    set(state => ({
      musicStatus: {
        ...state.musicStatus,
        isLoading: true
      }
    }))
  },

  hideMusicLoading: () => {
    set(state => ({
      musicStatus: {
        ...state.musicStatus,
        isLoading: false
      }
    }))
  },

  switchPlayerMed: (isShow: boolean) => {
    set({ isPlayerMedShow: isShow })
  }
})

const usePlayerStore = create<PlayerState>()(devtools(createState, { name: 'zustand-player', store: 'player' }))

export default usePlayerStore
