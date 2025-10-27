export default {
  plugins: {
    'postcss-pixel-to-viewport': {
      viewportWidth: 375,
      viewportUnit: 'vw',
      propertyBlacklist: [],
      minPixelValue: 2,
      enableConvertComment: 'on',
      disableConvertComment: 'off',
      mediaQuery: false
    }
  }
}
