<template>
  <button class="player__btn_prev" @click="prev">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-previous"></use>
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import type { RootState } from '@/store'

const store = useStore<RootState>()

const prev = () => {
  store.commit('player/prev')
}
</script>

<style scoped>
</style>
