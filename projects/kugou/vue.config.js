module.exports = {
  assetsDir: './static/',
  baseUrl: './'
  // devServer: {
  //   proxy: {
  //     // proxy all requests whose path starting with /proxy_api to http://m.kugou.com/proxy_api then remove '/proxy_api' string
  //     '/proxy_api': {
  //       target: 'http://m.kugou.com/',
  //       pathRewrite: {
  //         '^/proxy_api': ''
  //       }
  //     }
  //   }
  //   //or just change the origin to http://m.kugou.com
  //   // proxy: 'http://m.kugou.com'
  // }
};
