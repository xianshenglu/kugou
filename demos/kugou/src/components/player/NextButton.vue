<template>
  <button class="next_button" @click="next">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-next"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'nextButton',
  methods: {
    next() {
      this.$store.commit('player/next')
    }
  }
}
</script>

<style scoped>
</style>
