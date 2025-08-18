<template>
  <ul class="music_list">
    <li class="music_list__item main_border_bottom" v-for="(item,index) in musicList" :key="index">
      <div class="music_list__info" @click="wantPlay(item)">
        <slot :data="index" name="index" class="music_list__index" @click="wantPlay(item)"></slot>
        <div class="music_list__name">{{item.filename}}</div>
      </div>
      <button class="music_list__download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

// 定义音乐项接口
interface MusicItem {
  filename: string;
  [key: string]: any;
}

// 定义props类型
interface Props {
  musicList: MusicItem[];
}

const props = withDefaults(defineProps<Props>(), {
  musicList: () => [] as MusicItem[]
});

const store = useStore();

const wantPlay = (music: MusicItem) => {
  store.commit('player/wantPlay', {
    music,
    musicList: props.musicList
  });
};
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';
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

.music_list__info {
  display: flex;
  width: 100%;
  align-items: center;
}
.music_list__index {
  width: 48px;
  flex: 0 0 auto;
}
.music_list__name {
  width: calc(100% - 48px);
  flex: 1 0 auto;
}

.music_list__download {
  box-sizing: content-box;
  width: 23px;
  height: 100%;
  padding: 0 @padding_width;
}
</style>
