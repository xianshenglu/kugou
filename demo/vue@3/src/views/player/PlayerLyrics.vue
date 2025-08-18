<template>
  <div class="player_lyric" @touchstart="isTouching=true" @touchend="isTouching=false">
    <p
      v-for="(item,index) in lyricItems"
      v-bind="getVBindObj('millisecond-'+item.millisecond)"
      :key="item.millisecond"
      :ref="el => (lyricElements[item.millisecond] = el)"
      :class="index===prevLyricIndex+1?'player_lyric_text player_lyric_text--active ':'player_lyric_text'"
    >{{ item.text }}</p>
    <!-- //todo make it width: 100% -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useStore } from 'vuex';
import { getVBindObj } from '@/utils';

const store = useStore();

const prevLyricIndex = ref(0);
const isTouching = ref(false);
const lyricElements = ref({});

const audioEl = computed(() => store.state.player.audioEl);
const lyricItems = computed(() => store.getters['player/lyricItems']);
const lyricMillisecond = computed(() => {
  return lyricItems.value.map(o => o.millisecond);
});

watch(lyricItems, (newLyricItems) => {
  if (newLyricItems.length === 0) {
    return;
  }
  lyricElements.value = {};
}, {
  immediate: true,
  deep: true
});

const timeUpdateCb = (event) => {
  if (isTouching.value) {
    return;
  }
  let curMillisecond = Math.floor(event.target.currentTime * 1000);
  let nextLyricIndex = lyricMillisecond.value.findIndex(
    time => time > curMillisecond * 1.005
  );
  let prevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0;
  
  // Check if ref is available
  if (lyricElements.value[lyricMillisecond.value[prevLyricIndex]]) {
    lyricElements.value[lyricMillisecond.value[prevLyricIndex]].scrollIntoView();
  }
  prevLyricIndex.value = prevLyricIndex;
};

onMounted(() => {
  nextTick(() => {
    audioEl.value.addEventListener('timeupdate', timeUpdateCb);
  });
});

onUnmounted(() => {
  audioEl.value.removeEventListener('timeupdate', timeUpdateCb);
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
