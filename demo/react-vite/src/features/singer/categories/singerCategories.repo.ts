import api from 'src/shared/constants/api'
import { mapSingerCategoryData } from '@shared/domains/singer/mapper'
import type { SingerCategoryData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerCategoryListResponseDto } from '@shared/domains/singer/dto'

export async function getSingerCategories(): Promise<SingerCategoryData[]> {
  const response = await axios.get<SingerCategoryListResponseDto>(api.singerCategories)
  return mapSingerCategoryData(response.data)
}

