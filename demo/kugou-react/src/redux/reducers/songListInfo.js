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
    list: {
      info: [],
      timestamp: Date.now(),
      total: 30
    }
  }
}
const songListInfoHandler = (state = initialState, action) => {
  const map = {
    [FETCH_SONG_LIST_INFO](id) {
      return {
        status: PENDING,
        id
      }
    },
    [RECEIVE_SONG_LIST_INFO]() {
      let {
        list: songsData,
        info: { list: listInfo }
      } = action.response.data
      Object.assign(listInfo, {
        imgurl: $_xsl__replaceImgUrlSize(listInfo.imgurl, imgSize)
      })
      return {
        status: SUCCESS,
        songsData,
        listInfo
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default songListInfoHandler
