<template>
  <h4 class="module_title main_box_shadow">{{title}}</h4>
</template>

<script>
export default {
  name: 'PubModuleTitle',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.module_title {
  width: 100%;
  height: 54px;
  position: relative;
  z-index: 1;
  text-align: center;

  background-color: @white;

  line-height: 54px;
}
</style>
