<template>
<section class="rank_list" @click="getRankInfo">
  <PubList :pubListData="rankList">
    <div class="rank_list__info" slot-scope="props">{{props.data.rankname}}</div>
  </PubList>
</section>
</template>

<script>
import PubList from '../PubList'
export default {
  name: 'RankList',
  props: ['rankList'],
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
