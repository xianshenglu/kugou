import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
import rankInfo from './rankInfo'
import songListInfo from './songListInfo'
import singerList from './singerList'
import singerInfo from './singerInfo'
import hotSearch from './hotSearch'
import keywordSearch from './keywordSearch'

const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo,
  hotSearch,
  keywordSearch
})

export default rootReducer
