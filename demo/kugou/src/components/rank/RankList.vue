<template>
<section class="rank_list" @click="getRankInfo">
  <PubList :pubList="pubList">
    <div class="rank_list__info" slot-scope="props" slot="cont">{{props.data.title}}</div>
  </PubList>
</section>
</template>

<script>
import PubList from '../PubList'
export default {
  name: 'RankList',
  props: ['rankList'],
  data(){
    return {
      pubList:this.$props.rankList.map(({
        imgurl,
        rankid,
        rankname
      }) => ({
        img_url: imgurl.replace(/\{size\}/, 400),
        path: '/rank/info/' + rankid,
        title:rankname
      }))
    }
  },
  components: {
    PubList
  },
  inject:['closet'],
  methods: {
    getRankInfo(event){
      let rankId = this.closet('[href]', event.target).href.split('/').pop()
      this.$emit('getRankInfo',rankId)
    }
  }
}
</script>

<style lang="less" scoped>
.rank_list {
  font-size: 19px;
}

.rank_list__info {
  padding-left: 18px;
}
</style>
