import { realToMock } from './realToMock'
import { getSongList as realGetSongList } from '../../api/songList.js'

export const getSongList = realToMock(realGetSongList, 'songList')
