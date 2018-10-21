<template>
  <nav class="nav">
    <router-link class="nav__link" v-for="(item,index) in navs" :key="index" :to="item.link" exact-active-class="nav__link--active">{{item.text}}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'PubNav',
  props: ['navs']
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';

.nav {
  position: relative;
  z-index: 1;
  display: flex;

  box-sizing: border-box;
  width: 100%;
  padding: 0 13px;
  box-shadow: 0 3px 3px 0 @light-3-white;
}
.nav__link {
  flex: 1 0 auto;
  display: block;
  box-sizing: border-box;
  height: 58px;

  text-align: center;

  border-bottom: 4px solid transparent;

  font-size: 21px;
  line-height: 56px;
}
.nav__link--active {
  border-bottom-color: @theme-color;
}
</style>
