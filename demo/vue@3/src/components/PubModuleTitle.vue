<template>
  <h4 class="module_title main_box_shadow" @click="emit('click',$event)">{{title}}</h4>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

// 定义props类型
interface Props {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: ''
});

// 定义事件类型
const emit = defineEmits<{
  (e: 'click', event: Event): void;
}>();
</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.module_title {
  width: 100%;
  height: @module_title_height;
  position: relative;
  z-index: 1;
  text-align: center;

  background-color: @white;

  line-height: @module_title_height;
}
</style>
