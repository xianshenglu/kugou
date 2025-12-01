import { realToMock } from './realToMock'
import { getSongListInfo as realGetSongListInfo } from '../../api/songListInfo.js'

export const getSongListInfo = realToMock(realGetSongListInfo, 'songListInfo')
