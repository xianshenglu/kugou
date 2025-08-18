<template>
  <section class="singer_list">
    <PubModuleTitle :title="singerList.info.name"/>
    <ul class="singer_list__list" ref="lazyLoadRoot">
      <li
        class="singer_list__item main_border_bottom"
        v-for="(item,index) in singerList.data"
        :key="index"
      >
        <router-link :to="item.path" class="singer_list__link">
          <img
            class="singer_list__img lazy_image"
            :ref="el => saveImageRef(index, el)"
            :src="logo__grey"
            :data-src="item.imgUrl"
          >
          <div class="singer_list__name">{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import PubModuleTitle from '@/components/PubModuleTitle.vue'
import { fetchSingerList } from '../../requests/singerList'
import { useLoading } from '@/composables/useLoading'
import { lazyLoad } from '@/utils'
import replaceSizeInUrl from '@/utils/replaceSizeInUrl'

const store = useStore()
const route = useRoute()
const { startLoading, stopLoading, setLoadingExcludeHeader } = useLoading()

const lazyLoadRoot = ref(null)
const lazyImageElements = ref([])

const logo__grey = computed(() => store.state.images.logo__grey)
const singerList = computed(() => store.state.singer.singerList)

watch(()=>singerList.value.data, (newArray) => {
  if (newArray.length === 0) {
    return
  }
  lazyImageElements.value = newArray.map(() => null)
  nextTick(() =>
    lazyLoad(lazyImageElements.value, { root: lazyLoadRoot.value })
  )
}, {
  immediate: true
})


  // todo add scrollRemember
const singerListId = route.path.split('/').pop()
if (Number(singerListId) !== singerList.value.info.id) {
  setLoadingExcludeHeader()
  startLoading()
  getSingerList(singerListId)
}
const saveImageRef = (index, el) => {
  lazyImageElements.value[index] = el
}

function getSingerList(singerListId) {
  fetchSingerList({ params: { singerListId } }).then(({ data }) => {
    const singerListData = {
      info: {
        id: data.classid,
        name: data.classname,
        count: data.singers.total
      },
      data: data.singers.list.info
    }
    data.singers.list.info.forEach(obj => {
      obj.id = obj.singerid
      obj.name = obj.singername
      obj.imgUrl = replaceSizeInUrl(obj.imgurl)
      obj.path = '/singer/info/' + obj.id
    })
    store.commit('replaceProperty', {
      paths: 'singer.singerList',
      data: singerListData
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
