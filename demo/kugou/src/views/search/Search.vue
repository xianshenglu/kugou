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

<script>
import PubModuleTitle from '@/components/PubModuleTitle'
import AppMusicList from '@/components/AppMusicList'
import { fetchHotSearch, fetchSearchResult } from '../../requests/search'
import bus from '@/eventBus'
import loading from '../../mixins/loading.js'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Search',
  mixins: [loading],
  components: {
    PubModuleTitle,
    AppMusicList
  },
  data() {
    return {
      title: '搜索',
      searchType: '最近热门',
      placeholder: '歌手/歌名/拼音'
    }
  },
  computed: {
    ...mapState('search', [
      'searchRecArr',
      'searchRes',
      'isSearchRecShow',
      'isSearchResShow'
    ]),
    keyword: {
      get() {
        return this.$store.state.search.keyword
      },
      set(value) {
        this.replaceProperty({ paths: 'search.keyword', data: value })
      }
    },
    isSearchRecShow: {
      get() {
        return this.$store.state.search.isSearchRecShow
      },
      set(data) {
        this.replaceProperty({ paths: 'search.isSearchRecShow', data })
      }
    },
    isSearchResShow: {
      get() {
        return this.$store.state.search.isSearchResShow
      },
      set(data) {
        this.replaceProperty({ paths: 'search.isSearchResShow', data })
      }
    }
  },
  created() {
    this.init()
  },
  mounted() {
    bus.$on('searchBtnClicked', this.scrollTopSearchCont)
    this.initQqBugDetect()
  },
  destroyed() {
    bus.$off('searchBtnClicked', this.scrollTopSearchCont)
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    init() {
      let queryKeyword = this.$route.query.keyword
      let isKeywordValid =
        typeof this.keyword === 'string' && this.keyword !== ''
      let isQueryKeywordValid =
        typeof queryKeyword === 'string' && queryKeyword !== ''
      if (isQueryKeywordValid && queryKeyword !== this.keyword) {
        this.keyword = queryKeyword
        this.getSearchRes()
      } else if (isKeywordValid) {
        this.isSearchRecShow = false
        this.isSearchResShow = true
      } else {
        this.getSearchRec()
      }
    },
    getSearchRec() {
      if (this.searchRecArr.length !== 0) {
        this.isSearchResShow = false
        this.isSearchRecShow = true
        return
      }
      this.setLoadingExcludeSearchForm()
      this.startLoading()
      fetchHotSearch()
        .then(({ data }) => {
          this.replaceProperty({
            paths: 'search.searchRecArr',
            data: data.data.info
          })
          this.stopLoading()
          this.isSearchResShow = false
          this.isSearchRecShow = true
        })
        .catch(err => {
          alert(err)
        })
    },
    getSearchRes() {
      if (this.keyword === '') {
        return
      }
      this.$router.replace({ query: { keyword: this.keyword } })
      this.setLoadingExcludeSearchForm()
      this.startLoading()
      fetchSearchResult({ params: { keyword: this.keyword } }).then(res => {
        let data = res.data.data
        this.replaceProperty({
          paths: 'search.searchRes',
          data
        })
        this.isSearchRecShow = false
        this.isSearchResShow = true
        this.stopLoading()
      })
    },
    initQqBugDetect() {
      let search__cont = document.getElementsByClassName('search__cont')[0]
      window.search__cont = search__cont
      //! bug with qq browser
      let listener = function() {
        if (search__cont.scrollTop) {
          // console.log(event.type, search__cont.scrollTop)
        }
      }
      window.addEventListener('touchstart', listener)
      window.addEventListener('touchmove', listener)
    },
    scrollTopSearchCont() {
      if (this.$refs.searchCont) {
        //todo smooth scroll
        this.$refs.searchCont.scrollTop = 0
      }
    }
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../styles/constant';
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
