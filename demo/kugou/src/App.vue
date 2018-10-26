<template>
  <div id="app" class="app" ref="app">
    <PubHeader class="app__header"></PubHeader>
    <router-view class="app__cont" :navs="navs"></router-view>
    <Player v-if="music" class="app__player"></Player>
  </div>
</template>

<script>
import PubHeader from '@/components/public/PubHeader'
import PubNav from './components/public/PubNav'
import Player from './components/player/Player'

export default {
  name: 'App',
  components: {
    PubHeader,
    PubNav,
    Player
  },
  mounted() {
    this.$refs.app.style.height = this.vMax + 'px'
  },
  computed: {
    music() {
      return this.$store.state.music
    },
    vMax() {
      return this.$store.state.device.vMax
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
  width: 100%;
  height: 100%;
  position: relative;
  font-family: "Microsoft Yahei", "Avenir", Helvetica, Arial, sans-serif;
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

</style>
