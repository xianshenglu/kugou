import { combineReducers } from 'redux'
import newSong from './newSong'
import rankList from './rankList'
const rootReducer = combineReducers({
  newSong,
  rankList
})

export default rootReducer
