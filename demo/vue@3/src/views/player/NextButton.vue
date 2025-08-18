<template>
  <button class="next_button" @click="next">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-next"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

const next = () => {
  store.commit('player/next');
};
</script>

<style scoped>
</style>
