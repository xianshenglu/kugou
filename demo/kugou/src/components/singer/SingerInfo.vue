<template>
  <section class="singer_info">
    <PubModuleHead :module-head-info="getModuleHeadInfo">
      <PubModuleDes slot="moduleDes" :description="getModuleHeadInfo.intro"/>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList"/>
  </section>
</template>

<script>
import PubModuleHead from '../public/PubModuleHead'
import PubModuleDes from '../public/PubModuleDes'
import AppMusicList from '../public/AppMusicList'
import axios from 'axios'
import api from '../../assets/js/api'
import mixin from '../../mixins/index'
import loading from '../../mixins/loading'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SingerInfo',
  mixins: [mixin, loading],
  components: {
    PubModuleHead,
    AppMusicList,
    PubModuleDes
  },
  computed: {
    ...mapState('singer', ['singerInfo']),
    getModuleHeadInfo() {
      return this.singerInfo.info
    },
    getMusicList() {
      return this.singerInfo.data
    }
  },
  created() {
    let singerId = this.$route.path.split('/').pop()
    this.getSingerInfo(singerId)
  },
  methods: {
    ...mapMutations(['replaceProperty']),
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
              imgUrl: this.$_xsl__replaceImgUrlSize(data.info.imgurl),
              intro: data.info.intro
            },
            data: data.songs.list
          }
          data.songs.list.forEach(obj => {
            obj.name = obj.filename
            // obj.path='/singer/info/'+obj.id
          })
          Object.assign(this.singerInfo, singerInfo)
          this.replaceProperty({
            paths: 'singer.singerInfo',
            data: singerInfo
          })
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
