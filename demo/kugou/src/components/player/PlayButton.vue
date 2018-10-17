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
      return this.$store.state.isPlaying
    }
  },
  methods: {
    togglePlay() {
      this.$store.commit('togglePlay')
    }
  }
}
</script>

<style scoped>
.play__play {
  transform: translate(1px,-2px);
}
.play__pause{
  font-size: 1.2em;
  transform: translate(-2px,-4px);
}
</style>