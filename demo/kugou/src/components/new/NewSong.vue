<template>
  <section class="new_song">
    <Slider :data="sliderData" class="new_song__slider" />
    <AppMusicList :music-list="newSongs" class="new_song__music_list" />
  </section>
</template>

<script>
import AppMusicList from '../public/AppMusicList'
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
    AppMusicList,
    Slider
  }
}
</script>

<style lang="less" scoped>
.new_song__slider {
  box-sizing: border-box;
  width: 100%;
  height: 154px;
}


</style>
