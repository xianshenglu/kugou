<template>
  <section class="player">
    <img :src="singerImg" alt="" class="player__singer_img">
    <div class="player__song_info">
      <div class="player__song_name">{{songName}}</div>
      <div class="player__singer_name">{{singerName}}</div>
    </div>
    <div class="player__buttons">
      <button class="prev"></button>
      <PlayButton class="player__status"></PlayButton>
      <button class="next"></button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PlayButton from './PlayButton'
export default {
  name: 'PlayerMin',
  props: ['songName', 'singerName', 'singerImg'],
  components: {
    PlayButton
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
  font-size: 15px;
  color: @white;
}
.player__status {
  width: 32px;
  height: 32px;
  font-size: 32px;
}
</style>