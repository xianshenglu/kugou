import api from 'src/shared/constants/api'
import { mapSingerListData } from '@shared/domains/singer/mapper'
import type { SingerListData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerListResponseDto } from '@shared/domains/singer/dto'

export async function getSingerList(id: string): Promise<SingerListData> {
  const url = api.singerList.replace(/singerListId?/i, id)
  const response = await axios.get<SingerListResponseDto>(url)
  return mapSingerListData(response.data)
}

