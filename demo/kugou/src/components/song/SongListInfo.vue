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
export default {
  name: 'SongListInfo',
  props: ['curSongListInfo','isSongListInfoShow'],
  components: {
    PubModuleHead,
    PubMusicList,
    PubModuleDes
  },
  data() {
    return {
      getModuleHeadInfo() {
        return {
          imgUrl: this.$props.curSongListInfo.info.list.imgurl.replace(/\{\s*size\s*\}/, 400),
          name: this.$props.curSongListInfo.info.list.specialname,
          intro: this.$props.curSongListInfo.info.list.intro,
        }
      },
      getMusicList() {
        return this.$props.curSongListInfo.songs.list.info
      }
    }
  },
  created() {
    let songListId = this.$route.path.split('/').pop()
    let isDataReady = this.$props.curSongListInfo.info && this.$props.curSongListInfo.info.list.specialid === songListId
    // console.log('isDataReady',isDataReady)

    if (!isDataReady) {
      this.$emit('getSongListInfo', songListId)
    }
  },
  destroyed() {
    //数据异步更新，没有被刷新，手动销毁数据，数据准备好了之后，再渲染
    this.$emit('destroyCurSongListInfo')
  }
}
</script>

<style lang="less" scoped>
</style>
