import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapSingerCategoryData } from '@shared/domains/singer/mapper'
import type { SingerCategoryData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerCategoryListResponseDto } from '@shared/domains/singer/dto'

const fetchSingerCategoriesData = async () => {
  const response = await axios.get<SingerCategoryListResponseDto>(api.singerCategories)
  return response
}

export const singerCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerCategories: builder.query<SingerCategoryData[], void>({
      queryFn: async () => {
        try {
          const { data } = await fetchSingerCategoriesData()
          return { data: mapSingerCategoryData(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerCategoriesQuery } = singerCategoriesApi
