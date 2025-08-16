const path = require('path')
module.exports = {
  assetsDir: './static/',
  lintOnSave: false,
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/xianshenglu/vue@master/demo/vue@2.x/dist/'
      : './',

  // devServer: {
  // todo add https for localhost
  // }
  configureWebpack: {
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../shared')
      }
    }
    // externals: {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios'
    // }
  }
}
