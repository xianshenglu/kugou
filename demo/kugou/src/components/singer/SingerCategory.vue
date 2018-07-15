<template>
  <section class="singer_category" @click="updateCurSingerCategoryInfo">
    <ul class="singer_category__list main_border" v-for="(list,list_index) in singerCategories" :key="list_index">
      <li class="singer_category__item main_border_bottom" v-for="(item,index) in list.data" :key="'1'+index">
        <router-link :to="item.path" class="singer_category__link">
          <div class="singer_category__title">{{item.classname}}</div>
          <button class="singer_category_btn arrow arrow--right"></button>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'SingerCategory',
  props: ['singerCategories'],
  inject:['closet'],
  methods:{
    updateCurSingerCategoryInfo(){
      let singerId=this.closet('[href]',event.target).href.split('/').pop()
      this.$emit('updateCurSingerCategoryInfo',singerId)
    }
  }
}
</script>

<style lang="less" scoped>
.singer_category__list {
  width: 347px;
  margin: 18px auto;

// border-bottom: none;

  border-radius: 6px;
  background-color: #fbfbfb;

  font-size: 18px;
}

.singer_category__item {
  height: 50px;
}

.singer_category__item:last-child {
  /*如果用另一种思路，设置 .singer_category__list 的 border-bottom ，
  在 iPhone6/7/8 就会失败，待测试*/
  border-bottom: none;
}

.singer_category__link {
  display: block;
  display: flex;
  align-items: center;

  height: 100%;
}

.singer_category__title {
  display: block;

  padding-left: 13px;
}

.singer_category_btn {
  margin-right: 15px;
  margin-left: auto;
}








</style>
