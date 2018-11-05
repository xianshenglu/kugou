<template>
  <section class="player">
    <div class="player__mask" :style="playerBgImg"></div>
    <div class="player__cont">
      <h6 class="player__song_name">{{songName}}</h6>
      <img :src="singerImg" class="player__singer_img">
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

<script>
import PlayerLyrics from './PlayerLyrics'
import PlayerProgress from './PlayerProgress'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PlayerMax',
  components: {
    PlayerLyrics,
    PlayerProgress,
    PlayButton,
    NextButton,
    PrevButton
  },
  computed: {
    ...mapState('player', ['audioEl']),
    ...mapGetters('player', ['songName', 'singerName', 'singerImg']),
    playerBgImg() {
      return `background-image:url(${this.singerImg});`
    }
  },
  mounted() {
    this.replaceProperty({
      paths: 'player.isPlayerMedShow',
      data: false
    })
  },
  destroyed() {
    this.replaceProperty({
      paths: 'player.isPlayerMedShow',
      data: true
    })
  },
  methods: {
    ...mapMutations(['replaceProperty'])
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
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
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
  z-index: -1;
}
.player__cont {
  display: flex;
  flex-flow: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
}
// layout with 1rem which is actual vh set by js.
// Using vh would be wrong.
.player__song_name {
  height: .calc_vh(54) [ @result];
  line-height: .calc_vh(54) [ @result];
  font-size: 18px;
  width: calc(100% - .calc_vh(120) [ @result]);
  box-sizing: border-box;
  margin: 0 .calc_vh(120) [ @result];
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  color: @white;
  text-align: center;
}
.player__singer_img {
  margin-top: .calc_vh(26) [ @result];
  height: .calc_vh(193) [ @result];
  width: .calc_vh(193) [ @result];
  flex: 0 0 auto;
}
.player__lyrics {
  margin-top: .calc_vh(16) [ @result];
  height: .calc_vh(68) [ @result];
  line-height: .calc_vh(34) [ @result];
}
.player__progress {
  height: .calc_vh(48) [ @result];
  width: 100%;
  box-sizing: border-box;
}
.player__buttons {
  height: .calc_vh(58) [ @result];
  display: flex;
  align-items: center;
  justify-content: center;
}
.player__btn_prev,
.play__btn_next,
.player__btn_status {
  border-radius: 50%;
  border: .calc_vh(2) [ @result] solid @white;
  margin: 0 .calc_vh(16) [ @result];
}
.player__btn_prev,
.play__btn_next {
  width: .calc_vh(42) [ @result];
  height: .calc_vh(42) [ @result];
  font-size: .calc_vh(16) [ @result];
}
.player__btn_status {
  width: .calc_vh(58) [ @result];
  height: .calc_vh(58) [ @result];
  font-size: .calc_vh(20) [ @result];
}
.player__download {
  margin-top: .calc_vh(19) [ @result] auto 0;
  height: .calc_vh(45) [ @result];
  width: .calc_vh(211) [ @result];
}
</style>
