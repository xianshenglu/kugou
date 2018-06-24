<template>
<main class="main">
  <PubNav :navs="navs"></PubNav>
  <router-view :newSongs="newSongs" :rankList="rankList" :songList="songList" :singerCategories="singerCategories" class="main__cont" @getRankInfo="getRankInfo"></router-view>
</main>
</template>

<script>
import PubNav from './PubNav'
export default {
  name: 'Main',
  props: ['navs', "newSongs", "rankList", "songList", "singerCategories"],
  components: {
    PubNav
  },
  methods: {
    getRankInfo(event) {
      this.$emit('getRankInfo', event)
    }
  }
}
</script>

<style lang="less" scoped>
.main__cont {
  overflow-y: auto;

  box-sizing: border-box;
  height: calc(100vh - 116px);
}

</style>
