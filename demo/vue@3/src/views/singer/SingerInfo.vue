<template>
  <section class="singer_info">
    <PubModuleHead v-if="getModuleHeadInfo" :module-head-info="getModuleHeadInfo">
      <template v-slot:moduleDes>
        <PubModuleDes :description="getModuleHeadInfo.intro!" />
      </template>
    </PubModuleHead>
    <AppMusicList :music-list="getMusicList" />
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'
import { useRoute } from 'vue-router'

import PubModuleHead from '@/components/PubModuleHead.vue'
import PubModuleDes from '@/components/PubModuleDes.vue'
import AppMusicList from '@/components/AppMusicList.vue'
import { fetchSingerInfo } from '../../requests/singerInfo'
import { useLoading } from '@/composables/useLoading'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

const store = useStore<RootState>()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const singerInfo = computed(() => store.state.singer.singerInfo)

const singerId = route.path.split('/').pop() || ''
setLoadingExcludeHeader()
startLoading()
getSingerInfo(singerId)

const getModuleHeadInfo = computed(() => {
  return singerInfo.value.info
})

const getMusicList = computed(() => {
  return singerInfo.value.data as any // todo:refactor fix the type compatibility issue.
})

function getSingerInfo (singerId: string): void {
  fetchSingerInfo({ singerId }).then(({ data }) => {
    // todo:refactor move the transformation to pipe?
    const singerInfoData = {
      info: {
        id: data.info.singerid,
        name: data.info.singername,
        count: data.info.songcount,
        albumcount: data.info.albumcount,
        imgUrl: replaceSizeInUrl(data.info.imgurl),
        intro: data.info.intro
      },
      data: data.songs.list
    }
    data.songs.list.forEach((obj: any) => {
      obj.name = obj.filename
      // obj.path='/singer/info/'+obj.id
    })
    store.commit('replaceProperty', {
      paths: 'singer.singerInfo',
      data: singerInfoData
    })
    stopLoading()
  })
}
</script>

<style scoped lang="less"></style>
