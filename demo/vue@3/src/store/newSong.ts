import type { NewSong } from '@shared/domains/song/model'

export interface NewSongState {
  newSongs: NewSong[]
  sliderData: any[]
}

const newSong: {
  namespaced: boolean
  state: () => NewSongState
} = {
  namespaced: true,
  state: (): NewSongState => ({
    newSongs: [],
    sliderData: []
  })
}

export default newSong
