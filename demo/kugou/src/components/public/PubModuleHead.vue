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
@import (reference) '../../styles/constant';
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
  font-size: inherit;
  width: 100%;
  height: @module_title_height;

  transform: translateX(-50%);
  text-align: center;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 5%,
    rgba(107, 107, 107, 0.1) 90%,
    rgba(255, 255, 255, 0)
  );

  line-height: @module_title_height;
}
</style>
