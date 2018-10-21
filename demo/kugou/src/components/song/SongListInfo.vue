<template>
  <section class="song_list_info" v-if="isSongListInfoShow">
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
import utilsMixin from '../../assets/js/utilsMixin.js'

export default {
  name: 'SongListInfo',
  mixins: [utilsMixin],
  components: {
    PubModuleHead,
    PubMusicList,
    PubModuleDes
  },
  data() {
    return {
      songListInfo: {},
      isSongListInfoShow: false,
      getModuleHeadInfo() {
        let data = this.songListInfo.info.list
        return {
          imgUrl: this.replaceImgUrlSize(data.imgurl),
          name: data.specialname,
          intro: data.intro
        }
      },
      getMusicList() {
        return this.songListInfo.songs.list.info
      }
    }
  },
  created() {
    let songListId = this.$route.path.split('/').pop()
    this.getSongListInfo(songListId)
  },
  methods: {
    getSongListInfo(songListId) {
      axios
        .get(api.songListInfo.replace(/songListId?/i, songListId))
        .then(({ data }) => {
          let songListInfo = {
            info: data.info,
            songs: data.list
          }
          this.songListInfo = songListInfo
          this.isSongListInfoShow = true
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
