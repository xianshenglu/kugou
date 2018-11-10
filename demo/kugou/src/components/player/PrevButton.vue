<template>
  <button class="player__btn_prev" @click="prev">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-previous"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'PrevButton',
  methods: {
    prev() {
      this.$store.commit('player/prev')
    }
  }
}
</script>

<style scoped>
</style>
