import { getSingerCategory } from '@shared/api/singerCategory'
import http from './http'
import type { AxiosPromise } from 'axios'
import type { SingerCategoryListResponse } from '@shared/domains/singer/model'

// 定义参数接口
interface SingerCategoryParams {
  [key: string]: any
}

// 定义获取歌手分类函数
export const fetchSingerCategory = ({ params = {} }: { params?: SingerCategoryParams } = {}): AxiosPromise<SingerCategoryListResponse> => {
  return http({
    ...getSingerCategory,
    params: { ...params }
  })
}
