<template>
  <section class="rank_info" v-if="isRankInfoShow">
    <PubModuleHead :moduleHeadInfo="getModuleHeadInfo()">
      <time class="rank_info__update_time" slot="moduleUpdateTime">
        {{msg}} {{formatDate()}}
      </time>
    </PubModuleHead>
    <PubMusicList :musicList="getMusicList()">
      <div :class="'rank_info__index '+'rank_info__index'+(props.data+1)" slot-scope="props" slot="index">{{props.data+1}}</div>
    </PubMusicList>
  </section>
</template>

<script>
import PubModuleHead from '../public/PubModuleHead'
import PubMusicList from '../public/PubMusicList'
import axios from 'axios'
import api from '../../assets/js/api.js'

export default {
  name: 'RankInfo',
  components: {
    PubModuleHead,
    PubMusicList
  },
  data() {
    return {
      rankInfo: {},
      isRankInfoShow: false,
      msg: '上次更新时间 : ',
      formatDate() {
        let date = new Date(this.rankInfo.songs.timestamp * 1000)
        return (
          date.getFullYear() +
          '-' +
          String(date.getMonth() + 1).padStart(2, '0') +
          '-' +
          String(date.getDate()).padStart(2, '0')
        )
      },
      getModuleHeadInfo() {
        return {
          imgUrl: this.rankInfo.info.banner7url.replace(/\{\s*size\s*\}/, 400),
          name: this.rankInfo.info.rankname
        }
      },
      getMusicList() {
        return this.rankInfo.songs.list
      }
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
          this.rankInfo = rankInfo
          this.isRankInfoShow = true
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
  background-color:@red ;
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
