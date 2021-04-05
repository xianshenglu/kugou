import { getSingerCategory } from '../api/singerCategory'
import http from './http'

export const fetchSingerCategory = ({ params = {} } = {}) => {
  return http({
    ...getSingerCategory,
    params: { ...params }
  })
}
