<template>
<ul class="pub_list">
  <li class="pub_list__item " v-for="(item,index) in pubList" :key="index">
    <router-link :to="item.path" class="pub_list__link">
      <img class="pub_list__img" :src="item.imgUrl">
      <slot :data="item" name="cont"></slot>
      <button class="pub_list__btn arrow arrow--right"></button>
    </router-link>
  </li>
</ul>
</template>

<script>
export default {
  name: 'PubList',
  props: ['pubList']
}
</script>

<style lang="less" scoped>
.pub_list {
  box-sizing: border-box;
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

.pub_list__btn {
  flex: 0 0 auto;

  margin-right: 15px;
  margin-left: auto;
}

</style>
