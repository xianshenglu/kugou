import {
  FETCH_KEYWORD_SEARCH,
  RECEIVE_KEYWORD_SEARCH
} from '../../constants/actionType'
import { SUCCESS } from '../../constants/status'
import axios from 'axios'
import api from '../../constants/api'

export const fetchKeywordSearch = id => ({
  type: FETCH_KEYWORD_SEARCH,
  id
})
export const fetchKeywordSearchIfNeeded = id => {
  return function(dispatch, getState) {
    let keywordSearch = getState().keywordSearch
    // console.log(id, keywordSearch)
    if (id === keywordSearch.id) {
      return
    }
    dispatch(fetchKeywordSearch(id))
    axios.get(api.keywordSearch + id).then(res => {
      dispatch(receiveKeywordSearch(res, id))
    })
  }
}

export const receiveKeywordSearch = (response, id) => {
  //todo FETCH_KEYWORD_ERROR
  if (response.data.status === 0) {
    return {
      type: RECEIVE_KEYWORD_SEARCH,
      response,
      id
    }
  }
  return {
    type: RECEIVE_KEYWORD_SEARCH,
    response,
    id
  }
}
