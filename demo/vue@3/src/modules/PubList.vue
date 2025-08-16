<template>
  <ul class="list" ref="lazyLoadRoot">
    <li class="list__item main_border_bottom" v-for="(item,index) in pubList" :key="index">
      <router-link :to="item.path" class="list__link">
        <img
          class="list__img lazy_image"
          ref="lazyImages"
          :src="logo__grey"
          :data-src="item.imgUrl"
        >
        <slot :data="item" name="cont"></slot>
        <button class="list__btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </button>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { lazyLoad } from '@/utils'
import { mapState } from 'vuex'
export default {
  name: 'PubList',
  props: {
    pubList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    pubList: {
      handler: function(newArray) {
        if (newArray.length === 0) {
          return
        }
        this.$nextTick(() =>
          lazyLoad(this.$refs.lazyImages, { root: this.$refs.lazyLoadRoot })
        )
      },
      immediate: true
    }
  },
  computed: {
    ...mapState('images', ['logo__grey'])
  }
}
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';
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
  font-size: 20px;
  margin-left: auto;
  margin-right: 15px;
}
</style>
