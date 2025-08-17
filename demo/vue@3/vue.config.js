const path = require('path')
module.exports = {
  assetsDir: './static/',
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/xianshenglu/kugou@master/demo/vue@3/dist/'
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
