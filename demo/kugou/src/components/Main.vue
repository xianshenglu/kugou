<template>
  <main class="main">
    <PubNav :navs="navs"></PubNav>
    <router-view class="main__cont"></router-view>
  </main>
</template>

<script>
import PubNav from './public/PubNav'
export default {
  name: 'Main',
  props: ['navs'],
  components: {
    PubNav
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.main__cont {
  overflow-y: auto;

  box-sizing: border-box;
  height: calc(100vh - 116px);
}

</style>
