<template>
  <div id="app" class="app">
    <PubHeader></PubHeader>
    <router-view class="app__cont" :navs="navs"></router-view>
    <Player v-if="music"></Player>
  </div>
</template>

<script>
import PubHeader from '@/components/public/PubHeader'
import PubNav from './components/public/PubNav'
import Player from './components/player/Player'
import 'xsl-js-utils/dist/main.js'

export default {
  name: 'App',
  components: {
    PubHeader,
    PubNav,
    Player
  },
  created() {},
  computed: {
    music() {
      return this.$store.state.music
    }
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
  }
}
</script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  position: relative;
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app__cont {
  overflow-y: auto;

  height: calc(100vh - 58px);
}

</style>
