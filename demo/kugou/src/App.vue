<template>
  <div id="app" class="app">
    <PubHeader></PubHeader>
    <router-view class="app__cont" :navs="navs" :newSongs="newSongs" :rankList="rankList" :songList="songList" :singerCategories="singerCategories" :isRankInfoShow="isRankInfoShow" :curRankInfo="curRankInfo" @updateCurRankInfo="updateCurRankInfo" @getRankInfo="getRankInfo" @destroyCurRankInfo="destroyCurRankInfo" :isSongListInfoShow="isSongListInfoShow" :curSongListInfo="curSongListInfo" @updateCurSongListInfo="updateCurSongListInfo" @getSongListInfo="getSongListInfo" @destroyCurSongListInfo="destroyCurSongListInfo" :isSingerCategoryInfoShow="isSingerCategoryInfoShow" :curSingerCategoryInfo="curSingerCategoryInfo" @updateCurSingerCategoryInfo="updateCurSingerCategoryInfo" @getSingerCategoryInfo="getSingerCategoryInfo" @destroyCurSingerCategoryInfo="destroyCurSingerCategoryInfo" :isSingerInfoShow="isSingerInfoShow" :curSingerInfo="curSingerInfo" @updateCurSingerInfo="updateCurSingerInfo" @getSingerInfo="getSingerInfo" @destroyCurSingerInfo="destroyCurSingerInfo"></router-view>
    <!-- <Player></Player> -->
  </div>
</template>

<script>
import PubHeader from '@/components/public/PubHeader'
import PubNav from './components/public/PubNav'
import axios from 'axios'
import api from '@/assets/js/api.js'
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
        },
        {
          text: '排行',
          name: 'rank',
          active: false,
          link: '/rank/list'
        },
        {
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
      isSongListInfoShow: false,
      singerCategoryInfo:[],
      curSingerCategoryInfo:{},
      isSingerCategoryInfoShow: false,
      singerInfo:[],
      curSingerInfo:{},
      isSingerInfoShow:false
    }
  },
  provide() {
    return {
      closet: this.closet
    }
  },
  methods: {
    // goBack(){
    //   console.log(1)
    //   alert(1)
    // },
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

      axios.get(api.newSong).then(({
        data
      }) => {
        data.data.forEach(({
          filename
        }) => {
          this.newSongs.push({
            filename
          })
        })
      })
    },
    getRank() {
      axios.get(api.rankList).then(({
        data
      }) => {
        data.rank.list.forEach(obj => {
          obj.imgUrl = obj.imgurl.replace(/\{size\}/, 400)
          obj.path = '/rank/info/' + obj.rankid
          obj.title = obj.rankname
          this.rankList.push(obj)
        })
      })
    },
    getRankInfo(rankId) {
      axios
        .get(api.rankInfo + rankId)
        .then(res => {
          let curRankInfo = {
            info: res.data.info,
            songs: res.data.songs
          }
          this.rankInfo.push(curRankInfo)
          Object.assign(this.curRankInfo, curRankInfo)
          this.isRankInfoShow = true
        })
        .catch(er => {
          alert(er)
        })

    },
    updateCurRankInfo(rankId) {
      let isExist = this.rankInfo.find(obj => obj.info.rankid == rankId)
      if (isExist) {
        Object.assign(this.curRankInfo, isExist)
        this.isRankInfoShow = true
      }
    },
    destroyCurRankInfo() {
      this.isRankInfoShow = false
    },
    getSongList() {
      axios.get(api.songList).then(({
        data
      }) => {
        data.plist.list.info.forEach(obj => {
          obj.imgUrl = obj.imgurl.replace(/\{size\}/, 400)
          obj.path = '/song/list/' + obj.specialid
          obj.title = obj.specialname
          obj.popularity = obj.playcount
          this.songList.push(obj)
        })
      })
    },
    getSongListInfo(songListId) {
      axios
        .get(api.songListInfo.replace(/songListId?/i, songListId))
        .then(({
          data
        }) => {
          let curSongListInfo = {
            info: data.info,
            songs: data.list
          }
          Object.assign(this.curSongListInfo, curSongListInfo)
          this.songListInfo.push(curSongListInfo)
          this.isSongListInfoShow = true
        })
        .catch(er => {
          alert(er)
        })
    },
    updateCurSongListInfo(songListId) {
      let isExist = this.songListInfo.find(
        obj => obj.info.list.specialid == songListId
      )
      if (isExist) {
        Object.assign(this.curSongListInfo, isExist)
        this.isSongListInfoShow = true
      }
    },
    destroyCurSongListInfo() {
      this.isSongListInfoShow = false
    },
    getSingerCategories() {
      axios.get(api.singerCategory).then(({
        data
      }) => {
        data.list.reduce((re, obj) => {
          obj.path = '/singer/list/' + obj.classid
          let findCategories = re.find(
            o => o.category === obj.classname.substring(0, 2)
          )
          if (findCategories) {
            findCategories.data.push(obj)
          } else {
            re.push({
              category: obj.classname.substring(0, 2),
              data: [obj]
            })
          }
          return re
        }, this.singerCategories)
      })
    },
    getSingerCategoryInfo(singerCategoryInfoId) {
      axios
        .get(api.singerCategoryInfo.replace(/singerCategoryInfoId?/i, singerCategoryInfoId))
        .then(({
          data
        }) => {
          let curSingerCategoryInfo = {
            info: {id: data.classid,name:data.classname,count:data.singers.total},
            data: data.singers.list.info
          }
          data.singers.list.info.forEach(obj=>{
            obj.id=obj.singerid
            obj.name=obj.singername
            obj.imgUrl=obj.imgurl.replace(/\{size\}/,400)
            obj.path='/singer/info/'+obj.id
          })
          Object.assign(this.curSingerCategoryInfo, curSingerCategoryInfo)
          this.singerCategoryInfo.push(curSingerCategoryInfo)
          this.isSingerCategoryInfoShow = true
        })
        .catch(er => {
          alert(er)
        })
    },
    updateCurSingerCategoryInfo(singerCategoryInfoId){
       let isExist = this.singerCategoryInfo.find(
        obj => obj.id == singerCategoryInfoId
      )
      if (isExist) {
        Object.assign(this.curSingerCategoryInfo, isExist)
        this.isSingerCategoryInfoShow = true
      }
    },
    destroyCurSingerCategoryInfo() {
      this.isSingerCategoryInfoShow = false
    },
    getSingerInfo(singerId){
       axios
        .get(api.singerInfo.replace(/singerId?/i, singerId))
        .then(({
          data
        }) => {

          let curSingerInfo = {
            info: {
              id: data.info.singerid,
              name:data.info.singername,
              count:data.info.songcount,
              albumcount:data.info.albumcount,
              imgUrl:data.info.imgurl.replace(/\{size\}/,400),
              intro:data.info.intro
              },
            data: data.songs.list
          }
         data.songs.list.forEach(obj=>{
            obj.name=obj.filename
            // obj.path='/singer/info/'+obj.id
          })
          Object.assign(this.curSingerInfo, curSingerInfo)
          this.singerInfo.push(curSingerInfo)
          this.isSingerInfoShow = true
        })
        .catch(er => {
          alert(er)
        })
    },
    updateCurSingerInfo(singerId){
      let isExist = this.singerInfo.find(
        obj => obj.id == singerId
      )
      if (isExist) {
        Object.assign(this.curSingerInfo, isExist)
        this.isSingerInfoShow = true
      }
    },
    destroyCurSingerInfo(){
        this.isSingerInfoShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;

  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__cont {
  overflow-y: auto;

  height: calc(100vh - 58px);
}

</style>
