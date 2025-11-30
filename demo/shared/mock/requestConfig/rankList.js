import { realToMock } from './realToMock'
import { getRankList as realGetRankList } from '../../api/rankList.js'

export const getRankList = realToMock(realGetRankList, 'rankList')
