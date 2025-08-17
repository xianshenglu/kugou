import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import magicPreloader from 'vite-plugin-magic-preloader'
import legacy from '@vitejs/plugin-legacy'
// import babel from 'vite-plugin-babel'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// https://vitejs.dev/config/
const productionConfig = {
  base: 'https://cdn.jsdelivr.net/gh/xianshenglu/kugou@master/demo/vue@3/dist/',
  plugins: [
    legacy()
    // babel({
    //   babelConfig: {
    //     presets: [
    //       [
    //         '@babel/preset-env',
    //         {
    //           useBuiltIns: 'usage',
    //           corejs: 3,
    //           modules: false
    //         }
    //       ]
    //     ]
    //   }
    // })
  ]
}
const developmentConfig = {
  base: './',
  plugins: []
}
function getConfig(mode) {
  if (mode === 'development') {
    return developmentConfig
  }
  return productionConfig
}
export default defineConfig(({ mode }) => {
  const config = getConfig(mode)
  return {
    plugins: [vue(), magicPreloader(), ...config.plugins],
    base: config.base,
    server: {
      fs: {
        allow: [
          path.resolve(__dirname, '../shared'),
          path.resolve(__dirname, './')
        ]
      }
    },
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@shared': path.resolve(__dirname, '../shared'),
        src: path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
        '~@': path.resolve(__dirname, './src')
      }
    }
  }
})
