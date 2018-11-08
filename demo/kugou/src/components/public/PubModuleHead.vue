<template>
  <div>
    <div class="module__head" :style="'background-image:url('+moduleHeadInfo.imgUrl+')'">
      <h6 class="module__title">{{moduleHeadInfo.name}}</h6>
      <slot name="moduleUpdateTime"></slot>
    </div>
    <slot name="moduleDes"></slot>
  </div>
</template>

<script>
export default {
  name: 'PubModuleHead',
  props: {
    moduleHeadInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.module__head {
  display: flex;

  height: 225px;

  color: @white;
  background-position: center center;
  background-size: cover;
}

.module__title {
  position: fixed;
  top: @header_height;
  left: 50%;

  width: 100%;
  height: 54px;

  transform: translateX(-50%);
  text-align: center;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 5%,
    rgba(107, 107, 107, 0.1) 90%,
    rgba(255, 255, 255, 0)
  );

  font-size: 18px;
  line-height: 54px;
}
</style>
