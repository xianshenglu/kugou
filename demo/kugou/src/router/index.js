import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

const Main = () => import(/* webpackChunkName: "Main" */ '../views/Main')

const NewSong = () =>
  import(/* webpackChunkName: "NewSong" */ '../views/new_song/NewSong')
const RankList = () =>
  import(/* webpackChunkName: "RankList" */ '../views/rank/RankList')
const SongList = () =>
  import(/* webpackChunkName: "SongList" */ '../views/song/SongList')
const SingerCategory = () =>
  import(/* webpackChunkName: "SingerCategory" */ '../views/singer/SingerCategory')
const RankInfo = () =>
  import(/* webpackChunkName: "RankInfo" */ '../views/rank/RankInfo')
const SongListInfo = () =>
  import(/* webpackChunkName: "SongListInfo" */ '../views/song/SongListInfo')
const SingerList = () =>
  import(/* webpackChunkName: "SingerList" */ '../views/singer/SingerList')
const SingerInfo = () =>
  import(/* webpackChunkName: "SingerInfo" */ '../views/singer/SingerInfo')
const Search = () =>
  import(/* webpackChunkName: "Search" */ '../views/search/Search')
const PlayerMax = () =>
  import(/* webpackChunkName: "PlayerMax" */ '../views/player/PlayerMax')

Vue.use(VueRouter)

const router = new VueRouter({
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
