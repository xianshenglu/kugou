import { http } from './http'
import { getSingerInfo } from '../api/rankInfo'

export const fetchSingerInfo = params => {
  return http({ ...getSingerInfo, params: { ...params } })
}
