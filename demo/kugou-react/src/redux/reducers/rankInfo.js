import { FETCH_RANK_INFO, RECEIVE_RANK_INFO } from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { imgSize } from '../../constants/ui'
const initialState = {
  listInfo: {
    rankname: '',
    imgurl: ''
  },
  songsData: {
    timestamp: Date.now(),
    page: 1,
    pagesize: 30,
    list: []
  }
}
const rankInfoHandler = (state = initialState, action) => {
  const map = {
    [FETCH_RANK_INFO](id) {
      return {
        status: PENDING,
        id
      }
    },
    [RECEIVE_RANK_INFO]() {
      let { songs: songsData, info: listInfo } = action.response.data
      Object.assign(listInfo, {
        imgurl: $_xsl__replaceImgUrlSize(listInfo.banner7url, imgSize),
        name: listInfo.rankname
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
export default rankInfoHandler
