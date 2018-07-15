<template>
  <section class="search">
    <PubModuleTitle :title="title"></PubModuleTitle>
    <form action="#" class="search_form">
      <input type="text" :placeholder="placeholder" class="search_input">
      <button class="search_btn">{{title}}</button>
    </form>
    <div class="search_rec" v-if="isSearchRecShow">
      <h6 class="search_type">{{searchType}}</h6>
      <ul class="search_list">
        <li class="search_item main_border_bottom" v-for="(item,index) in searchRecArr" :key="index">{{item.keyword}}</li>
      </ul>
    </div>
    <div class="search_res" v-if="isCurSearchResShow">
      <div class="search_count"></div>
    </div>
  </section>
</template>

<script>
import PubModuleTitle from '../public/PubModuleTitle'

export default {
  name:'Search',
  props:['searchRecArr','isSearchRecShow','curSearchRes','isCurSearchResShow'],
  components:{
    PubModuleTitle
  },
  data(){
    return {
      title:'搜索',
      searchType:'最近热门',
      placeholder:'歌手/歌名/拼音'
    }
  }
}
</script>

<style scoped lang="less">
@themeColor: #2ca2f9;
.search {
  box-sizing: border-box;
  height: calc(100% - 58px);
  padding-top:54px;

  font-size: 18px;
}
.search_form {
  height: 37px;
  padding: 13px;

  background-color: #fbfbfb;
}
.search_input,
.search_btn {
  box-sizing: border-box;
  height: 100%;

  border-radius: 5px;
}
.search_input {
  width:277px;
  margin-right: 10px;
  padding: 7px 1px 7px 31px;

  border: 1px solid #e5e5e5;
  background-color: #fff;
}
.search_btn {
  width: 60px;

  color:#959595;
  background-color:#e5e5e5;
}
.search_btn.active {
  color: #fff;
  background-color:@themeColor;
}
.search_type {
  height: 51px;
  padding-left: 16px;

  color:@themeColor;
  border-bottom: 2px solid #ccc;

  font-size: 16px;
  line-height: 51px;
}
.search_item {
  height: 64px;
  margin-left: 16px;

  border-color:#ccc;

  font-size: 20px;
  line-height: 64px;
}

</style>
