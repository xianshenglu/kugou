<template>
  <section>
    <Slider :data="slider"></Slider>
    <PubMusicList :musicList="newSongs"></PubMusicList>
  </section>
</template>

<script>
import PubMusicList from '../public/PubMusicList'
import Slider from './Slider.vue'
import axios from 'axios'
import api from '../../assets/js/api.js'

export default {
  name: 'NewSong',
  data() {
    return {
      newSongs: [],
      slider: []
    }
  },
  created() {
    this.getNewSong()
  },
  methods: {
    getNewSong() {
      axios.get(api.newSong).then(({ data }) => {
        this.newSongs = data.data
        this.slider = data.banner
      })
    }
  },
  components: {
    PubMusicList,
    Slider
  }
}
</script>

<style lang="less" scoped>

</style>
