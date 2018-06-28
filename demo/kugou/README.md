# [KuGou Music](https://xianshenglu.github.io/vue/demo/kugou/dist/index.html)

<!-- Function added: -->

<!-- 1.  Set scroll when number of items is too much
2.  Fit fore mobile using flex -->

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## API

- [Kugou-api](https://github.com/ecitlm/Kugou-api)

## Related Plugins

- [postcss-pixel-to-viewport](https://github.com/meltifa/postcss-pixel-to-viewport)

For attributes except `font-size` and related properties. For more, see _package.json_.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

Just for `font-size` and related properties. For more, see _package.json_.

- http-proxy-middleware

Used in development mode because kugou-api doesn't support `jsonp` or `cors`. For more, see _vue.config.js_.

Since @/vue-cli has already installed this plugin, we just need to alter _vue.config.js_.

## Reference

- [vue-demo-kugou](https://github.com/lavyun/vue-demo-kugou)
