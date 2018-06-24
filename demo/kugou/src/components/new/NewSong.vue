<template>
<section>
  <Slider></Slider>
  <PubMusicList :musicList="newSongs"></PubMusicList>
  <!-- <ul class="new_songs__list">
    <li class="new_songs__item" v-for="(item,index) in new_songs" :key="index">
      <div class="new_songs__name">{{item.filename}}</div>
      <button class="new_songs__download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
      </button>
    </li>
  </ul> -->
</section>
</template>

<script>
import PubMusicList from '../PubMusicList'
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
// .new_songs {
//   padding-top: 6px;
//   font-size: 18px;
// }

// .new_songs__list {
//   padding-left: 19px;
// }

// .new_songs__item {
//   display: flex;
//   align-items: center;
//   box-sizing: border-box;
//   width: 100%;
//   height: 72px;
//   border-bottom: 1px solid #eee;
// }

// .new_songs__name {
//   width: calc(100% - 45px);
// }

// .new_songs__download {
//   box-sizing: content-box;
//   width: 21px;
//   height: 100%;
//   padding: 0 12px;
// }

</style>
