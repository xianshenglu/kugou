export default {
  //todo this.imageSize may be undefined
  $_xsl__replaceImgUrlSize(str = '', size = this.imgSize) {
    return str.replace(/\{\s*size\s*\}/, size)
  },
  milliToMin(millisecond) {
    if (isNaN(Number(millisecond))) {
      return '00:00'
    }
    //todo support more than 1 hour
    let seconds = Math.floor(millisecond / 1000)
    let second = seconds % 60
    let min = Math.floor(seconds / 60)
    return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0')
  }
}
