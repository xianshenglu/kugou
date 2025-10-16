<template>
  <div class="player_progress" @touchstart="setCurTime">
    <div class="player_progress__song_cur_time">{{secondToMin(currentTime)}}</div>
    <div class="player_progress__progress_bar" ref="progressBar" :style="progressBarStyle">
      <div class="player_progress__progress_bar_pointer" :style="`left:${currentProgress}%;`"></div>
    </div>
    <div class="player_progress__song_duration">{{secondToMin(audioEl.duration)}}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, nextTick, useTemplateRef } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'
import { secondToMin } from '@/utils'

const store = useStore<RootState>()
const progressBar = useTemplateRef<HTMLDivElement | null>('progressBar')

const audioEl = computed(() => store.state.player.audioEl!)

const currentTime = ref(0)
const loadProgress = ref(0)
const isTouching = ref(false)
const touchStartX = ref(0)
const progressBarRect = ref<DOMRect | null>(null)

const currentProgress = computed(() => {
  return Math.floor((100 * currentTime.value) / audioEl.value.duration)
})

const progressBarStyle = computed(() => {
  return `background-image:linear-gradient(to right, #2ca2f9 ${
    currentProgress.value
  }%, transparent ${
    currentProgress.value
  }%),linear-gradient(to right, #6c6b70 ${
    loadProgress.value
  }%, transparent ${loadProgress.value}%)`
})

const progressCb = () => {
  // todo songs wouldn't download all now or user jumped. They all make the progress bar wouldn't continuous. So, the style may need change.
  if (audioEl.value.readyState < 2) {
    return
  }
  const bufferedLength = audioEl.value.buffered.length
  loadProgress.value = Math.floor(
    (100 * audioEl.value.buffered.end(bufferedLength - 1)) /
      audioEl.value.duration
  )
}

const timeUpdateCb = (event: Event) => {
  if (isTouching.value) {
    return
  }
  currentTime.value = (event.target as HTMLMediaElement).currentTime
}

const setCurTime = (event: TouchEvent) => {
  isTouching.value = true
  if (!progressBarRect.value) {
    progressBarRect.value = progressBar.value!.getBoundingClientRect()
  }
  const clientX = event.touches[0]!.clientX
  currentTime.value = calcCurTime(clientX, progressBarRect.value.left, 0)
  touchStartX.value = clientX
  window.addEventListener('touchmove', setCurTimeOnMove)
  window.addEventListener('touchend', touchEndCb)
}

const setCurTimeOnMove = (event: TouchEvent) => {
  const clientX = event.touches[0]!.clientX
  currentTime.value = calcCurTime(clientX, touchStartX.value, 1)
  touchStartX.value = clientX
}

const touchEndCb = () => {
  isTouching.value = false
  audioEl.value.currentTime = currentTime.value
  window.removeEventListener('touchmove', setCurTimeOnMove)
  window.removeEventListener('touchend', touchEndCb)
}

const calcCurTime = (end: number, start: number, type: 0|1) => {
  const offsetX = end - start
  const percent = offsetX / progressBarRect.value!.width
  let curTime: number;
  switch (type) {
    case 0:
      curTime = audioEl.value.duration * percent
      break
    case 1:
      curTime = currentTime.value + audioEl.value.duration * percent
      break
  }
  if (curTime < 0) {
    curTime = 0
  } else if (curTime > audioEl.value.duration) {
    curTime = audioEl.value.duration
  }
  return curTime
}

onMounted(() => {
  nextTick(() => {
    audioEl.value.addEventListener('progress', progressCb)
    audioEl.value.addEventListener('timeupdate', timeUpdateCb)
  })
})

onUnmounted(() => {
  audioEl.value.removeEventListener('progress', progressCb)
  audioEl.value.removeEventListener('timeupdate', timeUpdateCb)
})
</script>
<style lang="less" scoped>
@import (reference) '~@/styles/constant';
.player_progress {
  font-size: @font_size_mini;
  padding: 16px @padding_width;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: @white-2;
}
.player_progress__song_cur_time,
.player_progress__song_duration {
  flex: 0 0 auto;
}
.player_progress__progress_bar {
  flex: 1 0 auto;
  height: 4px;
  margin: 0 10px;
  background-color: @black-2;
  position: relative;
}
.player_progress__progress_bar_pointer {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  background: @theme;
  height: 13px;
  width: 13px;
  border-radius: 50%;
}
</style>
