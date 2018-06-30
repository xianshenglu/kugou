<template>
  <section class="singer_category_info" v-if="isSingerCategoryInfoShow">
    <h4 class="singer_category_info__title main_box_shadow">{{curSingerCategoryInfo.info.name}}</h4>
    <ul class="singer_category_info__list">
      <li class="singer_category_info__item main_border_bottom" v-for="(item,index) in curSingerCategoryInfo.data" :key="index">
        <a href="" class="singer_category_info__link">
          <img :src="item.imgUrl" class="singer_category_info__img">
          <div class="singer_category_info__name">{{item.name}}</div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SingerCategoryInfo',
  props: ['curSingerCategoryInfo','isSingerCategoryInfoShow'],
  created() {
    let singerCategoryInfoId = this.$route.path.split('/').pop()
    // console.log(singerCategoryInfoId, this.$props.curSingerCategoryInfo.info)
    let isDataReady = this.$props.curSingerCategoryInfo.info && this.$props.curSingerCategoryInfo.info.id === singerCategoryInfoId
    if (!isDataReady) {
      this.$emit('getSingerCategoryInfo', singerCategoryInfoId)
    }
  },
  destroyed() {
    //数据异步更新，没有被刷新，手动销毁数据，数据准备好了之后，再渲染
    this.$emit('destroyCurSingerCategoryInfo')
  },
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
