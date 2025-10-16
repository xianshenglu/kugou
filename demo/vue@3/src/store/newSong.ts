import type { Song } from '@shared/domains/song/model'

export interface NewSongState {
  newSongs: Song[]
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
