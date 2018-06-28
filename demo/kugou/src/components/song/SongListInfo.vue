<template>
<section class="song_list_info" v-if="isSongListInfoShow">
  <PubModuleHead :moduleHeadInfo="getModuleHeadInfo()">
    <div slot="moduleDes" class="song_list_info__intro">
      <p class="song_list_info__text">{{getModuleHeadInfo().intro}}</p>
      <button class="more_btn down"></button>
    </div>
  </PubModuleHead>
  <PubMusicList :musicList="getMusicList()"></PubMusicList>
</section>
</template>

<script>
import PubModuleHead from '../PubModuleHead'
import PubMusicList from '../PubMusicList'
export default {
  name: 'SongListInfo',
  props: ['curSongListInfo', 'isSongListInfoShow'],
  components: {
    PubModuleHead,
    PubMusicList
  },
  data() {
    return {
      getModuleHeadInfo(){
        return {
          headImg:this.$props.curSongListInfo.info.list.imgurl.replace(/\{\s*size\s*\}/, 400),
          title:this.$props.curSongListInfo.info.list.specialname,
          intro:this.$props.curSongListInfo.info.list.intro,
        }
      },
      getMusicList(){
        return this.$props.curSongListInfo.songs.list.info
      }
    }
  },
  created() {
    let songListId = this.$route.path.split('/').pop()
    let isDataReady = this.$props.curSongListInfo.info && this.$props.curSongListInfo.info.list.specialid === songListId
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
.song_list_info__intro {
  display: flex;
  overflow: hidden;
  align-items: flex-start;

  box-sizing: border-box;
  height: 41px;
  padding: 5px 0 5px 19px;

  box-shadow: 0 3px 4px 0 #eee;

  font-size: 18px;
  line-height: 1.8;
}

.more_btn {
  flex: 0 0 auto;

  width: 24px;
  height: 24px;
  margin: auto 12px;
}
.more_btn::before {
  width: 8px;
  height: 8px;
}

</style>
