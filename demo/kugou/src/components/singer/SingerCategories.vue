<template>
<section class="singer_categories">
  <ul class="singer_categories__list" v-for="(list,list_index) in singer_categories" :key="list_index">
    <li class="singer_categories__item" v-for="(item,index) in list.data" :key="'1'+index">
      <a href="#" class="singer_categories__link">
        <span class="singer_categories__text">{{item.classname}}</span>
          <button class="singer_categories_btn arrow arrow--right"></button>
        </a>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'SingerCategories',
  props:['singer_categories']
}
</script>

<style lang="less" scoped>
.singer_categories__list {
  width: 347px;
  margin: 18px auto 19px;

  border: 1px solid #e4e4e4;
  border-bottom: none;
  border-radius: 6px;
  background-color: #fbfbfb;

  font-size: 18px;
}
.singer_categories__item {
  height: 50px;

  border-bottom: 1px solid #e4e4e4;
}
.singer_categories__link {
  display: block;
  display: flex;
  align-items: center;

  height: 100%;
}
.singer_categories__text {
  display: block;

  padding-left: 13px;
}
.singer_categories_btn {
  margin-right: 15px;
  margin-left: auto;
}

</style>
