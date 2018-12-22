import axios from 'axios'
import api from '../assets/js/api'
const rank = {
  namespaced: true,
  state: {
    rankList: [],
    rankInfo: {
      info: {},
      songs: {
        timestamp: Date.now(),
        list: []
      }
    }
  }
}
export default rank
