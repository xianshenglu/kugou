import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

const Main = () => import(/* webpackChunkName: "Main" */ '../components/Main')

const NewSong = () =>
  import(/* webpackChunkName: "NewSong" */ '../components/new_song/NewSong')
const RankList = () =>
  import(/* webpackChunkName: "RankList" */ '../components/rank/RankList')
const SongList = () =>
  import(/* webpackChunkName: "SongList" */ '../components/song/SongList')
const SingerCategory = () =>
  import(/* webpackChunkName: "SingerCategory" */ '../components/singer/SingerCategory')
const RankInfo = () =>
  import(/* webpackChunkName: "RankInfo" */ '../components/rank/RankInfo')
const SongListInfo = () =>
  import(/* webpackChunkName: "SongListInfo" */ '../components/song/SongListInfo')
const SingerList = () =>
  import(/* webpackChunkName: "SingerList" */ '../components/singer/SingerList')
const SingerInfo = () =>
  import(/* webpackChunkName: "SingerInfo" */ '../components/singer/SingerInfo')
const Search = () =>
  import(/* webpackChunkName: "Search" */ '../components/search/Search')
const PlayerMax = () =>
  import(/* webpackChunkName: "PlayerMax" */ '../components/player/PlayerMax')

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
