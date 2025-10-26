import rankList from './reducers/rankList'
import songList from './reducers/songList'
import singerCategories from './reducers/singerCategories'
import rankInfo from './reducers/rankInfo'
import songListInfo from './reducers/songListInfo'
import singerList from './reducers/singerList'
import singerInfo from './reducers/singerInfo'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    rankList,
    songList,
    singerCategories,
    rankInfo,
    songListInfo,
    singerList,
    singerInfo
  },
})

export default store
