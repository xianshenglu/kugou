<template>
  <section :class="isPlayerMed?'player_box player_box--med':'player_box player_box--max'">
    <audio :src="song.url" class="hidden" ref="audioEl" @canplay="play"></audio>
    <PlayerMed v-if="isPlayerMed" class="player_box__player" :song-name="songName" :singer-name="singerName" :singer-img="singerImg" :is-playing="isPlaying" />
    <PlayerMax v-else class="player_box__player" />
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
  data() {
    return {
      isPlayerMed: true
    }
  },
  computed: {
    singerName() {
      return this.music.filename.split(/\s+-\s+/)[0]
    },
    singerImg() {
      if (!this.song.imgUrl) {
        return
      }
      return this.$_xsl__replaceImgUrlSize(this.song.imgUrl)
    },
    songName() {
      return this.music.filename.split(/\s+-\s+/)[1]
    },
    ...mapState({
      isPlaying: state => state.isPlaying,
      song: state => state.song,
      music: state => state.music,
      audioEl: state => state.audioEl,
      vMax: state => state.device.vMax
    })
  },
  beforeCreate() {
    window.onresize = () => {
      this.isPlayerMed = window.innerHeight > this.vMax * 0.8
    }
  },
  destroyed() {
    window.onresize = null
  },
  mounted() {
    this.$store.commit('findAudioEl', this.$refs.audioEl)
  },
  methods: {
    play() {
      this.$store.commit('togglePlay', true)
    }
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
  bottom:0;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}






</style>