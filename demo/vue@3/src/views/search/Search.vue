<template>
  <section class="search">
    <PubModuleTitle :title="title" class="search__title"/>
    <div class="search__cont" ref="searchCont">
      <form class="search__form" @submit.prevent>
        <input
          type="text"
          :placeholder="placeholder"
          class="search__input"
          v-model.trim="keyword"
          @keyup.enter="getSearchRes"
        >
        <button
          :class="isSearchResShow?'search__btn search__btn--active':'search__btn'"
          type="button"
          @click="getSearchRes"
        >{{title}}</button>
      </form>
      <div class="search__rec" v-show="isSearchRecShow">
        <h6 class="search__type">{{searchType}}</h6>
        <ul class="search__list">
          <li
            class="search__item main_border_bottom"
            v-for="(item,index) in searchRecArr"
            :key="index"
            @click="keyword=item.keyword;getSearchRes()"
          >{{item.keyword}}</li>
        </ul>
      </div>
      <div class="search__res" v-show="isSearchResShow">
        <div class="search__count">共有{{searchRes.info.length}}条结果</div>
        <AppMusicList :music-list="searchRes.info" class="search__res-list"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import PubModuleTitle from '@/components/PubModuleTitle.vue'
import AppMusicList from '@/components/AppMusicList.vue'
import { fetchHotSearch, fetchSearchResult } from '../../requests/search'
import bus from '@/eventBus'
import { useLoading } from '@/composables/useLoading'

const store = useStore()
const route = useRoute()
const router = useRouter()
const { startLoading, stopLoading, setLoadingExcludeSearchForm } = useLoading()

const searchCont = ref<HTMLElement | null>(null)

const title = ref('搜索')
const searchType = ref('最近热门')
const placeholder = ref('歌手/歌名/拼音')

const searchRecArr = computed(() => store.state.search.searchRecArr)
const searchRes = computed(() => store.state.search.searchRes)
const keyword = computed({
  get() {
    return store.state.search.keyword
  },
  set(value: string) {
    store.commit('replaceProperty', { paths: 'search.keyword', data: value })
  }
})
const isSearchRecShow = computed<boolean>({
  get() {
    return store.state.search.isSearchRecShow
  },
  set(data: boolean) {
    store.commit('replaceProperty', { paths: 'search.isSearchRecShow', data })
  }
})
const isSearchResShow = computed<boolean>({
  get() {
    return store.state.search.isSearchResShow
  },
  set(data: boolean) {
    store.commit('replaceProperty', { paths: 'search.isSearchResShow', data })
  }
})

init()
onMounted(() => {
  initQqBugDetect()
  bus.$on('searchBtnClicked', scrollTopSearchCont)
})

onUnmounted(() => {
  window.removeEventListener('touchstart', initQqBugDetect)
  window.removeEventListener('touchmove', initQqBugDetect)
  bus.$off('searchBtnClicked', scrollTopSearchCont)
})

function init () {
  const queryKeyword = route.query.keyword
  const isKeywordValid = typeof keyword.value === 'string' && keyword.value !== ''
  const isQueryKeywordValid = typeof queryKeyword === 'string' && queryKeyword !== ''
  if (isQueryKeywordValid && queryKeyword !== keyword.value) {
    keyword.value = queryKeyword
    getSearchRes()
  } else if (isKeywordValid) {
    isSearchRecShow.value = false
    isSearchResShow.value = true
  } else {
    getSearchRec()
  }
}

function getSearchRec() {
  if (searchRecArr.value.length !== 0) {
    isSearchResShow.value = false
    isSearchRecShow.value = true
    return
  }
  setLoadingExcludeSearchForm()
  startLoading()
  fetchHotSearch()
    .then(({ data }) => {
      store.commit('replaceProperty', {
        paths: 'search.searchRecArr',
        data: data.data.info
      })
      stopLoading()
      isSearchResShow.value = false
      isSearchRecShow.value = true
    })
    .catch((err: any) => {
      alert(err)
    })
}

function getSearchRes() {
  if (keyword.value === '') {
    return
  }
  router.replace({ query: { keyword: keyword.value } })
  setLoadingExcludeSearchForm()
  startLoading()
  fetchSearchResult({ params: { keyword: keyword.value } }).then(res => {
    const data = res.data.data
    store.commit('replaceProperty', {
      paths: 'search.searchRes',
      data
    })
    isSearchRecShow.value = false
    isSearchResShow.value = true
    stopLoading()
  })
}

function initQqBugDetect () {
  const search__cont = document.getElementsByClassName('search__cont')[0] as HTMLElement | undefined
  if (search__cont) {
    window.search__cont = search__cont
    
    //! bug with qq browser
    const listener = function() {
      if (search__cont.scrollTop) {
        // console.log(event.type, search__cont.scrollTop)
      }
    }
    window.addEventListener('touchstart', listener)
    window.addEventListener('touchmove', listener)
  }
}

function scrollTopSearchCont () {
  if (searchCont.value) {
    //todo smooth scroll
    searchCont.value.scrollTop = 0
  }
}


</script>

<style scoped lang="less">
@import (reference) '~@/styles/constant';
.search {
  box-sizing: border-box;
}
.search__cont {
  overflow: scroll;

  box-sizing: border-box;
  height: calc(100% - @module_title_height);
}
.search__form {
  box-sizing: border-box;
  height: @search_form_height;
  padding: @padding_width;

  background-color: @white-1;
}
.search__input,
.search__btn {
  box-sizing: border-box;
  height: 100%;

  border-radius: 5px;
}

.search__input {
  width: 277px;
  margin-right: 10px;
  padding: 7px 1px 7px 31px;

  border: 1px solid @white-2;
  background-color: @white;
}
.search__btn {
  width: 60px;

  color: @white-to-black;
  background-color: @white-2;
}
.search__btn--active {
  color: @white;
  background: @theme;
}
.search__type {
  height: 51px;
  padding-left: 16px;

  color: @theme;
  border-bottom: 1px solid @white-3;

  font-size: 16px;
  line-height: 51px;
}
.search__item {
  height: 64px;
  margin-left: 16px;

  font-size: 20px;
  line-height: 64px;
}
.search__count {
  box-sizing: border-box;
  width: 100%;
  padding-left: 16px;

  color: @white-to-black;
  background-color: @white-2;

  font-size: 14px;
  line-height: 28px;
}
.search__res-list {
  overflow-y: scroll;
}
</style>
