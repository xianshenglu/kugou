<template>
  <button class="is_playing" @click="togglePlay">
    <svg class="icon" aria-hidden="true" v-show="isPlaying">
      <use xlink:href="#icon-pause"></use>
    </svg>
    <svg class="icon" aria-hidden="true" v-show="!isPlaying">
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
      if (this.$store.state.isPlaying) {
        this.$store.commit('pause')
      } else {
        this.$store.commit('play')
      }
    }
  }
}
</script>

<style scoped>

</style>