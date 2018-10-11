<template>
  <section class="search">
    <PubModuleTitle :title="title"></PubModuleTitle>
    <form  class="search__form">
      <input type="text" :placeholder="placeholder" class="search__input" :value.sync="keyword" @input="keyword=arguments[0].target.value.trim()">
      <button :class="isSearchBtnActive?'search__btn search__btn--active':'search__btn'" type="button" @click="getSearchRes">{{title}}</button>
    </form>
    <div class="search__rec" v-if="isSearchRecShow">
      <h6 class="search__type">{{searchType}}</h6>
      <ul class="search__list">
        <li class="search__item main_border_bottom" v-for="(item,index) in searchRecArr" :key="index" @click="getTargetList(item.keyword)">{{item.keyword}}</li>
      </ul>
    </div>
    <div class="search__res" v-if="isCurSearchResShow">
      <div class="search__count">共有{{curSearchRes.info.length}}条结果</div>
      <PubMusicList :musicList="curSearchRes.info" class="search__res-list"></PubMusicList>
    </div>
  </section>
</template>

<script>
import PubModuleTitle from '../public/PubModuleTitle'
import PubMusicList from '../public/PubMusicList'
import axios from 'axios'
import api from '../../assets/js/api.js'
export default {
  name: 'Search',
  props: [
    'searchRecArr',


  ],
  components: {
    PubModuleTitle,
    PubMusicList
  },
  data() {
    return {
      title: '搜索',
      searchType: '最近热门',
      placeholder: '歌手/歌名/拼音',
      keyword: '',
      isSearchBtnActive: true,
      isSearchRecShow:true,
      curSearchRes: {},
      isCurSearchResShow:false  ,

    }
  },
  created() {
    this.$emit('getSearchRec')
  },
  methods: {
    getSearchRes() {
      if (this.keyword === '') {
        return
      }
      let url = api.searchResult + encodeURIComponent(this.keyword)
      axios.get(url).then(res => {
        this.curSearchRes = res.data.data
        this.isCurSearchResShow = true
        this.isSearchRecShow=false
      })
    },
    getTargetList(val) {
      this.keyword = val
      this.getSearchRes()
    }
  }
}
</script>

<style scoped lang="less">
@import (reference) "../../assets/css/constant.less";
.search {
  box-sizing: border-box;
  height: calc(100% - 58px);
  padding-top:54px;

  font-size: 18px;
}
.search__form {
  height: 37px;
  padding: 13px;

  background-color: @light-1-white;
}
.search__input,
.search__btn {
  box-sizing: border-box;
  height: 100%;

  border-radius: 5px;
}
.search__btn--active {
  color: @white;
  background: @theme-color;
}
.search__input {
  width:277px;
  margin-right: 10px;
  padding: 7px 1px 7px 31px;

  border: 1px solid @light-2-white;
  background-color: @white;
}
.search__btn {
  width: 60px;

  color:@white-to-black;
  background-color:@light-2-white;
}
.search__btn.active {
  color: @white;
  background-color:@theme-color;
}
.search__type {
  height: 51px;
  padding-left: 16px;

  color:@theme-color;
  border-bottom: 1px solid @light-3-white;

  font-size: 16px;
  line-height: 51px;
}
.search__item {
  height: 64px;
  margin-left: 16px;

  border-color:@light-3-white;

  font-size: 20px;
  line-height: 64px;
}
.search__count {
  color:#5d5d5d;
  line-height:28px;
  padding-left:16px;
  width:100%;
  box-sizing:border-box;
  font-size:14px;
  background-color:#e6e6e6;
}
.search__res-list {
  // height:calc(1);
  overflow-y:scroll;
}
</style>
