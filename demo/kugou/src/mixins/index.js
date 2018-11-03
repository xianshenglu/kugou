import utils from '../assets/js/utils'
export default {
  data() {
    return {
      imgSize: 400,
      isLoaded: false
    }
  },
  methods: {
    ...utils,
    vBindAttr(key, dataPrefix = 'data-') {
      return {
        [`${dataPrefix + key}`]: ''
      }
    },
    $_xsl__detectToLoadImgLazy(lazyImages, parentNode, refsSelector) {
      if (lazyImages && lazyImages.length !== 0) {
        this.$_xsl__loadImgLazy(lazyImages)
      } else {
        this.$_xsl__watchRefs(parentNode, refsSelector).then(refs => {
          this.$_xsl__loadImgLazy(refs)
        })
      }
    },
    $_xsl__watchRefs(parentNode = document, refsSelector) {
      return new Promise(function(resolve) {
        let observer = new MutationObserver(callback)
        let config = { childList: true, subtree: true }
        observer.observe(parentNode, config)

        function callback(mutationsList, observer) {
          mutationsList.forEach(mutation => {
            if (mutation.type == 'childList') {
              let refs = parentNode.querySelectorAll(refsSelector)
              if (refs.length !== 0) {
                observer.disconnect()
                resolve(Array.from(refs))
              }
            }
          })
        }
      })
    },
    $_xsl__loadImgLazy(els) {
      if (!Array.isArray(els)) {
        return
      }
      let unloadedImages = els.filter(img => !img.dataset.isLoaded)
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
