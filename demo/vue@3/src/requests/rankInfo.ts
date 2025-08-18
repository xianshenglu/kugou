import http from './http'
import { getRankInfo } from '@shared/api/rankInfo'

// 定义参数接口
interface RankInfoParams {
  [key: string]: any
}

// 定义获取排行榜信息函数
export const fetchRankInfo = ({ params = {} }: { params?: RankInfoParams } = {}) => {
  return http({ ...getRankInfo, params: { json: true, page: 1, ...params } })
}
