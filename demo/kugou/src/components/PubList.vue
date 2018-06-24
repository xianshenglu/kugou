<template>
<section class="pub_list">
  <ul class="pub_list__list">
    <li class="pub_list__item " v-for="(item,index) in pub_list_data" :key="index">
      <a href="#" class="pub_list__link">
        <img class="pub_list__img" :src="item.img_url">
          <slot :data="item"></slot>
        <button class="pub_list__btn arrow arrow--right"></button>
      </a>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'PubList',
  props: ['pub_list_data','par_class']
}
</script>

<style lang="less" scoped>
.pub_list__list {
  width: 100%;
  padding-left: 13px;
}

.pub_list__item {
  height: 123px;

  border-bottom: 1px solid #eee;
}

.pub_list__link {
  display: flex;
  align-items: center;

  height: 100%;
}

.pub_list__img {
  width: 97px;
  height: 97px;
}

.pub_list__text {
  padding-left: 18px;
}

.pub_list__btn {
  margin-right: 28px;
  margin-left: auto;
}

</style>
