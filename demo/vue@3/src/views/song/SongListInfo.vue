<template>
  <section class="song_list_info">
    <PubModuleHead :module-head-info="getModuleHeadInfo">
      <template v-slot:moduleDes>
        <PubModuleDes :description="getModuleHeadInfo.intro" />
      </template>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList" />
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import PubModuleHead from '@/components/PubModuleHead'
import PubModuleDes from '@/components/PubModuleDes'
import AppMusicList from '@/components/AppMusicList'
import { fetchSongListInfo } from '../../requests/songListInfo'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

const store = useStore()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const songListInfo = computed(() => store.state.song.songListInfo)

const getModuleHeadInfo = computed(() => {
  const data = songListInfo.value.info.list
  return {
    imgUrl: replaceSizeInUrl(data.imgurl),
    name: data.specialname,
    intro: data.intro
  }
})

const getMusicList = computed(() => {
  return songListInfo.value.songs.list.info
})

const getSongListInfo = (songListId) => {
  fetchSongListInfo({ songListId }).then(({ data }) => {
    const songListInfoData = {
      info: data.info,
      songs: data.list
    }
    store.commit('replaceProperty', {
      paths: 'song.songListInfo',
      data: songListInfoData
    })
    stopLoading()
  })
}

const songListId = route.path.split('/').pop()
setLoadingExcludeHeader()
startLoading()
getSongListInfo(songListId)
</script>

<style lang="less" scoped></style>
