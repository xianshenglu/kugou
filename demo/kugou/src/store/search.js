import axios from 'axios'
import api from '../assets/js/api'
const search = {
  namespaced: true,
  state: {
    searchRecArr: [],
    searchRes: {
      info: []
    },
    keyword: undefined
  }
}
export default search
