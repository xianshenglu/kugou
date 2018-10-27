<template>
  <section class="player">
    <img :src="singerImg" alt="" class="player__singer_img">
    <div class="player__song_info">
      <div class="player__song_name">{{songName}}</div>
      <div class="player__singer_name">{{singerName}}</div>
    </div>
    <div class="player__buttons">
      <PrevButton class="player__btn_prev" />
      <PlayButton class="player__btn_status" />
      <NextButton class="play__btn_next" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
export default {
  name: 'PlayerMed',
  props: ['songName', 'singerName', 'singerImg'],
  components: {
    PlayButton,
    NextButton,
    PrevButton
  }
}
</script>

<style scoped lang="less">
@import (reference) "../../assets/css/constant";
.player {
  display: flex;
  align-items: center;

  background: @almost-black;
}
.player__singer_img {
  flex: 0 0 auto;

  width: 68px;
  height: 68px;
  margin: 0 10px 0 4px;

  border-radius: 5px;
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
  margin: 10px auto;
}
.player__btn_prev,
.play__btn_next {
  font-size: 42px;
}
.player__btn_status {
  width: 32px;
  height: 32px;

  font-size: 30px;
}



</style>