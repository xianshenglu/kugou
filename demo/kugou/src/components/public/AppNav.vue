<template>
  <nav class="nav">
    <router-link class="nav__link" v-for="(item,index) in navs" :key="index" :to="item.link" exact-active-class="nav__link--active">{{item.text}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
  props: ['navs']
}
</script>

<style lang="less" scoped>
@import (reference) "../../assets/css/constant.less";

.nav {
  position: relative;

  display: flex;

  padding: 0 13px;
}
.nav__link {
  display: block;
  flex: 1 0 auto;

  box-sizing: border-box;
  height: 100%;

  text-align: center;

  border-bottom: 4px solid transparent;

  font-size: 21px;
  line-height: inherit;
}
.nav__link--active {
  border-bottom-color: @theme-color;
}


</style>
