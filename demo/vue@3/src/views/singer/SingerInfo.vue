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
import { mapSingerInfoData } from '@shared/domains/singer/mapper'

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
    store.commit('replaceProperty', {
      paths: 'singer.singerInfo',
      data: mapSingerInfoData(data)
    })
    stopLoading()
  })
}
</script>

<style scoped lang="less"></style>
