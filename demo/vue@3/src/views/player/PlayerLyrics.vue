<template>
  <div class="player_lyric" @touchstart="isTouching=true" @touchend="isTouching=false">
    <p
      v-for="(item,index) in lyricItems"
      :key="item.millisecond"
      :ref="el => (lyricElements[item.millisecond] = el)"
      v-bind="getVBindObj('millisecond-'+item.millisecond)"
      :class="index===prevLyricIndex+1?'player_lyric_text player_lyric_text--active ':'player_lyric_text'"
    >{{ item.text }}</p>
    <!-- //todo make it width: 100% -->
  </div>
</template>

<script>
import { defineComponent, nextTick } from 'vue';

import { mapState, mapGetters } from 'vuex'
import { getVBindObj } from '@/utils'
export default defineComponent({
  name: 'PlayerLyrics',

  data() {
    return {
      getVBindObj,
      prevLyricIndex: 0,
      isTouching: false,
      lyricElements: []
    }
  },

  computed: {
    ...mapState('player', ['audioEl']),
    ...mapGetters('player', ['lyricItems']),
    lyricMillisecond() {
      return this.lyricItems.map(o => o.millisecond)
    }
  },
  watch: {
    lyricItems: {
      handler: function(newLyricItems) {
        if (newLyricItems.length === 0) {
          return
        }
        this.lyricElements = newLyricItems.map(() => null)
      },
      immediate: true,
      deep: true,
    }
  },
  mounted() {
    nextTick(() => {
      this.audioEl.addEventListener('timeupdate', this.timeUpdateCb)
    })
  },

  unmounted() {
    this.audioEl.removeEventListener('timeupdate', this.timeUpdateCb)
  },

  methods: {
    timeUpdateCb(event) {
      if (this.isTouching) {
        return
      }
      let curMillisecond = Math.floor(event.target.currentTime * 1000)
      let nextLyricIndex = this.lyricMillisecond.findIndex(
        time => time > curMillisecond * 1.005
      )
      let prevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0
      let isRefAvailable =
        this.$refs && this.$refs[this.lyricMillisecond[prevLyricIndex]]
      if (isRefAvailable) {
        this.$refs[this.lyricMillisecond[prevLyricIndex]][0].scrollIntoView()
      }
      this.prevLyricIndex = prevLyricIndex
    }
  },
});
</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.player_lyric {
  color: @white-3;
  overflow: scroll;
  font-size: @font_size_med;
}
.player_lyric {
  text-align: center;
}
.player_lyric_text {
  line-height: inherit;
}
.player_lyric_text--active {
  color: @lemon;
}
</style>
