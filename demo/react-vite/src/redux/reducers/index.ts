import { combineReducers } from 'redux'
import rankList from './rankList'
import songList from './songList'
import singerCategories from './singerCategories'
import rankInfo from './rankInfo'
import songListInfo from './songListInfo'
import singerList from './singerList'
import singerInfo from './singerInfo'

const rootReducer = combineReducers({
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo
})

export default rootReducer
