<template>
  <button class="next_button" @click="next">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-next"></use>
    </svg>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'nextButton',

  methods: {
    next() {
      this.$store.commit('player/next')
    }
  },
});
</script>

<style scoped>
</style>
