<template>
  <ul class="music_list">
    <li class="music_list__item main_border_bottom" v-for="(item,index) in musicList" :key="index">
      <slot :data="index" name="index"></slot>
      <div class="music_list__name" @click="wantPlay(item)">{{item.filename}}</div>
      <button class="music_list__download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppMusicList',
  props: ['musicList'],
  methods: {
    wantPlay(music) {
      this.$store.commit('wantPlay', {
        music,
        musicList: this.$props.musicList
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "../../assets/css/constant.less";
.music_list {
  padding-left: 19px;
}

.music_list__item {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 72px;
  padding: 10px 0;
}

.music_list__name {
  width: calc(100% - 48px);

  font-size: 18px;
}

.music_list__download {
  box-sizing: content-box;
  width: 23px;
  height: 100%;
  padding: 0 13px;
}


</style>
