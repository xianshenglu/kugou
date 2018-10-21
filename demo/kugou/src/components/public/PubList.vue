<template>
  <ul class="pub_list" @scroll="loadImgLazy">
    <li class="pub_list__item main_border_bottom" v-for="(item,index) in pubList" :key="index">
      <router-link :to="item.path" class="pub_list__link">
        <img class="pub_list__img" ref="lazyImages" src="../../assets/images/default.png" :data-src="item.imgUrl" :data-is-loaded="isLoaded">
        <slot :data="item" name="cont"></slot>
        <button class="pub_list__btn arrow arrow--right"></button>
      </router-link>
    </li>
  </ul>
</template>

<script>
import utilsMixin from '../../assets/js/utilsMixin.js'
export default {
  name: 'PubList',
  mixins: [utilsMixin],
  props: ['pubList'],
  mounted() {
    this.loadImgLazy()
  }
}
</script>

<style lang="less" scoped>
.pub_list {
  box-sizing: border-box;
  width: 100%;
  padding-left: 13px;
  height: 100%;
  //todo integrate with parentNode
  overflow: scroll;
}

.pub_list__item {
  height: 123px;
}

.pub_list__link {
  display: flex;
  align-items: center;

  height: 100%;
}

.pub_list__img {
  width: 97px;
  height: 97px;
  flex: 0 0 auto;
}

.pub_list__btn {
  flex: 0 0 auto;

  margin-right: 15px;
  margin-left: auto;
}



</style>
