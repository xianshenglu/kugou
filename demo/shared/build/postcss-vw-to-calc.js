const getPostCssVwToCalcPlugin = (postcss) =>
  postcss.plugin('postcss-vw-to-calc', () => {
    return (root) => {
      root.walkDecls((decl) => {
        decl.value = decl.value.replace(/(-?[\d.]+)vw/g, (_, num) => {
          return `calc(var(--vw, 1vw) * ${num})`
        })
      })
    }
  })
module.exports = { getPostCssVwToCalcPlugin }
