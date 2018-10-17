<template>
  <section class="player">
    <img :src="singerImg" alt="" class="player__singer_img">
    <div class="player__song_info">
      <div class="player__song_name">{{songName}}</div>
      <div class="player__singer_name">{{singerName}}</div>
    </div>
    <div class="player__buttons">
      <PrevButton class="player__btn_prev"></PrevButton>
      <PlayButton class="player__btn_status"></PlayButton>
      <NextButton class="play__btn_next"></NextButton>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
export default {
  name: 'PlayerMin',
  props: ['songName', 'singerName', 'singerImg'],
  components: {
    PlayButton,
    NextButton,
    PrevButton
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant';
.player {
  position: absolute;
  z-index: 1;
  bottom:0;
  display: flex;
  width: 100%;
  height: 75px;
  align-items: center;

  box-sizing: border-box;
  background: @almost-black;
}
.player__singer_img {
  width: 68px;
  height: 68px;
  margin: 0 10px 0 4px;

}
.player__song_info {
  width: 158px;
  height: 42px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  overflow: hidden;
}
.player__singer_name,
.player__song_name  {
 white-space: nowrap;
}
.player__singer_name {
  font-size: 12px;
  color: @white-to-black;
}

.player__song_name {
  line-height: 1.7;
  font-size: 15px;
  color: @white;
}
.player__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 10px auto;
}
.player__btn_prev ,.play__btn_next{
  font-size: 42px;
}
.player__btn_status {
  width: 32px;
  height: 32px;
  font-size: 30px;

}
</style>