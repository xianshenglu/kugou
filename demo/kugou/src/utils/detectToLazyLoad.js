import { lazyLoad, watchRefs } from '.'

export default function detectToLazyLoad(lazyImages, parentNode, refsSelector) {
  if (lazyImages && lazyImages.length !== 0) {
    lazyLoad(lazyImages)
  } else {
    watchRefs(parentNode, refsSelector).then(refs => {
      lazyLoad(refs)
    })
  }
}
