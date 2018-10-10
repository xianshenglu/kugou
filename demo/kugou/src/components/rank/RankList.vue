<template>
  <section class="rank_list" @click="updateCurRankInfo">
    <PubList :pubList="rankList">
      <div class="rank_list__info" slot-scope="props" slot="cont">{{props.data.title}}</div>
    </PubList>
  </section>
</template>

<script>
import PubList from '../public/PubList'
export default {
  name: 'RankList',
  props: ['rankList'],
  components: {
    PubList
  },
  methods: {
    updateCurRankInfo(event) {
      let rankId = utils
        .closest('[href]', event.target)
        .href.split('/')
        .pop()
      this.$emit('updateCurRankInfo', rankId)
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
