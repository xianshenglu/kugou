<template>
<section class="song_list" @click="getSongListInfo">
  <PubList :pubList="pubList">
    <div class="song_list__info" slot-scope="props" slot="cont">
      <div class="song_list__title">{{props.data.title}}</div>
      <div class="song_list__star">
        <svg class="icon song_list__icon" aria-hidden="true">
        <use xlink:href="#icon-music"></use>
      </svg>
        <span class="song_list__popularity">{{props.data.popularity}}</span>
      </div>
    </div>
  </PubList>
</section>
</template>

<script>
import PubList from '../PubList'
export default {
  name: 'SongList',
  props: ['songList'],
  data() {
    return {
      pubList: this.$props.songList.map(({
        imgurl,
        specialid,
        specialname,
        playcount
      }) => ({
        img_url: imgurl.replace(/\{size\}/, 400),
        path: '/song/list/' + specialid,
        title:specialname,
        popularity: playcount
      }))
    }
  },
  components: {
    PubList
  },
  inject:['closet'],
  methods:{
    getSongListInfo(){
      let songListId = this.closet('[href]', event.target).href.split('/').pop()
      this.$emit('getSongListInfo',songListId)
    }
  }
}
</script>

<style lang="less" scoped>
.song_list__info {
  height: 97px;
  margin-right: 10px;
  padding-left: 18px;
}

.song_list__title {
  padding-top: 26px;
  font-size: 18px;
  line-height: 27px;
}

.song_list__icon {
  margin-right: 6px;
  vertical-align: baseline;
  font-size: 13px;
}

.song_list__popularity {
  color: #9b9b9b;
  font-size: 15px;
}
</style>
