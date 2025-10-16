<template>
  <button class="play_button" @click="togglePlay">
    <svg class="icon play_button__pause" aria-hidden="true" v-show="!isLoading&&isPlaying">
      <use xlink:href="#icon-pause"></use>
    </svg>
    <svg class="icon play_button__loading" aria-hidden="true" v-show="isLoading" @click.stop>
      <use xlink:href="#icon-loading-white"></use>
    </svg>
    <svg class="icon play_button__play" aria-hidden="true" v-show="!isLoading&&!isPlaying">
      <use xlink:href="#icon-play"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';

const store = useStore<RootState>();

const isPlaying = computed(() => store.state.player.isPlaying);
const isLoading = computed(() => store.state.player.isLoading);

const togglePlay = () => {
  store.commit('player/togglePlay', undefined, { root: true });
};
</script>

<style scoped lang="less">
.play_button__loading {
  animation: rotate 1s linear infinite reverse;
}
</style>
