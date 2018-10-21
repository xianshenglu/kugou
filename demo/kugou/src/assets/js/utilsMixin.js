const utils = {
  replaceImgUrlSize (str, size = this.imgSize) {
    return str.replace(/\{\s*size\s*\}/, size)
  }
}
const utilsMixin = {
  data () {
    return {
      imgSize: 400
    }
  },
  methods: {
    ...utils
  }
}
export default utilsMixin