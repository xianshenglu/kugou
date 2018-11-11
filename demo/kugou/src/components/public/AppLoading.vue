<template>
  <div :class="isShow?'loading':'loading loading--fade_out'">
    <svg class="icon loading__svg" aria-hidden="true">
      <use xlink:href="#icon-loading"></use>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppLoading',
  computed: {
    ...mapState('loading', ['isShow'])
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.loading {
  width: 100%;
  height: calc(100% - @header_height);
  margin-top: @header_height;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vw;
  position: fixed;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
}
.loading--fade_out {
  background-color: transparent;
  animation: fade_out 0.5s ease 0.5s forwards;
}
.loading__svg {
  animation: rotate 1s linear infinite reverse;
}
</style>
