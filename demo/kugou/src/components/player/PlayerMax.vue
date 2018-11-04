<template>
  <section class="player" :style="playerBgImg">
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
  </section>
</template>

<script>
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import PlayerLyrics from './PlayerLyrics'
import PlayerProgress from './PlayerProgress'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PlayerMax',
  components: {
    PlayButton,
    NextButton,
    PrevButton,
    PlayerLyrics,
    PlayerProgress
  },
  computed: {
    ...mapState('player', ['audioEl']),
    ...mapGetters('player', ['songName', 'singerName', 'singerImg']),
    playerBgImg() {
      return `background-image:linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${
        this.singerImg
      });`
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
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.player__song_name {
  height: 54px;
  line-height: 54px;
  font-size: 18px;
  width: calc(100% - 120px);
  box-sizing: border-box;
  margin: 0 20px;
  overflow: scroll;
  white-space: nowrap;
  color: @white;
  text-align: center;
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
  width: 100%;
  box-sizing: border-box;
}
.player__buttons {
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.player__btn_prev,
.play__btn_next,
.player__btn_status {
  border-radius: 50%;
  border: 2px solid @white;
  margin: 0 16px;
}
.player__btn_prev,
.play__btn_next {
  width: 42px;
  height: 42px;
  font-size: 16px;
}
.player__btn_status {
  width: 58px;
  height: 58px;
  font-size: 20px;
}
.player__download {
  margin-top: 19px auto 0;
  height: 45px;
  width: 211px;
}
</style>
