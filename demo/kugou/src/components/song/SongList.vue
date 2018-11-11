<template>
  <section class="song_list">
    <PubList :pub-list="songList" class="song_list__cont">
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
import api from '../../assets/js/api'
import mixin from '../../mixins/index'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'SongList',
  mixins: [mixin],
  components: {
    PubList
  },
  computed: {
    ...mapState('song', ['songList'])
  },
  created() {
    if (this.songList.length === 0) {
      this.getSongList()
    }
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSongList() {
      axios.get(api.songList).then(({ data }) => {
        data.plist.list.info.forEach(obj => {
          obj.imgUrl = this.$_xsl__replaceImgUrlSize(obj.imgurl)
          obj.path = '/song/list/' + obj.specialid
          obj.title = obj.specialname
          obj.popularity = obj.playcount
        })
        this.replaceProperty({
          paths: 'song.songList',
          data: data.plist.list.info
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.song_list__cont {
  overflow: scroll;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.song_list__info {
  height: 97px;
  margin-right: 10px;
  padding-left: 18px;
}

.song_list__title {
  padding-top: 26px;

  line-height: 27px;
}

.song_list__icon {
  margin-right: 6px;

  vertical-align: baseline;

  font-size: @font_size_small;
}

.song_list__popularity {
  color: @white-to-black;

  font-size: @font_size_med;
}
</style>
