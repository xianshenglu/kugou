import { realToMock } from './realToMock'
import { getSingerInfo as realGetSingerInfo } from '../../api/singerInfo.js'

export const getSingerInfo = realToMock(realGetSingerInfo, 'singerInfo')
