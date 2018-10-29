<template>
  <section
    class="player"
    :style="'background-image:'+`linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${singerImg});`"
  >
    <h6 class="player__song_name">{{songName}}</h6>
    <img :src="singerImg" class="player__singer_img">
    <div class="player__lyrics"></div>
    <div class="player__progress"></div>
    <div class="player__buttons"></div>
    <button class="player__download"></button>
  </section>
</template>

<script>
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
export default {
  name: 'PlayerMax',
  props: ['songName', 'singerName', 'singerImg'],
  components: {
    PlayButton,
    NextButton,
    PrevButton
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
.player {
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.player__song_name {
  height: 54px;
  line-height: 54px;
  font-size: 18px;
  color: @white;
}
.player__singer_img {
  margin-top: 26px;
  height: 193px;
  width: 193px;
  flex: 0 0 auto;
}
.player__lyrics {
  margin-top: 16px;
  height: 68px;
}
.player__progress {
  height: 48px;
  padding: 16px 13px;
  width: 100%;
  box-sizing: border-box;
}
.player__buttons {
  height: 58px;
}
.player__download {
  margin-top: 19px auto 0;
  height: 45px;
  width: 211px;
}
</style>
