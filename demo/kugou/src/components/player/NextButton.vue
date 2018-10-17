<template>
  <button class="next_button" @touchstart="next">
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
      this.$store.commit('next')
    }
  }
}
</script>

<style scoped>

</style>