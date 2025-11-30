import { getSingerCategory } from '@shared/mock/requestConfig/singerCategory'
import http from './http'
import type { AxiosPromise } from 'axios'
import type { SingerCategoryListResponseDto } from '@shared/domains/singer/dto'

// 定义参数接口
interface SingerCategoryParams {
  [key: string]: any
}

// 定义获取歌手分类函数
export const fetchSingerCategory = ({ params = {} }: { params?: SingerCategoryParams } = {}): AxiosPromise<SingerCategoryListResponseDto> => {
  return http({
    ...getSingerCategory,
    params: { ...params }
  })
}
