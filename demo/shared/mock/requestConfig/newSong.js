import { realToMock } from './realToMock'
import { getNewSong as realGetNewSong } from '../../api/newSong.js'

export const getNewSong = realToMock(realGetNewSong, 'newSongs')
