<template>
  <section class="nav">
    <nav class="nav__box">
      <router-link
        class="nav__link"
        v-for="(item,index) in navs"
        :key="index"
        :to="item.path"
        exact-active-class="nav__link--active"
      >{{item.text}}</router-link>
    </nav>
    <div class="nav__underline" :style="`transform:translateX(${activeIndex*100}%)`"></div>
  </section>
</template>

<script>
export default {
  name: 'AppNav',
  data() {
    return {
      navs: [
        {
          text: '新歌',
          name: 'new',
          path: '/'
        },
        {
          text: '排行',
          name: 'rank',
          path: '/rank/list'
        },
        {
          text: '歌单',
          name: 'song',
          path: '/song/list'
        },
        {
          text: '歌手',
          name: 'singer',
          path: '/singer/category'
        }
      ]
    }
  },
  computed: {
    activeIndex() {
      return this.navs.findIndex(nav => nav.path === this.$route.path)
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.nav {
  position: relative;
}
.nav__box {
  display: flex;

  padding: 0 @padding_width;
  line-height: 58px;
  height: 58px;
}
.nav__link {
  display: block;
  flex: 1 0 auto;

  box-sizing: border-box;
  height: 100%;

  text-align: center;

  font-size: 21px;
  line-height: inherit;
}
.nav__underline {
  height: 4px;
  width: 88px;
  margin-left: @padding_width;
  box-sizing: border-box;
  background: @theme;
  transition: transform 0.5s ease;
}
</style>
