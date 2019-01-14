import { combineReducers } from 'redux'
import newSongHandler from './newSong'

const rootReducer = combineReducers({
  newSong: newSongHandler
})

export default rootReducer
