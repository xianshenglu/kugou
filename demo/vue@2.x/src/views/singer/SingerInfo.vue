<template>
  <section class="singer_info">
    <PubModuleHead :module-head-info="getModuleHeadInfo">
      <PubModuleDes slot="moduleDes" :description="getModuleHeadInfo.intro"/>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList"/>
  </section>
</template>

<script>
import PubModuleHead from '@/components/PubModuleHead'
import PubModuleDes from '@/components/PubModuleDes'
import AppMusicList from '@/components/AppMusicList'
import { fetchSingerInfo } from '../../requests/singerInfo'
import loading from '../../mixins/loading'
import { mapState, mapMutations } from 'vuex'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
export default {
  name: 'SingerInfo',
  mixins: [loading],
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
    this.setLoadingExcludeHeader()
    this.startLoading()
    this.getSingerInfo(singerId)
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSingerInfo(singerId) {
      fetchSingerInfo({ singerId }).then(({ data }) => {
        let singerInfo = {
          info: {
            id: data.info.singerid,
            name: data.info.singername,
            count: data.info.songcount,
            albumcount: data.info.albumcount,
            imgUrl: replaceSizeInUrl(data.info.imgurl),
            intro: data.info.intro
          },
          data: data.songs.list
        }
        data.songs.list.forEach(obj => {
          obj.name = obj.filename
          // obj.path='/singer/info/'+obj.id
        })
        this.replaceProperty({
          paths: 'singer.singerInfo',
          data: singerInfo
        })
        this.stopLoading()
      })
    }
  }
}
</script>

<style scoped lang="less">
</style>
