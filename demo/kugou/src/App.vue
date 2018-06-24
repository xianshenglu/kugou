<template>
<div id="app">
  <PubHeader></PubHeader>
  <PubNav :nav="nav"></PubNav>
  <router-view :new_songs="new_songs"
  :rank_list="rank_list"
  :songs_list="songs_list"
  :singer_categories="singer_categories"
  class="router"></router-view>
  <!-- <Player></Player> -->
</div>
</template>

<script>
import PubHeader from './components/PubHeader'
import PubNav from './components/PubNav'
import axios from 'axios'
import api from './assets/js/api.js'
export default {
  name: 'App',
  components: {
    PubHeader,
    PubNav
  },
  created() {
    this.getNewSongs()
    this.getRank()
    this.getSongsList()
    this.getSingerCategories()
  },
  data() {
    return {
      nav: [{
          text: '新歌',
          name: 'song',
          active: true,
          link: '/'
        }, {
          text: '排行',
          name: 'rank',
          active: false,
          link: '/rank/list'
        }, {
          text: '歌单',
          name: 'plist',
          active: false,
          link: '/songs_list/index'
        },
        {
          text: '歌手',
          name: 'singer',
          active: false,
          link: '/singers/class'
        }
      ],
      new_songs: [],
      rank_list: [],
      songs_list: [],
      singer_categories:[]
    }
  },
  methods: {
    getNewSongs() {
      axios.get(api.new_songs).then(res => {
        res.data.data.forEach(({
          filename
        }) => {
          this.new_songs.push({
            filename
          })
        })
      })
    },
    getRank() {
      axios.get(api.rank).then(res => {
        res.data.rank.list.forEach(obj => {
          obj.img_url = obj.imgurl.replace(/\{size\}/, 400)
          // obj.list_name = obj.rankname
          this.rank_list.push(obj)
        })
      })
    },
    getSongsList() {
      axios.get(api.songs_list).then(res => {
        // console.log(res);
        res.data.plist.list.info.forEach(obj => {
          obj.img_url = obj.imgurl.replace(/\{size\}/, 400)
          // obj.list_name = obj.specialname
          this.songs_list.push(obj)
        })
      })
    },
    getSingerCategories(){
      axios.get(api.singer_categories).then(res => {
        res.data.list.reduce((re,obj)=>{
          let findCategories=re.find(o=>o.categories===obj.classname.substring(0,2))
          if (findCategories) {
            findCategories.data.push(obj)
          }else {
            re.push({categories:obj.classname.substring(0,2),data:[obj]})
          }
          return re
        },this.singer_categories)

      })

    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;

  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router {
  overflow-y: auto;

  box-sizing: border-box;
  height: calc(100% - 116px);
}

</style>
