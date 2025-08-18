<template>
  <section class="player" v-if="music">
    <router-link
      :to="{name:'PlayerMax', meta: { fromPlayerMed: 1},query:{musicHash:music.hash }}"
      class="player__link"
    >
      <img
        :src="singerImg?singerImg:logo__theme"
        alt
        :class="isPlayerMedSmall?'player__singer_img player__singer_img--player_min':'player__singer_img'"
      >
      <div class="player__song_info">
        <div class="player__song_name">{{songName}}</div>
        <div class="player__singer_name">{{singerName}}</div>
      </div>
    </router-link>
    <div class="player__buttons">
      <PrevButton class="player__btn_prev"/>
      <PlayButton class="player__btn_status"/>
      <NextButton class="play__btn_next"/>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'

const store = useStore()

const logo__theme = computed(() => store.state.images.logo__theme)
const music = computed(() => store.state.player.music)
const isPlayerMedSmall = computed(() => store.state.player.isPlayerMedSmall)
const songName = computed(() => store.getters['player/songName'])
const singerName = computed(() => store.getters['player/singerName'])
const singerImg = computed(() => store.getters['player/singerImg'])
</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.player,
.player__link {
  display: flex;
  align-items: center;
}
.player {
  background: @black90p;
}
.player__link {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  /* transparent is for some old android browser */
  -webkit-tap-highlight-color: transparent;
}
.player__singer_img {
  flex: 0 0 auto;

  width: 68px;
  height: 68px;
  margin: 0 10px 0 4px;
  transition: border-radius 0.5s ease;
  border-radius: 5px;
}
.player__singer_img--player_min {
  margin: 0;
  border-radius: 50%;
}
.player__song_info {
  display: flex;
  overflow: hidden;
  flex-flow: column;

  box-sizing: border-box;
  width: 158px;
  height: 42px;
}
.player__singer_name,
.player__song_name {
  white-space: nowrap;
}
.player__singer_name {
  color: @white-to-black;

  font-size: @font_size_small;
}

.player__song_name {
  color: @white;
  font-size: @font_size_med;
  line-height: 1.7;
}
.player__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 150px;
  margin: auto 10px;
}
.player__btn_prev,
.play__btn_next,
.player__btn_status {
  width: 28px;
  height: 28px;
  font-size: 20px;
}
</style>
