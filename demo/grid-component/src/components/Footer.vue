<template>
  <footer class="footer">
    <!-- <p class="footer-info">{{info}}</p> -->
    <p class="footer-info">Written by {{author}}</p>
    <p class="footer-info">Part of
      <a class="footer-info-link" href="https://github.com/xianshenglu/vue/tree/master/demo">Vue demo</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      info: 'Double-click to edit a todo',
      author: 'xianshenglu'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  position : absolute;
  bottom : 10px;
  overflow : hidden;
  box-sizing : border-box;
  width : 100%;
  height : 10%;
  font-size : 10px;
}
.footer-info {
  margin : 0 auto;
  width : 200px;
  color : #bfbfbf;
  text-align : center;
  line-height : 1.8;
}

.footer-info-link {
  text-decoration : underline;
}

</style>
