import { RECEIVE_SINGER_CATEGORIES } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
import { SUCCESS, PENDING } from '../../constants/status'
export const fetchSingerCategoriesIfNeeded = () => {
  return function(dispatch, getState) {
    let status = getState().singerCategories.status
    if (status !== SUCCESS && status !== PENDING) {
      dispatch(fetchSingerCategories())
    }
  }
}
export const fetchSingerCategories = () => {
  return function(dispatch) {
    axios.get(api.singerCategories).then(res => {
      dispatch(receiveSingerCategories(res))
    })
  }
}
export const receiveSingerCategories = response => ({
  type: RECEIVE_SINGER_CATEGORIES,
  response
})
