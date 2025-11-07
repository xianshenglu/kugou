import { baseApi } from 'src/shared/redux/baseApi'
import { getSingerCategories } from './singerCategories.repo'
import type { SingerCategoryData } from '@shared/domains/singer/model'

export const singerCategoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerCategories: builder.query<SingerCategoryData[], void>({
      queryFn: async () => {
        try {
          const data = await getSingerCategories()
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerCategoriesQuery } = singerCategoriesApi

