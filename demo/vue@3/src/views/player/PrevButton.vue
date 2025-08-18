<template>
  <button class="player__btn_prev" @click="prev">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-previous"></use>
    </svg>
  </button>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

const prev = () => {
  store.commit('player/prev')
}
</script>

<style scoped>
</style>
