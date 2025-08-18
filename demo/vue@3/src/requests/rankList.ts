import http from './http'
import { getRankList } from '@shared/api/rankList'

// 定义参数接口
interface RankListParams {
  [key: string]: any
}

// 定义获取排行榜列表函数
export const fetchRankList = ({ params = {} }: { params?: RankListParams } = {}) => {
  return http({ ...getRankList, params: { ...params } })
}
