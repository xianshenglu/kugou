import { baseApi } from './baseApi'
import songList from './reducers/songList'
import singerCategories from './reducers/singerCategories'
import songListInfo from './reducers/songListInfo'
import singerList from './reducers/singerList'
import singerInfo from './reducers/singerInfo'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    songList,
    singerCategories,
    songListInfo,
    singerList,
    singerInfo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store
