<template>
  <section class="rank_info">
    <PubModuleHead :module-head-info="getModuleHeadInfo">
      <time class="rank_info__update_time" slot="moduleUpdateTime">{{msg}} {{formatDate}}</time>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList">
      <div
        :class="'rank_info__index '+'rank_info__index'+(props.data+1)"
        slot-scope="props"
        slot="index"
      >{{props.data+1}}</div>
    </AppMusicList>
  </section>
</template>

<script>
import PubModuleHead from '../public/PubModuleHead'
import AppMusicList from '../public/AppMusicList'
import axios from 'axios'
import api from '../../assets/js/api.js'
import mixin from '../../mixins/index.js'
import { mapState } from 'vuex'
export default {
  name: 'RankInfo',
  mixins: [mixin],
  components: {
    PubModuleHead,
    AppMusicList
  },
  data() {
    return {
      msg: '上次更新时间'
    }
  },
  computed: {
    ...mapState('rank', ['rankInfo']),
    getModuleHeadInfo() {
      return {
        imgUrl: this.$_xsl__replaceImgUrlSize(this.rankInfo.info.banner7url),
        name: this.rankInfo.info.rankname
      }
    },
    getMusicList() {
      return this.rankInfo.songs.list
    },
    formatDate() {
      let date = new Date(this.rankInfo.songs.timestamp * 1000)
      return (
        date.getFullYear() +
        '-' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '-' +
        String(date.getDate()).padStart(2, '0')
      )
    }
  },
  created() {
    let rankId = this.$route.path.split('/').pop()
    this.getRankInfo(rankId)
  },
  methods: {
    getRankInfo(rankId) {
      axios
        .get(api.rankInfo + rankId)
        .then(res => {
          let rankInfo = {
            info: res.data.info,
            songs: res.data.songs
          }
          this.$store.commit('replaceProperty', {
            paths: 'rank.rankInfo',
            data: rankInfo
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
@import (reference) '../../assets/css/constant.less';
.rank_info__update_time {
  align-self: flex-end;

  width: 100%;
  height: 50px;
  padding-left: 16px;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 5%,
    rgba(107, 107, 107, 0.1) 90%,
    rgba(255, 255, 255, 0)
  );

  font-size: 15px;
  line-height: 2.3;
}

.rank_info__index {
  width: 27px;
  height: 19px;
  margin-right: 10px;

  text-align: center;

  color: @white-to-black;
  border-radius: 9px;

  font-size: 13px;
  line-height: 19px;
}

.rank_info__index1 {
  color: @white;
  background-color: @red;
}

.rank_info__index2 {
  color: @white;
  background-color: @orange;
}

.rank_info__index3 {
  color: @white;
  background-color: @yellow;
}
</style>
