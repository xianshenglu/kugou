<template>
<section class="rank_info" v-if="isRankInfoShow">
  <div class="rank_info__head" :style="'background-image:url('+curRankInfo.info.banner7url.replace(/\{\s*size\s*\}/,400)+')'">
    <h6 class="rank_info__title">{{curRankInfo.info.rankname}}</h6>
    <time class="rank_info__update_time">
        {{msg}}
        {{dateFormat()}}
    </time>
  </div>
  <PubMusicList :musicList="curRankInfo.songs.list">
    <div :class="'rank_info__index '+'rank_info__index'+(props.data+1)" slot-scope="props">{{props.data+1}}</div>
  </PubMusicList>
</section>
</template>

<script>
import PubMusicList from '../PubMusicList'
export default {
  name: 'RankInfo',
  props: ['curRankInfo', 'isRankInfoShow'],
  components: {
    PubMusicList
  },
  data() {
    return {
      msg: '上次更新时间 : ',
      dateFormat () {
        let date = new Date(this.$props.curRankInfo.songs.timestamp * 1000)
        return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
      }
    }
  },
  created() {
    let isDataReady = this.$props.curRankInfo.info
    let rankId = this.$route.path.split('/').pop()

    if (!isDataReady) {
      this.$emit('getRankInfo', rankId)
    }
  }
}
</script>

<style lang="less" scoped>
.rank_info__head {
  display: flex;

  height: 225px;

  color: #fff;
  background-position: center center;
  background-size: cover;
}

.rank_info__title {
  position: fixed;
  top: 58px;
  left: 50%;

  width: 100%;
  height: 54px;

  transform: translateX(-50%);
  text-align: center;

  background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.6) 5%,
  rgba(107, 107, 107, 0.1) 90%,
  rgba(255, 255, 255, 0)
  );

  font-size: 18px;
  line-height: 54px;
}

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
  width: 26px;
  height: 19px;
  margin-right: 10px;

  text-align: center;

  color: #999;
  border-radius: 10px;

  font-size: 13px;
  line-height: 19px;
}

.rank_info__index1 {
  color: #fff;
  background-color: #e80000;
}

.rank_info__index2 {
  color: #fff;
  background-color: #ff7200;
}

.rank_info__index3 {
  color: #fff;
  background-color: #f8b300;
}

</style>
