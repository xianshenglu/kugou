<template>
  <header>
    <h1>{{head}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      head: 'todos'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  flex: 0 1 auto;

  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;

  text-align: center;
}
h1 {
  color: rgba(175, 47, 47, 0.15);

  font-size: 100px;
}

</style>
