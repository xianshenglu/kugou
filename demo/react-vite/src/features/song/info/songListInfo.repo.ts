import api from 'src/shared/constants/api'
import { mapPlaylistInfo } from '@shared/domains/playlist/mapper'
import type { PlaylistInfoData } from '@shared/domains/playlist/model'
import axios from 'axios'
import type { PlaylistInfoResponseDto } from '@shared/domains/playlist/dto'

export async function getSongListInfo(id: string): Promise<PlaylistInfoData> {
  const url = api.songListInfo.replace(/songListInfoId/i, id)
  const response = await axios.get<PlaylistInfoResponseDto>(url)
  return mapPlaylistInfo(response.data)
}

