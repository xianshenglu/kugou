<template>
  <section
    class="player"
    :style="'background-image:'+`linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${singerImg});`"
  >
    <h6 class="player__song_name">{{songName}}</h6>
    <img :src="singerImg" class="player__singer_img">
    <div class="player__lyrics">
      <p
        v-for="(item,index) in lyricItems"
        :key="item.millisecond"
        :ref="item.millisecond"
        v-bind="vBindAttr('millisecond-'+item.millisecond)"
        :class="index===prevLyricIndex+1?'player__lyrics_text player__lyrics_text--active ':'player__lyrics_text'"
      >{{ item.text }}</p>
    </div>
    <div class="player__progress">
      <PlayerProgress/>
    </div>
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
import PlayerProgress from './PlayerProgress'
import { mapState, mapGetters } from 'vuex'
import mixin from '../../mixins/index.js'
export default {
  name: 'PlayerMax',
  components: {
    PlayButton,
    NextButton,
    PrevButton,
    PlayerProgress
  },
  mixins: [mixin],
  data() {
    return {
      prevLyricIndex: 0
    }
  },
  computed: {
    ...mapState('player', ['audioEl']),
    ...mapGetters('player', [
      'lyricItems',
      'songName',
      'singerName',
      'singerImg'
    ]),
    lyricMillisecond() {
      return this.lyricItems.map(o => o.millisecond)
    }
  },
  mounted() {
    this.audioEl.addEventListener('timeupdate', this.timeUpdateCb)
  },
  destroyed() {
    this.audioEl.removeEventListener('timeupdate', this.timeUpdateCb)
  },
  methods: {
    timeUpdateCb(event) {
      let curMillisecond = Math.floor(event.target.currentTime * 1000)
      let nextLyricIndex = this.lyricMillisecond.findIndex(
        time => time > curMillisecond * 1.005
      )
      let prevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0
      let isRefAvailable =
        this.$refs && this.$refs[this.lyricMillisecond[prevLyricIndex]]
      if (isRefAvailable) {
        this.$refs[this.lyricMillisecond[prevLyricIndex]][0].scrollIntoView()
      }
      this.prevLyricIndex = prevLyricIndex
    }
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
  color: @white-3;
  overflow: scroll;
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
.player__lyrics {
  text-align: center;
}
.player__lyrics_text {
  line-height: 32px;
}
.player__lyrics_text--active {
  color: @lemon;
}
</style>
