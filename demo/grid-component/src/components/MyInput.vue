<template>
  <section class="box">
    <span class="box-span">search</span>
    <input type="text" :value="value" @input="search" :placeholder="placeholder" class="box-input" />
  </section>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      placeholder: 'keywords'
    }
  },
  props: ['value'],
  methods: {
    search () {
      this.$emit('search', event.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box {
  margin-bottom : 20px;
  font-size : 0;
  & > * {
    display : inline-block;
    box-sizing : border-box;
    margin-right : 10px;
    font-size : 14px;
  }
  .box-span {
    color : #444444;
  }
  .box-input {
    padding : 10px;
    width : 170px;
    height : 20px;
    border : 1px solid #646262;
  }
}

</style>
