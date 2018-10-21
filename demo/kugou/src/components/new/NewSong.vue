<template>
  <section>
    <Slider :data="sliderData" v-if="sliderData.length"></Slider>
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
      sliderData: []
    }
  },
  created() {
    this.getNewSong()
  },
  methods: {
    getNewSong() {
      axios.get(api.newSong).then(({ data }) => {
        this.newSongs = data.data
        let banners = data.banner
        banners.push(banners.slice(0, 1)[0])
        this.sliderData = banners
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
