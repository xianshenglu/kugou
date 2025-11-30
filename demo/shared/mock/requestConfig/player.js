import { realToMock } from './realToMock'
import { getSongInfo as realGetSongInfo, getSongLyric as realGetSongLyric } from '../../api/player.js'

export const getSongInfo = realToMock(realGetSongInfo, 'songInfoHasLyric')
export const getSongLyric = realToMock(realGetSongLyric, 'songInfoHasLyric')
