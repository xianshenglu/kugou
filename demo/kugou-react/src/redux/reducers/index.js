import { combineReducers } from 'redux'
import newSong from './newSong'
import rankList from './rankList'
import songList from './songList'
const rootReducer = combineReducers({
  newSong,
  rankList,
  songList
})

export default rootReducer
