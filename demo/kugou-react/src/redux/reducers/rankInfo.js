import { FETCH_RANK_INFO, RECEIVE_RANK_INFO } from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { imgSize } from '../../constants/ui'
const initialState = {
  rankInfo: {
    info: {
      rankname: '',
      imgurl: ''
    },
    songs: {
      timestamp: Date.now(),
      list: []
    }
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
      let { songs, info } = action.response.data
      Object.assign(info, {
        imgurl: $_xsl__replaceImgUrlSize(info.banner7url, imgSize),
        name: info.rankname
      })
      return {
        status: SUCCESS,
        rankInfo: { songs, info }
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default rankInfoHandler
