<template>
<div id="app" class="app">
  <PubHeader></PubHeader>
  <router-view :navs="navs" :newSongs="newSongs" :rankList="rankList" :songList="songList" :singerCategories="singerCategories" :isRankInfoShow="isRankInfoShow" :curRankInfo="curRankInfo" @getRankInfo="getRankInfo" @destroyCurRankInfo="destroyCurRankInfo"
    :isSongListInfoShow="isSongListInfoShow" :curSongListInfo="curSongListInfo" @getSongListInfo="getSongListInfo" @destroyCurSongListInfo="destroyCurSongListInfo" class="app__cont"></router-view>
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
    this.getNewSong()
    this.getRank()
    this.getSongList()
    this.getSingerCategories()
  },
  data() {
    return {
      navs: [{
          text: '新歌',
          name: 'new',
          active: true,
          link: '/'
        }, {
          text: '排行',
          name: 'rank',
          active: false,
          link: '/rank/list'
        }, {
          text: '歌单',
          name: 'song',
          active: false,
          link: '/song/list'
        },
        {
          text: '歌手',
          name: 'singer',
          active: false,
          link: '/singer/category'
        }
      ],
      newSongs: [],
      rankList: [],
      songList: [],
      singerCategories: [],
      rankInfo: [],
      curRankInfo: {},
      isRankInfoShow: false,
      songListInfo: [],
      curSongListInfo: {},
      isSongListInfoShow: false
    }
  },
  computed: {},
  provide() {
    return {
      closet: this.closet
    }
  },
  methods: {
    closet(selector, node) {
      let targetNode = Array.from(document.querySelectorAll(selector))
      let isFind = targetNode.find(ele => ele === node)
      let isHtml = node.tagName.toLowerCase() === 'html'
      while (!isFind && !isHtml) {
        node = node.parentNode
        isFind = targetNode.find(ele => ele === node)
      }
      return isFind
    },
    getNewSong() {
      axios.get(api.newSong).then(res => {
        res.data.data.forEach(({
          filename
        }) => {
          this.newSongs.push({
            filename
          })
        })
      })
    },
    getRank() {
      axios.get(api.rankList).then(res => {
        res.data.rank.list.forEach(obj => {
          this.rankList.push(obj)
        })
      })
    },
    getRankInfo(rankId) {
      let isExist = this.rankInfo.find(obj => obj.info.rankid == rankId)
      if (!isExist) {
        axios.get(api.rankInfo + rankId).then(res => {
          let curRankInfo = {
            info: res.data.info,
            songs: res.data.songs
          }
          this.rankInfo.push(curRankInfo)
          Object.assign(this.curRankInfo, curRankInfo)
          this.isRankInfoShow = true
        }).catch(er => {
          alert(er)
        })
      } else {
        Object.assign(this.curRankInfo, isExist)
        this.isRankInfoShow = true
      }
    },
    destroyCurRankInfo() {
      this.isRankInfoShow = false
    },
    getSongList() {
      axios.get(api.songList).then(res => {
        res.data.plist.list.info.forEach(obj => {
          this.songList.push(obj)
        })
      })
    },
    getSongListInfo(songListId) {
      let isExist = this.songListInfo.find(obj => obj.info.list.specialid == songListId)
      if (!isExist) {
        axios.get(api.songListInfo.replace(/songListId?/i, songListId)).then(({
          data
        }) => {
          let curSongListInfo = {
            info: data.info,
            songs: data.list
          }
          Object.assign(this.curSongListInfo, curSongListInfo)
          this.songListInfo.push(curSongListInfo)
          this.isSongListInfoShow = true
        }).catch(er => {
          alert(er)
        })
      } else {
        Object.assign(this.curSongListInfo,isExist)
        this.isSongListInfoShow = true
      }
      // console.log(JSON.stringify(this.songListInfo))
    },
    destroyCurSongListInfo() {
      this.isSongListInfoShow = false
    },
    getSingerCategories() {
      axios.get(api.singerCategory).then(res => {
        res.data.list.reduce((re, obj) => {
          let findCategories = re.find(o => o.categories === obj.classname.substring(0, 2))
          if (findCategories) {
            findCategories.data.push(obj)
          } else {
            re.push({
              categories: obj.classname.substring(0, 2),
              data: [obj]
            })
          }
          return re
        }, this.singerCategories)

      })

    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__cont {
  overflow-y: auto;
  height: calc(100vh - 58px);
}
</style>
