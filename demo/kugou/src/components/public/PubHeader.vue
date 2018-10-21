<template>
  <header class="header">
    <button class="header__back arrow arrow--left" @click="goBack"></button>
    <router-link to="/">
      <img class=" header__logo" src="@/assets/images/logo.png">
    </router-link>
    <router-link class="header__search_btn" to="/search/index">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'PubHeader',
  methods: {
    goBack() {
      history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  height: 58px;
  padding: 0 12px;

  color: @white;
  background: @theme-color;
}
.header__logo {
  width: 131px;
  height: 30px;
  margin: auto;
}
.header__back {
  width: 16px;
  height: 16px;

  border-width: 2.2px;
  border-color: @white;
  transform: rotate(-45deg) translateY(-2px);
}
.header__search_btn {
  display: block;

  width: 27px;
  height: 27px;

  transform: translate(1px, -3px);

  font-size: 27px;
}



</style>
