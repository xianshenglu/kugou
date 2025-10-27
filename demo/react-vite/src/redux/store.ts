import { baseApi } from './baseApi'
import singerCategories from './reducers/singerCategories'
import singerList from './reducers/singerList'
import singerInfo from './reducers/singerInfo'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    singerCategories,
    singerList,
    singerInfo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export default store
