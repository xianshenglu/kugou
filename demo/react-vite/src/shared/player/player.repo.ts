import axios from 'axios'
import api from '../constants/api'
import type { SongLyricResponseDto } from '@shared/domains/song/dto'

export type SongInfo = {
  hash: string
  author_name: string
  song_name: string
  img: string
  lyric: string
  play_url: string
  timelength: number
}

export async function fetchSongLyric(id: string): Promise<SongInfo> {
  const response = await axios.get<SongLyricResponseDto>(api.songInfoHasLyric + id)
  const {
    data: {
      author_name,
      song_name,
      img,
      lyrics,
      play_url,
      timelength,
      hash
    }
  } = response.data
  
  return {
    hash,
    author_name,
    song_name,
    img,
    lyric: lyrics,
    play_url,
    timelength
  }
}

