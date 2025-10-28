/* eslint-disable import/no-extraneous-dependencies */
const postcss = require("postcss");
const postcssPixelToViewport = require("postcss-pixel-to-viewport");

const {
  getPostCssVwToCalcPlugin,
} = require("../shared/build/postcss-vw-to-calc.js");

module.exports = {
  plugins: [
    postcssPixelToViewport({
      viewportWidth: 375,
      viewportUnit: "vw",
      propertyBlacklist: ["letter-spacing"],
      minPixelValue: 2,
      enableConvertComment: "on",
      disableConvertComment: "off",
      mediaQuery: false,
    }),
    getPostCssVwToCalcPlugin(postcss)(),
  ],
};
