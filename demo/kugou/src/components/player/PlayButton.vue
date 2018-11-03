<template>
  <button class="play" @touchstart="togglePlay">
    <svg class="icon play__pause" aria-hidden="true" v-show="isPlaying">
      <use xlink:href="#icon-pause"></use>
    </svg>
    <svg class="icon play__play" aria-hidden="true" v-show="!isPlaying">
      <use xlink:href="#icon-play"></use>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'PlayButton',
  computed: {
    isPlaying() {
      return this.$store.state.player.isPlaying
    }
  },
  methods: {
    togglePlay() {
      this.$store.commit('player/togglePlay', undefined, { root: true })
    }
  }
}
</script>

<style scoped>
</style>
