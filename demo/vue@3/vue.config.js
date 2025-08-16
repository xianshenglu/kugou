const path = require('path')
module.exports = {
  assetsDir: './static/',
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://cdn.jsdelivr.net/gh/xianshenglu/vue@master/demo/vue@2.x/dist/'
      : './',

  // devServer: {
  // todo add https for localhost
  // }
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },
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
