import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
import rankInfo from './rankInfo'

const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo
})

export default rootReducer
