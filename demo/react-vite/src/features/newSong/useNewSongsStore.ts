import { create } from 'zustand'
import type { StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import { PENDING, SUCCESS, ERROR } from '../../shared/constants/status'
import type { NewSong } from '@shared/domains/song/model'
import { getNewSongs } from './newSongs.repo'

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
      const { songs, sliderData } = await getNewSongs()

      set({
        songs,
        sliderData,
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

const useNewSongsStore = create<NewSongsState>()(
  devtools(createState, { name: 'zustand-newSongs', store: 'newSongs' })
)

export default useNewSongsStore
