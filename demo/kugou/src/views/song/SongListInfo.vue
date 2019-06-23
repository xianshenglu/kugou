<template>
  <section class="song_list_info">
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
import { fetchSongListInfo } from '../../requests/songListInfo'
import loading from '../../mixins/loading'
import { mapState, mapMutations } from 'vuex'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
export default {
  name: 'SongListInfo',
  mixins: [loading],
  components: {
    PubModuleHead,
    AppMusicList,
    PubModuleDes
  },
  computed: {
    ...mapState('song', ['songListInfo']),
    getModuleHeadInfo() {
      let data = this.songListInfo.info.list
      return {
        imgUrl: replaceSizeInUrl(data.imgurl),
        name: data.specialname,
        intro: data.intro
      }
    },
    getMusicList() {
      return this.songListInfo.songs.list.info
    }
  },
  created() {
    let songListId = this.$route.path.split('/').pop()
    this.setLoadingExcludeHeader()
    this.startLoading()
    this.getSongListInfo(songListId)
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSongListInfo(songListId) {
      fetchSongListInfo({ songListId }).then(({ data }) => {
        let songListInfo = {
          info: data.info,
          songs: data.list
        }
        this.replaceProperty({
          paths: 'song.songListInfo',
          data: songListInfo
        })
        this.stopLoading()
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
