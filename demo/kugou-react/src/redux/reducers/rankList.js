import { FETCH_RANK_LIST, RECEIVE_RANK_LIST } from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { rankListInfo } from '../../constants/router'

const initialState = { rankList: [] }
const rankListHandler = (state = initialState, action) => {
  const map = {
    [FETCH_RANK_LIST]() {
      return {
        status: PENDING
      }
    },
    [RECEIVE_RANK_LIST]() {
      let rankList = action.response.data.rank.list
      rankList.forEach(obj => {
        obj.imgurl = $_xsl__replaceImgUrlSize(obj.imgurl)
        obj.path = rankListInfo + obj.rankid
        obj.name = obj.rankname
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
