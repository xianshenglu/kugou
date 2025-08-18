<template>
  <h4 class="module_title main_box_shadow" @click="emit('click',arguments[0])">{{title}}</h4>
</template>

<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);
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
