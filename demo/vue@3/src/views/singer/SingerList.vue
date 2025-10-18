<template>
  <section class="singer_list">
    <PubModuleTitle :title="singerList.info.name"/>
    <ul class="singer_list__list" ref="lazyLoadRoot">
      <li
        class="singer_list__item main_border_bottom"
        v-for="(item,index) in singerList.data"
        :key="index"
      >
        <router-link :to="'/singer/info/' + item.singerid" class="singer_list__link">
          <img
            class="singer_list__img lazy_image"
            :ref="el => saveImageRef(index, el as HTMLImageElement)"
            :src="logo__grey"
            :data-src="replaceSizeInUrl(item.imgurl)"
          >
          <div class="singer_list__name">{{item.singername}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, watch, nextTick, useTemplateRef } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'
import { useRoute } from 'vue-router'

import PubModuleTitle from '@/components/PubModuleTitle.vue'
import { fetchSingerList } from '../../requests/singerList'
import { useLoading } from '@/composables/useLoading'
import { lazyLoad } from '@/utils'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'
import { mapSingerListData } from '@shared/domains/singer/mapper'

const store = useStore<RootState>()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const lazyLoadRoot = useTemplateRef<HTMLUListElement | null>('lazyLoadRoot')
const lazyImageElements = ref<(HTMLImageElement | null)[]>([])

const logo__grey = computed(() => store.state.images.logo__grey)
const singerList = computed(() => store.state.singer.singerList)

watch(()=>singerList.value.data, (newArray) => {
  if (newArray.length === 0) {
    return
  }
  lazyImageElements.value = newArray.map(() => null)
  nextTick(() =>
    lazyLoad(lazyImageElements.value as HTMLImageElement[], { root: lazyLoadRoot.value })
  )
}, {
  immediate: true
})


  // todo add scrollRemember
const singerListId = route.path.split('/').pop()
if (Number(singerListId) !== singerList.value.info.id) {
  setLoadingExcludeHeader()
  startLoading()
  getSingerList(singerListId as string)
}
const saveImageRef = (index: number, el: HTMLImageElement) => {
  lazyImageElements.value[index] = el
}

function getSingerList(singerListId: string) {
  fetchSingerList({ params: { singerListId } }).then(({ data }) => {
    store.commit('replaceProperty', {
      paths: 'singer.singerList',
      data: mapSingerListData(data)
    })
    stopLoading()
  })
}
</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.singer_list {
  font-size: 19px;
}
.singer_list__list {
  overflow: scroll;

  box-sizing: border-box;
  height: calc(100% - @module_title_height);
}
.singer_list__item {
  height: 88px;
}
.singer_list__link {
  display: flex;
  align-items: center;

  height: 100%;
}
.singer_list__img {
  display: block;

  width: 61px;
  height: 61px;
  margin: 0 18px 0 @padding_width;
}
</style>
