<template>
  <section>
    <Slider></Slider>
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
  data(){
    return {
      newSongs:[]
    }
  },
  created(){
    this.getNewSong()
  },
  methods:{
    getNewSong() {
      axios.get(api.newSong).then(({ data }) => {
        data.data.forEach(({ filename }) => {
          this.newSongs.push({
            filename
          })
        })
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
