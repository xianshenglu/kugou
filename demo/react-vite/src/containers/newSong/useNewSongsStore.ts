import { create } from 'zustand'
import type { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import axios from 'axios'
import api from '../../constants/api'
import { PENDING, SUCCESS, ERROR } from '../../constants/status'
import type { NewSongResponseDto } from '@shared/domains/song/dto'
import type { NewSong } from '@shared/domains/song/model'

const fetchNewSongsData = async () => {
  const response = await axios.get<NewSongResponseDto>(api.newSongs)
  return response
}

type NewSongsState = {
  songs: NewSong[]
  sliderData: any[]
  status: string
  error: string | null
  fetchNewSongs: () => Promise<void>
  fetchNewSongsIfNeeded: () => Promise<void>
}

const createState: StateCreator<NewSongsState> = (set, get) => ({
  songs: [],
  sliderData: [],
  status: '',
  error: null,

  fetchNewSongs: async () => {
    set({ error: null, status: PENDING })
    
    try {
      const { data: { data, banner} } = await fetchNewSongsData()
      
      set({
        songs: data,
        sliderData: banner,
        status: SUCCESS,
        error: null
      })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Unknown error',
        status: ERROR
      })
    }
  },

  fetchNewSongsIfNeeded: async () => {
    const { status } = get()
    if (status !== SUCCESS && status !== PENDING) {
      await get().fetchNewSongs()
    }
  }
})

const useNewSongsStore = create<NewSongsState>()(devtools(createState))

export default useNewSongsStore
