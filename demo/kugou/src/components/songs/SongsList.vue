<template>
<PubList :pub_list_data="songs_list" class="songs_list">
  <div class="pub_list__text songs_list__text" slot-scope="props">
    <div class="songs_list__title">{{props.data.specialname}}</div>
    <div class="songs_list__info">
      <svg class="icon songs_list__icon" aria-hidden="true">
        <use xlink:href="#icon-music"></use>
      </svg>
      <span class="songs_list__star">{{props.data.playcount}}</span>
    </div>
  </div>
</PubList>
</template>

<script>
import PubList from '../PubList'
export default {
  name: 'SongsList',
  props: ['songs_list'],
  components: {
    PubList
  }
}
</script>

<style lang="less" scoped>
.songs_list__text {
  height: 97px;
}

.songs_list__title {
  padding-top: 26px;

  font-size: 18px;
  line-height: 27px;
}
.songs_list__icon {
  margin-right: 6px;

  vertical-align: baseline;

  font-size: 13px;
}
.songs_list__star {
  color: #9b9b9b;

  font-size: 15px;
}

</style>
