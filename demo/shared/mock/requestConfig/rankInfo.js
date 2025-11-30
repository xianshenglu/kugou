import { realToMock } from './realToMock'
import { getRankInfo as realGetRankInfo } from '../../api/rankInfo.js'

export const getRankInfo = realToMock(realGetRankInfo, 'rankInfo')
