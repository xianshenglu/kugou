import postcssPixelToViewport from 'postcss-pixel-to-viewport'
import { getPostCssVwToCalcPlugin } from '../shared/build/postcss-vw-to-calc.js'
import postcss from 'postcss'
export default {
  plugins: [
    postcssPixelToViewport({
      viewportWidth: 375,
      viewportUnit: 'vw',
      propertyBlacklist: [],
      minPixelValue: 2,
      enableConvertComment: 'on',
      disableConvertComment: 'off',
      mediaQuery: false
    }),
    getPostCssVwToCalcPlugin(postcss)()
  ]
}
