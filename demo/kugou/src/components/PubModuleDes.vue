<template>
  <div
    :class="showMore?'module_info__intro module_info__intro--more main_box_shadow':'module_info__intro main_box_shadow'"
  >
    <p class="module_info__text">{{description}}</p>
    <button class="module_info__button" v-show="showMore" @click="showMore=!showMore">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-circle-arrow-up"></use>
      </svg>
    </button>
    <button class="module_info__button" v-show="!showMore" @click="showMore=!showMore">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-circle-arrow-down"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PubModuleDes',
  props: {
    description: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      showMore: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
@import (reference) '../styles/constant';
.module_info__intro {
  display: flex;
  overflow: hidden;
  align-items: flex-start;

  box-sizing: border-box;
  height: 41px;
  padding: 5px 0 5px 19px;

  line-height: 1.8;
}

.module_info__intro--more {
  height: auto;
}
.module_info__text {
  margin-right: auto;
}
.module_info__button {
  font-size: 25px;
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  margin: 3.5px 10px 0 8px;
  box-sizing: border-box;
}
</style>
