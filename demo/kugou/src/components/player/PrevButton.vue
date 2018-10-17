<template>
  <button class="player__btn_prev" @touchstart="prev">
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
      this.$store.commit('prev')
    }
  }
}
</script>

<style scoped>

</style>