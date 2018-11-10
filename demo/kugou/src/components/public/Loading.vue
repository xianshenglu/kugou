<template>
  <div class="loading" v-show="isShow">
    <svg class="icon loading__svg" aria-hidden="true">
      <use xlink:href="#icon-loading"></use>
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'LoadingIcon',
  computed: {
    ...mapState('loading', ['isShow'])
  }
}
</script>

<style lang="less" scoped>
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15vw;
  position: fixed;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
}
.loading__svg {
  animation: rotate 1s linear infinite reverse;
}
</style>
