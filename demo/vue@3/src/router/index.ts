import { createRouter, createWebHashHistory, type RouteRecordRaw, type RouteLocationNormalized, type NavigationGuardNext } from 'vue-router'

import store from '../store/index'
import Main from '../components/Main.vue'

const NewSong = () => import(/* vitePrefetch: true */ '../views/newSong/NewSong.vue')
const RankList = () => import(/* vitePrefetch: true */ '../views/rank/RankList.vue')
const SongList = () => import(/* vitePrefetch: true */ '../views/song/SongList.vue')
const SingerCategory = () =>
  import(/* vitePrefetch: true */ '../views/singer/SingerCategory.vue')
const RankInfo = () => import(/* vitePrefetch: true */ '../views/rank/RankInfo.vue')
const SongListInfo = () =>
  import(/* vitePrefetch: true */ '../views/song/SongListInfo.vue')
const SingerList = () => import(/* vitePrefetch: true */ '../views/singer/SingerList.vue')
const SingerInfo = () => import(/* vitePrefetch: true */ '../views/singer/SingerInfo.vue')
const Search = () => import(/* vitePrefetch: true */ '../views/search/Search.vue')
const PlayerMax = () => import(/* vitePrefetch: true */ '../views/player/PlayerMax.vue')

const routes: Array<RouteRecordRaw> = [
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(
  (_to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
    store.commit('replaceProperty', { paths: 'loading.isShow', data: false })
    next()
  }
)

export default router
