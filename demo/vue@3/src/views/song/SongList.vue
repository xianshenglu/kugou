<template>
  <section class="song_list">
    <PubList :pub-list="songList" class="song_list__cont">
      <template v-slot:cont="props">
        <div class="song_list__info">
          <div class="song_list__title">{{ props.data.title }}</div>
          <div class="song_list__star">
            <svg class="icon song_list__icon" aria-hidden="true">
              <use xlink:href="#icon-music"></use>
            </svg>
            <span class="song_list__popularity">{{
              props.data.popularity
            }}</span>
          </div>
        </div>
      </template>
    </PubList>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import PubList from '@/modules/PubList.vue'
import { fetchSongList } from '../../requests/songList'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

// 定义歌单信息接口
interface SongListItem {
  specialid: string;
  imgurl: string;
  specialname: string;
  playcount: number;
  imgUrl: string;
  path: string;
  title: string;
  popularity: number;
  [key: string]: any;
}

const store = useStore()
const { startLoading, stopLoading, setLoadingExcludeNav } = useLoading()

const songList = computed<SongListItem[]>(() => store.state.song.songList)

const getSongList = () => {
  fetchSongList().then(({ data }) => {
    data.plist.list.info.forEach((obj: any) => {
      obj.imgUrl = replaceSizeInUrl(obj.imgurl)
      obj.path = '/song/list/' + obj.specialid
      obj.title = obj.specialname
      obj.popularity = obj.playcount
    })
    store.commit('replaceProperty', {
      paths: 'song.songList',
      data: data.plist.list.info
    })
    stopLoading()
  })
}

if (songList.value.length === 0) {
  setLoadingExcludeNav()
  startLoading()
  getSongList()
}
</script>

<style lang="less" scoped>
@import (reference) '~@/styles/constant';
.song_list__cont {
  overflow: scroll;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
.song_list__info {
  height: 97px;
  margin-right: 10px;
  padding-left: 18px;
}

.song_list__title {
  padding-top: 26px;

  line-height: 27px;
}

.song_list__icon {
  margin-right: 6px;

  vertical-align: baseline;

  font-size: @font_size_small;
}

.song_list__popularity {
  color: @white-to-black;

  font-size: @font_size_med;
}
</style>
