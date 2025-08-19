<template>
  <AppLoading/>
  <!-- //todo 3. add download for download button when user is admin-->
  <!-- //todo 4. add download, songInfo, comments in PlayerMax -->
  <AppHeader class="app__header"/>
  <router-view class="app__cont"></router-view>
  <audio
    :src="song?song.play_url:''"
    class="hidden"
    ref="audioEl"
    loop
    @canplay="togglePlay(true)"
  ></audio>
  <PlayerMed
    v-show="isPlayerMedShow&&$route.path!=='/player/max'"
    :class="isPlayerMedSmall?'app__player app__player--min':'app__player app__player--med'"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, type Ref } from 'vue'
import { useStore } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import AppLoading from './components/AppLoading.vue'
import PlayerMed from './views/player/PlayerMed.vue'

const audioEl: Ref<HTMLAudioElement | null> = ref(null)
const store = useStore()

const isPlayerMedShow = computed(() => store.state.player.isPlayerMedShow)
const isPlayerMedSmall = computed(() => store.state.player.isPlayerMedSmall)
const song = computed(() => store.state.player.song)
const vh = computed(() => store.state.device.vh)

const findAudioEl = (el: HTMLAudioElement | null) => store.commit('player/findAudioEl', el)
const togglePlay = (status: boolean) => store.commit('player/togglePlay', status)

onMounted(() => {
  document.documentElement.style.setProperty('--vh', vh.value / 100 + 'px')
  findAudioEl(audioEl.value)
})
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';

.app__header {
  height: @header_height;
  width: 100%;
  box-sizing: border-box;
}

.app__cont {
  overflow-y: auto;
  width: 100%;
  height: calc(100% - @header_height);
}
.app__player {
  box-sizing: border-box;
  height: 75px;
  max-height: calc(100% - @header_height);
  position: absolute;
  bottom: 0;
  left: 0;
}
.app__player--med {
  width: 100%;
}
.app__player--min {
  width: 68px;
  height: 68px;
  opacity: 0.5;
  overflow: hidden;
  background: transparent;
  transition: all 0.5s ease;
  animation: rotate 8s linear infinite 0.6s reverse;
}
</style>
