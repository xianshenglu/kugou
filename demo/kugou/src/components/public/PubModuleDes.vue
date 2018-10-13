<template>
  <div :class="showMore?'module_info__intro main_box_shadow show_more':'module_info__intro main_box_shadow'">
    <p class="module_info__text">{{description}}</p>
    <button :class="showMore?'more_btn more_btn--up':'more_btn'" @click="showMore=!showMore"></button>
  </div>
</template>

<script>
export default {
  name: 'PubModuleDes',
  props: ['description'],
  data() {
    return {
      showMore: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.module_info__intro {
  display: flex;
  overflow: hidden;
  align-items: flex-start;

  box-sizing: border-box;
  height: 41px;
  padding: 5px 0 5px 19px;

  font-size: 18px;
  line-height: 1.8;
}

.module_info__intro.show_more {
  height: auto;
}

.more_btn {
  flex: 0 0 auto;

  width: 24px;
  height: 24px;
  margin: auto 12px;

  border-width: 2px;
  border-color:#bbb;
}

.more_btn::before {
  width: 8px;
  height: 8px;

  border-width: inherit;
}


</style>
