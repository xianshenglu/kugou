<template>
  <section class="singer_info" v-if="isSingerInfoShow">
    <PubModuleHead :moduleHeadInfo="getModuleHeadInfo()">
      <PubModuleDes slot="moduleDes" :description="getModuleHeadInfo().intro"></PubModuleDes>
    </PubModuleHead>
    <PubMusicList :musicList="getMusicList()"></PubMusicList>
  </section>
</template>

<script>
import PubModuleHead from '../public/PubModuleHead'
import PubModuleDes from '../public/PubModuleDes'
import PubMusicList from '../public/PubMusicList'
import axios from 'axios'
import api from '../../assets/js/api.js'
export default {
  name:'SingerInfo',
  components:{
    PubModuleHead,
    PubMusicList,
    PubModuleDes
  },
  data:function() {
    return {
      singerInfo: {},
      isSingerInfoShow: false,
      getModuleHeadInfo(){
        return this.singerInfo.info
      },
      getMusicList(){
        return this.singerInfo.data
       },
    }
  },
  created() {
    let singerId = this.$route.path.split('/').pop()
      this.getSingerInfo(singerId)
  },
  methods:{
    getSingerInfo(singerId) {
      axios
        .get(api.singerInfo.replace(/singerId?/i, singerId))
        .then(({ data }) => {
          let singerInfo = {
            info: {
              id: data.info.singerid,
              name: data.info.singername,
              count: data.info.songcount,
              albumcount: data.info.albumcount,
              imgUrl: data.info.imgurl.replace(/\{size\}/, 400),
              intro: data.info.intro
            },
            data: data.songs.list
          }
          data.songs.list.forEach(obj => {
            obj.name = obj.filename
            // obj.path='/singer/info/'+obj.id
          })
          Object.assign(this.singerInfo, singerInfo)
          this.singerInfo=singerInfo
          this.isSingerInfoShow = true
        })
        .catch(er => {
          alert(er)
        })
    }
  }

}
</script>

<style scoped lang="less">
</style>
