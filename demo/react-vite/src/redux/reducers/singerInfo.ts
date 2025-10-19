import {
  FETCH_SINGER_INFO,
  RECEIVE_SINGER_INFO
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { imgSize } from '../../constants/ui'
const initialState = {
  listInfo: {
    singername: '',
    imgurl: '',
    intro: ''
  },
  songsData: {
    page: 1,
    pagesize: 30,
    total: 30,
    list: []
  }
}
const singerInfoHandler = (state = initialState, action) => {
  const map = {
    [FETCH_SINGER_INFO]() {
      return Object.assign({}, initialState, {
        status: PENDING,
        id: action.id
      })
    },
    [RECEIVE_SINGER_INFO]() {
      const { songs: songsData, info: listInfo } = action.response.data
      Object.assign(listInfo, {
        imgurl: $_xsl__replaceImgUrlSize(listInfo.imgurl, imgSize)
      })
      return {
        status: SUCCESS,
        id: action.id,
        songsData,
        listInfo
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default singerInfoHandler
