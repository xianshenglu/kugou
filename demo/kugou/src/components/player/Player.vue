<template>
  <section :class="curPlayerId===0?'player_box player_box--med':'player_box player_box--max'">
    <PlayerMed v-if="isPlayerShow" v-show="curPlayerId===0" class="player_box__player"/>
    <PlayerMax v-if="isPlayerShow" v-show="curPlayerId===1" class="player_box__player"/>
  </section>
</template>

<script>
import PlayerMed from './PlayerMed'
import PlayerMax from './PlayerMax'
import { mapState } from 'vuex'
import mixin from '../../mixins/index.js'

export default {
  name: 'Player',
  mixins: [mixin],
  components: {
    PlayerMed,
    PlayerMax
  },
  computed: {
    ...mapState('player', {
      isPlaying: 'isPlaying',
      song: 'song',
      lyrics: 'lyrics',
      music: 'music',
      audioEl: 'audioEl',
      isPlayerShow: 'isShow',
      curPlayerId: 'curPlayerId'
    }),
    ...mapState('device', ['vMax'])
  },
  beforeCreate() {
    window.onresize = () => {
      this.isPlayerMed = window.innerHeight > this.vMax * 0.8
    }
  },
  destroyed() {
    window.onresize = null
  }
}
</script>

<style scoped lang="less">
.player_box {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
}
.player_box--med {
  height: 75px;
}
.player_box--max {
  height: 100%;
}
.player_box__player {
  position: absolute;
  z-index: 1;
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
