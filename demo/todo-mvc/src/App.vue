<template>
  <div id="app">
    <Header />
    <ToDoList/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    ToDoList,
    Footer
  }
}
</script>

<style>
html,
body {
  height: 100%;

  background: #f5f5f5;
}
#app {
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  text-align: center;

  color: #2c3e50;

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
