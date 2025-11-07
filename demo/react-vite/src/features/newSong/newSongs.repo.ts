import api from 'src/shared/constants/api'
import axios from 'axios'
import type { NewSongResponseDto } from '@shared/domains/song/dto'
import type { NewSong } from '@shared/domains/song/model'

export interface NewSongsData {
  songs: NewSong[]
  sliderData: any[]
}

export async function getNewSongs(): Promise<NewSongsData> {
  const response = await axios.get<NewSongResponseDto>(api.newSongs)
  return {
    songs: response.data.data,
    sliderData: response.data.banner
  }
}

