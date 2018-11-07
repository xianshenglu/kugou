<template>
  <section class="player">
    <router-link
      :to="{name:'PlayerMax', params: { fromPlayerMed: 1},query:{musicHash:song.hash }}"
      class="player__link"
    >
      <img
        :src="singerImg"
        alt=""
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

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
export default {
  name: 'PlayerMed',
  components: {
    PlayButton,
    NextButton,
    PrevButton
  },
  computed: {
    ...mapState('player', ['song', 'isPlayerMedSmall']),
    ...mapGetters('player', ['songName', 'singerName', 'singerImg'])
  },
  methods: {
    ...mapMutations('player', ['togglePlayers'])
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant';
.player,
.player__link {
  display: flex;
  align-items: center;
}
.player {
  background: @black90p;
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

  font-size: 12px;
}

.player__song_name {
  color: @white;

  font-size: 15px;
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
