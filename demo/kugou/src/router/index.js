import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import NewSong from '../components/new/NewSong'
import RankList from '../components/rank/RankList'
import SongList from '../components/song/SongList'
import SingerCategory from '../components/singer/SingerCategory'
import RankInfo from '../components/rank/RankInfo'
import SongListInfo from '../components/song/SongListInfo'
import SingerCategoryInfo from '../components/singer/SingerCategoryInfo'

Vue.use(VueRouter)

export default new VueRouter({
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
          path: 'rank/list',
          component: RankList
        },
        {
          path: 'song/list',
          component: SongList
        },
        {
          path: 'singer/category',
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
      component: SingerCategoryInfo
    }
  ]
})
