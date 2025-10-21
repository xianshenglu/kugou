import { combineReducers } from 'redux'
import newSongs from './newSongs'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
import rankInfo from './rankInfo'
import songListInfo from './songListInfo'
import singerList from './singerList'
import singerInfo from './singerInfo'
import keywordSearch from './keywordSearch'
import player from './player'

const rootReducer = combineReducers({
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo,
  keywordSearch,
  player
})

export default rootReducer
