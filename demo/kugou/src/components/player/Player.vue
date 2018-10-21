<template>
  <section class="player-box">
    <audio :src="song.url" class="hidden" ref="audioEl" @canplay="play"></audio>
    <PlayerMin v-if="isPlayerMin" :songName="songName" :singerName="singerName" :singerImg="singerImg" :isPlaying="isPlaying"></PlayerMin>
    <PlayerMax v-else></PlayerMax>
  </section>
</template>

<script>
import PlayerMin from './PlayerMin'
import PlayerMax from './PlayerMax'
import { mapState } from 'vuex'
export default {
  name: 'Player',
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
      return this.song.imgUrl.replace(/\{\s*size\s*\}/, 400)
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
</style>