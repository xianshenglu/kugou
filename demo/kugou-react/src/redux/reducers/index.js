import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList,
  singerCategories
})

export default rootReducer
