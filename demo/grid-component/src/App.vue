<template>
  <section id="app">
    <MyInput :value="value" @search="search" />
    <MyTable :table="table" @sort="sort" />
    <Footer />
  </section>
</template>

<script>
import MyInput from './components/MyInput'
import MyTable from './components/MyTable'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    MyInput,
    MyTable,
    Footer
  },
  data () {
    return {
      value: '',
      table: {
        th: ['Name', 'Power'],
        tr: [
          { isShow: true, data: ['Jet Li', 8000] },
          { isShow: true, data: ['Jackie Chan', 7000] },
          { isShow: true, data: ['Bruce Lee', 9000] },
          { isShow: true, data: ['Chuck Norris', Infinity] }
        ]
      }
    }
  },
  methods: {
    sort (th, order) {
      let index = this.table.th.indexOf(th)
      if (index >= 0) {
        let tr = this.table.tr
        order === 'asce' ? tr.sort(compare) : tr.sort(compare).reverse()
      }
      function compare (arrA, arrB) {
        return arrA.data[index] < arrB.data[index] ? -1 : 1
      }
    },
    search (keyword) {
      this.value = keyword.trim()
      if (this.value === '') {
        this.table.tr.forEach(tr => (tr.isShow = true))
      } else {
        this.table.tr.forEach(tr => {
          let isKeywordIncludes =
            tr.data.findIndex(td =>
              String(td).match(new RegExp(keyword, 'gui'))
            ) >= 0
          tr.isShow = !!isKeywordIncludes
        })
      }
    }
  }
}
</script>

<style>
#app {
  margin-top : 60px;
  color : #2c3e50;
  text-align : center;
  font-family : 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing : grayscale;
}

</style>
