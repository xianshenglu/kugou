import { realToMock } from './realToMock'
import { getSingerList as realGetSingerList } from '../../api/singerList.js'

export const getSingerList = realToMock(realGetSingerList, 'singerList')
