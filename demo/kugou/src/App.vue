<template>
  <div id="app" class="app" ref="app">
    <AppHeader class="app__header"/>
    <router-view class="app__cont" :navs="navs"></router-view>
    <audio :src="song.play_url" class="hidden" ref="audioEl" loop @canplay="togglePlay(true)"></audio>
    <Player v-show="isPlayerShow" class="app__player"/>
  </div>
</template>

<script>
import AppHeader from '@/components/public/AppHeader'
import AppNav from './components/public/AppNav'
import Player from './components/player/Player'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppNav,
    Player
  },
  mounted() {
    this.$refs.app.style.height = this.vMax + 'px'
    this.findAudioEl(this.$refs.audioEl)
  },
  computed: {
    ...mapState('player', {
      isPlayerShow: 'isShow',
      music: 'music',
      song: 'song'
    }),
    ...mapState('device', {
      vMax: 'vMax'
    })
  },
  data() {
    return {
      navs: [
        {
          text: '新歌',
          name: 'new',
          active: true,
          link: '/'
        },
        {
          text: '排行',
          name: 'rank',
          active: false,
          link: '/rank/list'
        },
        {
          text: '歌单',
          name: 'song',
          active: false,
          link: '/song/list'
        },
        {
          text: '歌手',
          name: 'singer',
          active: false,
          link: '/singer/category'
        }
      ]
    }
  },
  methods: {
    ...mapMutations('player', {
      findAudioEl: 'findAudioEl',
      togglePlay: 'togglePlay'
    })
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app__header {
  height: 58px;
  width: 100%;
  box-sizing: border-box;
}

.app__cont {
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 58px);
}
.app__player {
  max-height: calc(100% - 58px);
}
</style>
