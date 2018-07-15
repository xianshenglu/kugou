<template>
  <h4 class="module_title main_box_shadow">{{title}}</h4>
</template>

<script>
export default {
  name:'PubModuleTitle',
  props:['title']
}
</script>

<style scoped lang="less">
.module_title {
  position: fixed;
  top: 58px;

  width: 100%;
  height: 54px;

  text-align: center;

  background-color: #fff;

  line-height: 54px;
}




</style>
