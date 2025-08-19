<template>
  <section class="player" v-if="music">
    <div class="player__mask" :style="playerBgImg"></div>
    <div class="player__cont">
      <h6 class="player__song_name">{{songName}}</h6>
      <img
        :src="singerImg"
        :class="isPlaying?'player__singer_img player__singer_img--active':'player__singer_img'"
      >
      <PlayerLyrics class="player__lyrics"/>
      <PlayerProgress class="player__progress"/>
      <div class="player__buttons">
        <PrevButton class="player__btn_prev"/>
        <PlayButton class="player__btn_status"/>
        <NextButton class="play__btn_next"/>
      </div>
      <button class="player__download"></button>
    </div>
  </section>
</template>
<script lang="ts">
// @ts-ignore, vue-tsc bug https://github.com/vuejs/language-tools/issues/5604
import store from '../../store/index'
export default {
  beforeRouteEnter(to, _from, next) {
    //play music if musicHash exists which means this page was loaded directly
    let musicHash = to.query.musicHash
    if (!musicHash) {
      return
    }
    // todo move it from query which may require move the logic out of beforeRouteEnter.
    const { fromPlayerMed, ...otherQuery} = to.query
    if (fromPlayerMed) {
      return next({...to, query: otherQuery})
    }
    //? just commit player/wantPlay is enough?
    return fetchSongLyric({ params: { hash: musicHash } }).then(res => {
      let musicData = res.data.data
      musicData.filename = musicData.audio_name
      store.commit('player/wantPlay', {
        music: musicData,
        musicList: [musicData]
      })
      store.commit('player/wantPlay', { music: musicData, musicList: [musicData] })
      next()
    })
  },
}
</script>
<script lang="ts" setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import PlayerLyrics from './PlayerLyrics.vue'
import PlayerProgress from './PlayerProgress.vue'
import PlayButton from './PlayButton.vue'
import NextButton from './NextButton.vue'
import PrevButton from './PrevButton.vue'
import { fetchSongLyric } from '@/requests/player'

const store = useStore()
const router = useRouter()

const music = computed(() => store.state.player.music)
const isPlaying = computed(() => store.state.player.isPlaying)
const singerImg = computed(() => store.getters['player/singerImg'])
const songName = computed(() => store.getters['player/songName'])

const playerBgImg = computed(() => {
  return `background-image:url(${singerImg.value}),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204));`
})

watch(()=>music.value?.hash, (newHash) => {
    router.replace({ query: { musicHash: newHash } })
})

onMounted(() => {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedShow',
    data: false
  })
})

onUnmounted(() => {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedShow',
    data: true
  })
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedSmall',
    data: false
  })
})

</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.player {
  position: relative;
}
.player__mask {
  position: absolute;
  left: 0;
  top: 0;
  filter: blur(15px);
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat, no-repeat;
  background-size: auto 100%, auto 100%;
  background-position: center, center;
  z-index: -1;
}
.player__cont {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
// layout with 1rem which is actual vh set by js.
// Using vh would be wrong.
.player__song_name {
  height: .calc_on_app_cont(54) [ @result];
  line-height: .calc_on_app_cont(54) [ @result];
  width: calc(100% - .calc_on_app_cont(120) [ @result]);
  box-sizing: border-box;
  margin: 0 .calc_on_app_cont(120) [ @result];
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  color: @white;
  text-align: center;
  font-size: inherit;
}
.player__singer_img {
  margin-top: .calc_on_app_cont(26) [ @result];
  height: .calc_on_app_cont(193) [ @result];
  width: .calc_on_app_cont(193) [ @result];
  flex: 0 0 auto;
  border-radius: 50%;
  animation: rotate 20s linear infinite reverse;
  animation-play-state: paused;
}
.player__singer_img--active {
  animation-play-state: running;
}
.player__lyrics {
  margin-top: .calc_on_app_cont(16) [ @result];
  height: .calc_on_app_cont(68) [ @result];
  line-height: .calc_on_app_cont(34) [ @result];
  width: 102%;
  box-sizing: border-box;
  padding: 0 60px;
}
.player__progress {
  height: .calc_on_app_cont(48) [ @result];
  width: 100%;
  box-sizing: border-box;
}
.player__buttons {
  height: .calc_on_app_cont(58) [ @result];
  display: flex;
  align-items: center;
  justify-content: center;
}
.player__btn_prev,
.play__btn_next,
.player__btn_status {
  border-radius: 50%;
  border: .calc_on_app_cont(2) [ @result] solid @white;
  margin: 0 .calc_on_app_cont(16) [ @result];
}
.player__btn_prev,
.play__btn_next {
  width: .calc_on_app_cont(42) [ @result];
  height: .calc_on_app_cont(42) [ @result];
  font-size: .calc_on_app_cont(16) [ @result];
}
.player__btn_prev :deep(.icon) {
  transform: translate(0, 0px);
}
.play__btn_next :deep(.icon) {
  transform: translate(1px, 0px);
}
.player__btn_status {
  width: .calc_on_app_cont(58) [ @result];
  height: .calc_on_app_cont(58) [ @result];
  font-size: .calc_on_app_cont(20) [ @result];
}
.player__download {
  margin-top: .calc_on_app_cont(19) [ @result] auto 0;
  height: .calc_on_app_cont(45) [ @result];
  width: .calc_on_app_cont(211) [ @result];
}
</style>
