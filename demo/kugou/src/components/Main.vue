<template>
  <main class="main">
    <!-- //todo add toggle between pages when user moves by hand. -->
    <AppNav :navs="navs" class="main__nav"/>
    <router-view class="main__cont"></router-view>
  </main>
</template>

<script>
import AppNav from './public/AppNav'
export default {
  name: 'Main',
  props: ['navs'],
  components: {
    AppNav
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import (reference) '../assets/css/constant.less';
.main__nav {
  z-index: 1;

  box-sizing: border-box;

  box-shadow: 0 3px 3px 0 @white-2;

  height: @nav_height;
  line-height: 58px;
}
.main__cont {
  overflow-y: auto;

  box-sizing: border-box;
  height: calc(100% - @nav_height);
}
</style>
