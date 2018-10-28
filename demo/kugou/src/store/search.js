import axios from 'axios'
import api from '../assets/js/api'
const search = {
  namespaced: true,
  state: {
    searchRecArr: [],
    searchRes: {}
  }
}
export default search
