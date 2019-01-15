import { FETCH_NEW_SONGS, RECEIVE_NEW_SONGS } from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'

const initialState = { songs: [], sliderData: [] }
const newSongsHandler = (state = initialState, action) => {
  const map = {
    [FETCH_NEW_SONGS]() {
      return {
        status: PENDING
      }
    },
    [RECEIVE_NEW_SONGS]() {
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
export default newSongsHandler
