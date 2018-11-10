<template>
  <ul class="list" @scroll="$_xsl__loadImgLazy($refs.lazyImages)">
    <li class="list__item main_border_bottom" v-for="(item,index) in pubList" :key="index">
      <router-link :to="item.path" class="list__link">
        <img
          class="list__img lazy_image"
          ref="lazyImages"
          src="../../assets/images/default.png"
          :data-src="item.imgUrl"
          :data-is-loaded="isLoaded"
        >
        <slot :data="item" name="cont"></slot>
        <button class="list__btn arrow arrow--right"></button>
      </router-link>
    </li>
  </ul>
</template>

<script>
import mixin from '../../mixins/index.js'
export default {
  name: 'PubList',
  mixins: [mixin],
  props: {
    pubList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    let lazyImages = this.$refs.lazyImages
    this.$_xsl__detectToLoadImgLazy(lazyImages, this.$el, '.lazy_image')
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.list {
  padding-left: @padding_width;
}

.list__item {
  height: 123px;
}

.list__link {
  display: flex;

  align-items: center;

  height: 100%;
}

.list__img {
  flex: 0 0 auto;

  width: 97px;

  height: 97px;
}

.list__btn {
  flex: 0 0 auto;

  margin-left: auto;
  margin-right: 15px;
}
</style>
