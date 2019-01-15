import * as actionType from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { songListInfo } from '../../constants/router'

const initialState = { songList: [] }
const songListHandler = (state = initialState, action) => {
  const map = {
    [actionType.FETCH_SONG_LIST]() {
      return {
        status: PENDING
      }
    },
    [actionType.RECEIVE_SONG_LIST]() {
      let songList = action.response.data.plist.list.info
      songList.forEach(obj => {
        obj.imgurl = $_xsl__replaceImgUrlSize(obj.imgurl)
        obj.path = songListInfo + obj.specialid
        obj.title = obj.specialname
        obj.popularity = obj.playcount
      })
      return {
        status: SUCCESS,
        songList
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default songListHandler
