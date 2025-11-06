import api from 'src/shared/constants/api'
import { mapPlaylistList } from '@shared/domains/playlist/mapper'
import type { PlaylistSummary } from '@shared/domains/playlist/model'
import axios from 'axios'
import type { PlaylistListResponseDto } from '@shared/domains/playlist/dto'

export async function getSongList(): Promise<PlaylistSummary[]> {
  const response = await axios.get<PlaylistListResponseDto>(api.songList)
  return mapPlaylistList(response.data)
}

