import Vue from 'vue'
import VueRouter from 'vue-router'
import NewSongs from '../components/new_songs/Index'
import RankList from '../components/rank/RankList'
import SongsList from '../components/songs/SongsList'
import SingerCategories from '../components/singer/SingerCategories'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: NewSongs
    },
    {
      path: '/rank/list',
      // name: 'Render',
      component: RankList
    },
    {
      path: '/songs_list/index',
      // name: 'Render',
      component: SongsList
    },
    {
      path: '/singers/class',
      // name: 'Render',
      component: SingerCategories
    }
  ]
})
