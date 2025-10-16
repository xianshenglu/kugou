<template>
  <div class="player_lyric" @touchstart="isTouching=true" @touchend="isTouching=false">
    <p
      v-for="(item,index) in lyricItems"
      v-bind="getVBindObj('millisecond-'+item.millisecond)"
      :key="item.millisecond"
      :ref="el => (lyricElements[item.millisecond] = el as HTMLElement)"
      :class="index===prevLyricIndex+1?'player_lyric_text player_lyric_text--active ':'player_lyric_text'"
    >{{ item.text }}</p>
    <!-- //todo make it width: 100% -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { useStore } from 'vuex';
import type { RootState } from '@/store';
import { getVBindObj } from '@/utils';
interface LyricItem {
  millisecond: number;
  text: string;
}
const store = useStore<RootState>();

const prevLyricIndex = ref(0);
const isTouching = ref(false);
const lyricElements = ref<Record<string, HTMLElement | null>>({});

const audioEl = computed(() => store.state.player.audioEl!);
const lyricItems = computed<LyricItem[]>(() => store.getters['player/lyricItems']);
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

const timeUpdateCb = (event: Event) => {
  if (isTouching.value) {
    return;
  }
  let curMillisecond = Math.floor((event.target as HTMLMediaElement).currentTime * 1000);
  let nextLyricIndex = lyricMillisecond.value.findIndex(
    time => time > curMillisecond * 1.005
  );
  let newPrevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0;
  
  // Check if ref is available
  const lyricTime = lyricMillisecond.value[newPrevLyricIndex] as any as string;
  if (lyricElements.value[lyricTime]) {
    lyricElements.value[lyricTime].scrollIntoView();
  }
  prevLyricIndex.value = newPrevLyricIndex;
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
