import api from 'src/shared/constants/api'
import { mapSingerInfoData } from '@shared/domains/singer/mapper'
import type { SingerInfoData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerInfoResponseDto } from '@shared/domains/singer/dto'

export async function getSingerInfo(id: string): Promise<SingerInfoData> {
  const url = api.singerInfo.replace(/singerInfoId?/i, id)
  const response = await axios.get<SingerInfoResponseDto>(url)
  return mapSingerInfoData(response.data)
}

