<template>
  <section>
    <Slider></Slider>
    <PubMusicList :musicList="newSongs"></PubMusicList>
  </section>
</template>

<script>
import PubMusicList from '../public/PubMusicList'
import Slider from './Slider.vue'

export default {
  name: 'NewSong',
  props: ['newSongs'],
  components: {
    PubMusicList,
    Slider
  }
}
</script>

<style lang="less" scoped>

</style>
