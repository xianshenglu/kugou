<template>
  <section class="song_list_info">
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
  name: 'SongListInfo',
  mixins: [mixin, loading],
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
        imgUrl: this.$_xsl__replaceImgUrlSize(data.imgurl),
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
    this.getSongListInfo(songListId)
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSongListInfo(songListId) {
      axios
        .get(api.songListInfo.replace(/songListId?/i, songListId))
        .then(({ data }) => {
          let songListInfo = {
            info: data.info,
            songs: data.list
          }
          this.replaceProperty({
            paths: 'song.songListInfo',
            data: songListInfo
          })
        })
        .catch(er => {
          alert(er)
        })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
