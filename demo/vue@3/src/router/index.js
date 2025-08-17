import { createRouter, createWebHashHistory } from 'vue-router'

import store from '../store/index'
import Main from '../components/Main'

const NewSong = () => import(/* vitePrefetch: true */ '../views/newSong/NewSong')
const RankList = () => import(/* vitePrefetch: true */ '../views/rank/RankList')
const SongList = () => import(/* vitePrefetch: true */ '../views/song/SongList')
const SingerCategory = () =>
  import(/* vitePrefetch: true */ '../views/singer/SingerCategory')
const RankInfo = () => import(/* vitePrefetch: true */ '../views/rank/RankInfo')
const SongListInfo = () =>
  import(/* vitePrefetch: true */ '../views/song/SongListInfo')
const SingerList = () => import(/* vitePrefetch: true */ '../views/singer/SingerList')
const SingerInfo = () => import(/* vitePrefetch: true */ '../views/singer/SingerInfo')
const Search = () => import(/* vitePrefetch: true */ '../views/search/Search')
const PlayerMax = () => import(/* vitePrefetch: true */ '../views/player/PlayerMax')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: NewSong
        },
        {
          path: '/rank/list',
          component: RankList
        },
        {
          path: '/song/list',
          component: SongList
        },
        {
          path: '/singer/category',
          component: SingerCategory
        }
      ]
    },
    {
      path: '/rank/info/:id',
      component: RankInfo
    },
    {
      path: '/song/list/:id',
      component: SongListInfo
    },
    {
      path: '/singer/list/:id',
      component: SingerList
    },
    {
      path: '/singer/info/:id',
      component: SingerInfo
    },
    {
      path: '/search/index',
      component: Search
    },
    {
      path: '/player/max',
      component: PlayerMax,
      name: 'PlayerMax'
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('replaceProperty', { paths: 'loading.isShow', data: false })
  next()
})

export default router
