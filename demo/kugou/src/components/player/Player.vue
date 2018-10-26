<template>
  <section :class="isPlayerMin?'player_box player_box--min':'player_box player_box--max'">
    <audio :src="song.url" class="hidden" ref="audioEl" @canplay="play"></audio>
    <PlayerMin v-if="isPlayerMin" class="player_box__player" :song-name="songName" :singer-name="singerName" :singer-img="singerImg" :is-playing="isPlaying"></PlayerMin>
    <PlayerMax v-else class="player_box__player"></PlayerMax>
  </section>
</template>

<script>
import PlayerMin from './PlayerMin'
import PlayerMax from './PlayerMax'
import { mapState } from 'vuex'
import utilsMixin from '../../assets/js/utilsMixin.js'
export default {
  name: 'Player',
  mixins: [utilsMixin],
  components: {
    PlayerMin,
    PlayerMax
  },
  data() {
    return {
      isPlayerMin: true
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
      return this.replaceImgUrlSize(this.song.imgUrl)
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
      this.isPlayerMin = window.innerHeight > this.vMax * 0.8
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
.player_box--min {
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