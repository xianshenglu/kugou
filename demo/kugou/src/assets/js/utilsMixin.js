const utils = {
  replaceImgUrlSize (str, size = this.imgSize) {
    return str.replace(/\{\s*size\s*\}/, size)
  }
}
const utilsMixin = {
  data () {
    return {
      imgSize: 400,
      isLoaded: false
    }
  },
  methods: {
    ...utils,
    loadImgLazy () {
      let unloadedImages = this.$refs.lazyImages.filter(
        img => !img.dataset.isLoaded
      )
      unloadedImages.forEach(img => {
        let top = img.getBoundingClientRect().top
        if (top < this.$store.state.device.vh) {
          img.src = img.dataset.src
          img.dataset.isLoaded = true
        }
      })
    }
  }
}
export default utilsMixin