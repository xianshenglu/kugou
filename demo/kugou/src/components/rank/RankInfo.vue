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
export default {
  name: 'RankInfo',
  props: ['curRankInfo', 'isRankInfoShow'],
  components: {
    PubModuleHead,
    PubMusicList
  },
  data() {
    return {
      msg: '上次更新时间 : ',
      formatDate() {
        let date = new Date(this.$props.curRankInfo.songs.timestamp * 1000)
        return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0')
      },
      getModuleHeadInfo() {
        //不用函数的话，直接用对象，在还没开始渲染的时候，就会求值，因为异步的数据还没到，导致下面值不对
        //异步的数据到了，这边的数据变了也不会立马更新，会等到下一次点击
        return {
          imgUrl: this.$props.curRankInfo.info.banner7url.replace(/\{\s*size\s*\}/, 400),
          name: this.$props.curRankInfo.info.rankname
        }
      },
      getMusicList(){
        return this.$props.curRankInfo.songs.list
      }
    }

  },
  created() {
    let rankId = this.$route.path.split('/').pop()
    let isDataReady = this.$props.curRankInfo.info && this.$props.curRankInfo.info.rankid === rankId
    // console.log('cre',isDataReady)
    if (!isDataReady) {
      this.$emit('getRankInfo', rankId)
    }
  },
  updated() {
    // console.log('updated')
  },
  destroyed() {
    //数据异步更新，页面没有被刷新，直接用了上一次的数据
    //所以这里手动销毁数据，数据准备好了之后，再渲染
    this.$emit('destroyCurRankInfo')
  },
}
</script>

<style lang="less" scoped>
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

  color: #999;
  border-radius: 9px;

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
