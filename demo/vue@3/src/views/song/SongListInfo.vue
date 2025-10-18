<template>
  <section class="song_list_info">
    <PubModuleHead v-if="songListInfo.info.list" :module-head-info="getModuleHeadInfo">
      <template v-slot:moduleDes>
        <PubModuleDes :description="getModuleHeadInfo.intro" />
      </template>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import PubModuleHead from '@/components/PubModuleHead.vue'
import PubModuleDes from '@/components/PubModuleDes.vue'
import AppMusicList from '@/components/AppMusicList.vue'
import { fetchSongListInfo } from '../../requests/songListInfo'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
import type { RootState } from '@/store'
import { mapPlaylistInfo } from '@shared/domains/playlist/mapper'

const store = useStore<RootState>()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const songListInfo = computed(() => store.state.song.songListInfo)

const getModuleHeadInfo = computed(() => {
  const data = songListInfo.value.info.list!
  return {
    imgUrl: replaceSizeInUrl(data.imgurl),
    name: data.specialname,
    intro: data.intro
  }
})

const getMusicList = computed(() => {
  return songListInfo.value.songs.list.info
})

const getSongListInfo = (songListId: string) => {
  fetchSongListInfo({ songListId }).then(({ data }) => {
    store.commit('replaceProperty', {
      paths: 'song.songListInfo',
      data: mapPlaylistInfo(data)
    })
    stopLoading()
  })
}

const songListId = route.path.split('/').pop()
setLoadingExcludeHeader()
startLoading()
getSongListInfo(songListId!)
</script>

<style lang="less" scoped></style>
