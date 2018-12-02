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
            @click="getTargetList(item.keyword)"
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
import store from '../../store/index.js'
import router from '../../router/index.js'
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
      placeholder: '歌手/歌名/拼音',
      keyword: '',
      isSearchRecShow: false,
      isSearchResShow: false
    }
  },
  computed: {
    ...mapState('search', ['searchRecArr', 'searchRes', 'prevKeyword'])
  },
  beforeRouteEnter(to, from, next) {
    let search = store.state.search
    let keyword = to.query.keyword
    let isKeywordValid = typeof keyword === 'string' && keyword !== ''
    let isPrevKeywordValid =
      typeof search.prevKeyword === 'string' && search.prevKeyword !== ''
    if (!isKeywordValid && isPrevKeywordValid) {
      let newRoute = Object.assign({}, to, {
        query: { keyword: search.prevKeyword }
      })
      router.push(newRoute)
    }
    next()
  },
  created() {
    let query = this.$route.query
    let keyword = query.keyword
    let isKeywordValid = typeof keyword === 'string' && keyword !== ''
    if (isKeywordValid) {
      this.keyword = keyword
      this.getSearchRes()
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
    getSearchRes() {
      if (this.keyword === '') {
        return
      }
      this.$router.push({ query: { keyword: this.keyword } })
      if (this.keyword === this.prevKeyword) {
        this.isSearchRecShow = false
        this.isSearchResShow = true
        return
      }
      let url = api.searchResult + encodeURIComponent(this.keyword)
      this.setLoadingExcludeSearchForm()
      this.startLoading()
      axios.get(url).then(res => {
        this.replaceProperty({
          paths: 'search.searchRes',
          data: res.data.data
        })
        this.replaceProperty({
          paths: 'search.prevKeyword',
          data: this.keyword
        })
        this.stopLoading()
        this.isSearchRecShow = false
        this.isSearchResShow = true
      })
    },
    getTargetList(val) {
      this.keyword = val
      this.getSearchRes()
    },
    goBackToSearchRec() {
      delete this.$route.query.keyword
      let newRoute = Object.assign({}, this.$route)
      this.$router.push(newRoute)
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
