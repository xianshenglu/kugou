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
import type { RootState } from '@/store'

import PubList from '@/modules/PubList.vue'
import { fetchSongList } from '../../requests/songList'
import { mapPlaylistList } from '@shared/domains/playlist/mapper'
import { useLoading } from '@/composables/useLoading'

const store = useStore<RootState>()
const { startLoading, stopLoading, setLoadingExcludeNav } = useLoading()

const songList = computed(() => store.state.song.songList)

const getSongList = () => {
  fetchSongList().then(({ data }) => {
    const mapped = mapPlaylistList(data)
    store.commit('replaceProperty', {
      paths: 'song.songList',
      data: mapped
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
