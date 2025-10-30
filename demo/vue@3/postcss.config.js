import postcssPixelToViewport from 'postcss-pixel-to-viewport'
import autoprefixer from 'autoprefixer'
import { getPostCssVwToCalcPlugin } from '../shared/build/postcss-vw-to-calc.js'
import postcss from 'postcss'
export default {
  plugins: [
    autoprefixer({}),
    postcssPixelToViewport({
      viewportWidth: 375,
      viewportUnit: 'vw',
      propertyBlacklist: ['letter-spacing'],
      minPixelValue: 2,
      enableConvertComment: 'on',
      disableConvertComment: 'off',
      mediaQuery: false
    }),
    getPostCssVwToCalcPlugin(postcss)()
  ]
}
