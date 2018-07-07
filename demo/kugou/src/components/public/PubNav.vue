<template>
  <nav class="nav">
    <ul class="nav__list">
      <li :class="item.active?'active nav__item':'nav__item'" v-for="(item,index) in navs" :key="index">
        <router-link class="nav__link" :to="item.link">{{item.text}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:'PubNav',
  props:['navs']

}
</script>

<style lang="less" scoped>
@themeColor: #2ca2f9;

.nav {
  box-shadow: 0 1px 3px 0 #eee;
}
.nav__list {
  display: flex;

  box-sizing: border-box;
  width: 100%;
  padding: 0 13px;
}
.nav__item {
  flex: 1 0 auto;

  box-sizing: border-box;
  height: 58px;

  text-align: center;

  border-bottom: 4px solid transparent;

  font-size: 21px;
  line-height: 56px;
}
.nav__item:hover {
  border-bottom-color: @themeColor;
}
.nav__link {
  display: block;

  width: 100%;
  height: 100%;
}

</style>
