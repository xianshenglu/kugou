import * as actionType from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'

const initialState = { songs: [], sliderData: [] }
const newSongHandler = (state = initialState, action) => {
  const map = {
    [actionType.FETCH_NEW_SONG]() {
      return {
        status: PENDING
      }
    },
    [actionType.RECEIVE_NEW_SONG]() {
      const data = action.response.data
      return {
        status: SUCCESS,
        songs: data.data,
        sliderData: data.banner
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default newSongHandler
