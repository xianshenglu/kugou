<template>
  <div id="app" class="app" ref="app">
    <AppLoading/>
    <AppHeader class="app__header"/>
    <router-view class="app__cont" :navs="navs"></router-view>
    <audio :src="song.play_url" class="hidden" ref="audioEl" loop @canplay="togglePlay(true)"></audio>
    <PlayerMed
      v-show="isPlayerMedShow&&$route.path!=='/player/max'"
      :class="isPlayerMedSmall?'app__player app__player--min':'app__player app__player--med'"
    />
  </div>
</template>

<script>
import AppHeader from '@/components/public/AppHeader'
import AppNav from './components/public/AppNav'
import AppLoading from './components/public/AppLoading'
import PlayerMed from './components/player/PlayerMed'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    AppLoading,
    AppHeader,
    AppNav,
    PlayerMed
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
  mounted() {
    document.documentElement.style.fontSize = this.vMax + 'px'
    this.findAudioEl(this.$refs.audioEl)
  },
  computed: {
    ...mapState('player', {
      isPlayerMedShow: 'isPlayerMedShow',
      isPlayerMedSmall: 'isPlayerMedSmall',
      music: 'music',
      song: 'song'
    }),
    ...mapState('device', {
      vMax: 'vMax'
    })
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
@import (reference) './assets/css/constant.less';
.app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Microsoft Yahei', 'Avenir', Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: @font_size_main;
  overflow: hidden;
}
.app__header {
  height: @header_height;
  width: 100%;
  box-sizing: border-box;
}

.app__cont {
  overflow-y: auto;
  width: 100%;
  height: calc(100% - @header_height);
}
.app__player {
  box-sizing: border-box;
  height: 75px;
  max-height: calc(100% - @header_height);
  position: absolute;
  bottom: 0;
  left: 0;
}
.app__player--med {
  width: 100%;
}
.app__player--min {
  width: 68px;
  height: 68px;
  opacity: 0.5;
  overflow: hidden;
  background: transparent;
  transition: all 0.5s ease;
  animation: rotate 8s linear infinite 0.6s reverse;
}
</style>
