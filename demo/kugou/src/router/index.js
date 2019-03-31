import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

const Main = () => import('../components/Main')

const NewSong = () => import('../components/new_song/NewSong')
const RankList = () => import('../components/rank/RankList')
const SongList = () => import('../components/song/SongList')
const SingerCategory = () => import('../components/singer/SingerCategory')
const RankInfo = () => import('../components/rank/RankInfo')
const SongListInfo = () => import('../components/song/SongListInfo')
const SingerList = () => import('../components/singer/SingerList')
const SingerInfo = () => import('../components/singer/SingerInfo')
const Search = () => import('../components/search/Search')
const PlayerMax = () => import('../components/player/PlayerMax')

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
