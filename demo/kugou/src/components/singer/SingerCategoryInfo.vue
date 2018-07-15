<template>
  <section class="singer_category_info" v-if="isCurSingerCategoryInfoShow" @click="updateCurSingerCategoryInfo">
    <PubModuleTitle :title="curSingerCategoryInfo.info.name"></PubModuleTitle>
    <ul class="singer_category_info__list">
      <li class="singer_category_info__item main_border_bottom" v-for="(item,index) in curSingerCategoryInfo.data" :key="index">
        <router-link :to="item.path" class="singer_category_info__link">
          <img :src="item.imgUrl" class="singer_category_info__img">
          <div class="singer_category_info__name">{{item.name}}</div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import PubModuleTitle from '../public/PubModuleTitle'

export default {
  name: 'SingerCategoryInfo',
  props: ['curSingerCategoryInfo','isCurSingerCategoryInfoShow'],
  components:{
    PubModuleTitle
  },
  created() {
    let singerCategoryInfoId = this.$route.path.split('/').pop()
    if(!this.$props.isCurSingerCategoryInfoShow){
      this.$emit('getCurSingerCategoryInfo', singerCategoryInfoId)
    }
  },
  destroyed() {
    //数据异步更新，没有被刷新，手动销毁数据，数据准备好了之后，再渲染
    this.$emit('destroyCurSingerCategoryInfo')
  },
  inject:['closet'],
  methods:{
    updateCurSingerCategoryInfo(){
      let singerId = this.closet('[href]', event.target).href.split('/').pop()
      this.$emit('updateCurSingerCategoryInfo',singerId)
    }
  }
}
</script>

<style scoped lang="less">
.singer_category_info {
  font-size: 19px;
}
.singer_category_info__title {
  position: fixed;
  top: 58px;

  width: 100%;
  height: 54px;

  text-align: center;

  background-color: #fff;

  line-height: 54px;
}
.singer_category_info__list {
  height: calc(100% - 54px);
  padding-top: 54px;
}
.singer_category_info__item {
  height: 88px;
}
.singer_category_info__link {
  display: flex;
  align-items: center;

  height: 100%;
}
.singer_category_info__img {
  display: block;

  width: 61px;
  height: 61px;
  margin: 0 18px 0 13px;
}


























</style>
