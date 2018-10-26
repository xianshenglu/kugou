<template>
  <section class="new_song">
    <Slider :data="sliderData" class="new_song__slider"></Slider>
    <PubMusicList :music-list="newSongs" class="new_song__music_list"></PubMusicList>
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
.new_song__slider {
  width: 100%;
  height: 154px;
  box-sizing: border-box;
}
</style>
