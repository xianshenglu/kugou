<template>
<!-- <section class="rank">
  <ul class="rank__list">
    <li class="rank__item" v-for="(item,index) in rank" :key="index">
      <a href="#" class="rank__link">
        <img class="rank__img" :src="item.imgurl">
        <div class="rank__text">{{item.rankname}}</div>
        <button class="rank__btn"></button>
      </a>
    </li>
  </ul>
</section> -->
<PubList :pub_list_data="rank_list" class="rank_list">
  <div class="pub_list__text rank_list__text" slot-scope="props">{{props.data.rankname}}</div>
</PubList>
</template>

<script>
import PubList from '../PubList'
export default {
  name: 'RankList',
  props: ['rank_list'],
  components: {
    PubList
  }
}
</script>

<style lang="less" scoped>
.rank_list {
  font-size: 19px;
}

</style>
