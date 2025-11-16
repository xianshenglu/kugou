import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tsconfigPaths from 'vite-tsconfig-paths'
import { analyzer } from 'vite-bundle-analyzer'
import legacy from '@vitejs/plugin-legacy'
import browserslist from 'browserslist'
import { viteInlineCss } from './vite-plugin-inline-css'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
// todo: why __dirname is available when installed @types/node? we didn't specify the type in tsconfig.json
// todo: installing @types/node can fix the type issue for path and url, but it will also make __dirname works? which may be incorrect?
// todo: remove @types/node and check all the questions
const productionConfig = {
  plugins: [
    legacy({
      targets: browserslist(),
      polyfills: true,
      modernTargets: browserslist(),
      modernPolyfills: true,
    }),
    viteInlineCss(),
  ]
}
const developmentConfig = {
  plugins: []
}
const analysisConfig = {
  plugins: [
    legacy({
      targets: browserslist(),
      polyfills: true,
      modernTargets: browserslist(),
      modernPolyfills: true
    }),
    viteInlineCss(),
    analyzer({ openAnalyzer: false })
  ]
}
function getExtraConfig(mode: string) {
  return (
    {
      development: developmentConfig,
      production: productionConfig,
      analysis: analysisConfig
    }[mode] || productionConfig
  )
}

export default defineConfig(({mode})=>{
  const extraConfig  = getExtraConfig(mode)
  return ({
    base: './',
    plugins: [tsconfigPaths(), react(), ...extraConfig.plugins],
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]'
      }
    },
    server: {
      fs: {
        allow: [
          path.resolve(__dirname, '../shared'),
          path.resolve(__dirname, './')
        ] // or path.resolve(__dirname, '../shared')
      }
    },
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, '../shared'),
        src: path.resolve(__dirname, './src')
      }
    }
  })
})
