import {
  FETCH_SONG_LIST_INFO,
  RECEIVE_SONG_LIST_INFO
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { imgSize } from '../../constants/ui'
const initialState = {
  listInfo: {
    specialname: '',
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
const songListInfoHandler = (state = initialState, action) => {
  const map = {
    [FETCH_SONG_LIST_INFO]() {
      return Object.assign({}, initialState, {
        status: PENDING,
        id: action.id
      })
    },
    [RECEIVE_SONG_LIST_INFO]() {
      let {
        list: {
          list: songsData,
          list: { info: songs },
          page,
          pagesize
        },
        info: { list: listInfo }
      } = action.response.data
      Object.assign(songsData, { list: songs, page, pagesize })
      delete songsData.info
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
export default songListInfoHandler
