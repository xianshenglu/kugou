<template>
  <section class="song_list">
    <PubList :pub-list="songList" v-if="songList.length!==0">
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
import PubList from '../public/PubList'
import axios from 'axios'
import api from '../../assets/js/api.js'
import utilsMixin from '../../assets/js/utilsMixin.js'

export default {
  name: 'SongList',
  mixins: [utilsMixin],
  components: {
    PubList
  },
  data() {
    return {
      songList: []
    }
  },
  created() {
    this.getSongList()
  },
  methods: {
    getSongList() {
      axios.get(api.songList).then(({ data }) => {
        data.plist.list.info.forEach(obj => {
          obj.imgUrl = this.replaceImgUrlSize(obj.imgurl)
          obj.path = '/song/list/' + obj.specialid
          obj.title = obj.specialname
          obj.popularity = obj.playcount
          this.songList.push(obj)
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
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
  color: @white-to-black;

  font-size: 15px;
}

</style>
