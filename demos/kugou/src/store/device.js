const device = {
  namespaced: true,
  state: {
    vh: document.documentElement.clientHeight,
    vMax: Math.max(
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    )
  }
}
export default device
