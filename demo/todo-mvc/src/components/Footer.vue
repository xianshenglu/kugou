<template>
  <footer class="footer">
    <p class="footer-info">{{info}}</p>
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
  flex: 0 1 auto;

  box-sizing: border-box;
  width: 100%;
  margin-top: auto;
  margin-bottom: 0;
  padding: 10px 0;

  font-size: 10px;
}
.footer-info {
  width: 200px;
  margin: 0 auto;

  text-align: center;

  color: #bfbfbf;

  line-height: 1.5;
}

.footer-info-link {
  text-decoration: underline;
}

</style>
