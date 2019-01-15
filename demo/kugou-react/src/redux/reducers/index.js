import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList
})

export default rootReducer
