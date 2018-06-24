<template>
  <header class="header">
    <button class="header__back arrow arrow--left"></button>
    <img class="header__logo" src="../assets/images/logo.png">
    <button class="header__search-btn">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </button>
  </header>
</template>

<script>
  export default {
    name:'PubHeader'
  }
</script>

<style lang="less" scoped>
@themeColor: #2ca2f9;
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  height: 58px;
  padding: 0 12px;

  color: #fff;
  background: @themeColor;
}
.header__logo {
  width: 131px;
  height: 30px;
  margin: auto;
}
.header__back {
  width: 16px;
  height: 16px;

  border-color: #fff;
}
.header__search-btn {
  width: 27px;
  height: 27px;

  transform: translate(1px, -1px);

  font-size: 27px;
}

</style>
