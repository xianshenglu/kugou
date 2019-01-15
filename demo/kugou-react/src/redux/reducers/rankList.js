import * as actionType from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'

const initialState = { rankList: [] }
const rankListHandler = (state = initialState, action) => {
  const map = {
    [actionType.FETCH_RANK_LIST]() {
      return {
        status: PENDING
      }
    },
    [actionType.RECEIVE_RANK_LIST]() {
      let rankList = action.response.data.rank.list
      rankList.forEach(obj => {
        obj.imgurl = $_xsl__replaceImgUrlSize(obj.imgurl)
        obj.path = '/rank/info/' + obj.rankid
        obj.title = obj.rankname
      })
      return {
        status: SUCCESS,
        rankList
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default rankListHandler
