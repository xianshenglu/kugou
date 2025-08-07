import { combineReducers } from 'redux'
import appNav from './appNav'
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
import player from './player'

const rootReducer = combineReducers({
  appNav,
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo,
  hotSearch,
  keywordSearch,
  player
})

export default rootReducer
