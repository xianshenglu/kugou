<template>
  <section class="search">
    <PubModuleTitle :title="title" class="search__title" @click="goBackToSearchRec"/>
    <div class="search__cont" ref="searchCont">
      <form class="search__form" @submit.prevent>
        <input
          type="text"
          :placeholder="placeholder"
          class="search__input"
          :value.sync="keyword"
          @input="keyword=arguments[0].target.value.trim()"
          @keyup.enter="getSearchRes(keyword)"
        >
        <button
          :class="isSearchResShow?'search__btn search__btn--active':'search__btn'"
          type="button"
          @click="getSearchRes(keyword)"
        >{{title}}</button>
      </form>
      <div class="search__rec" v-show="isSearchRecShow">
        <h6 class="search__type">{{searchType}}</h6>
        <ul class="search__list">
          <li
            class="search__item main_border_bottom"
            v-for="(item,index) in searchRecArr"
            :key="index"
            @click="getSearchRes(item.keyword)"
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
import PubModuleTitle from '../public/PubModuleTitle'
import AppMusicList from '../public/AppMusicList'
import axios from 'axios'
import api from '../../assets/js/api'
import bus from '../../assets/js/bus'
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
    let queryKeyword = this.$route.query.keyword
    let isKeywordValid = typeof this.keyword === 'string' && this.keyword !== ''
    let isQueryKeywordValid =
      typeof queryKeyword === 'string' && queryKeyword !== ''
    if (isQueryKeywordValid || isKeywordValid) {
      let keyword = isQueryKeywordValid ? queryKeyword : this.keyword
      this.getSearchRes(keyword)
    } else {
      this.getSearchRec()
    }
  },
  mounted() {
    let search__cont = document.getElementsByClassName('search__cont')[0]
    window.search__cont = search__cont
    //! bug with qq browser
    let listener = function() {
      if (search__cont.scrollTop) {
        console.log(event.type, search__cont.scrollTop)
      }
    }
    window.addEventListener('touchstart', listener)
    window.addEventListener('touchmove', listener)
    bus.$on('searchBtnClicked', () => {
      if (this.$refs.searchCont) {
        //todo smooth scroll
        this.$refs.searchCont.scrollTop = 0
      }
    })
  },
  methods: {
    ...mapMutations(['replaceProperty']),
    getSearchRec() {
      if (this.searchRecArr.length !== 0) {
        this.isSearchResShow = false
        this.isSearchRecShow = true
        return
      }
      this.setLoadingExcludeSearchForm()
      this.startLoading()
      axios
        .get(api.hotSearch)
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
    getSearchRes(keyword) {
      if (keyword === '') {
        return
      }
      if (keyword === this.keyword) {
        this.isSearchRecShow = false
        this.isSearchResShow = true
        return
      }
      this.$router.replace({ query: { keyword } })
      let url = api.searchResult + encodeURIComponent(keyword)
      this.setLoadingExcludeSearchForm()
      this.startLoading()
      axios
        .get(url)
        .then(res => {
          let data = res.data.data
          this.keyword = keyword
          this.replaceProperty({
            paths: 'search.searchRes',
            data
          })
          this.isSearchRecShow = false
          this.isSearchResShow = true
          this.stopLoading()
        })
        .catch(er => alert(er))
    },
    goBackToSearchRec() {
      // if user wants to see the recommendation, clear the keyword history.
      delete this.$route.query.keyword
      this.keyword = ''
      let newRoute = Object.assign({}, this.$route)
      this.$router.replace(newRoute)
      this.getSearchRec()
    }
  }
}
</script>

<style scoped lang="less">
@import (reference) '../../assets/css/constant.less';
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
