import axios from 'axios'
import api from '../assets/js/api'
const singer = {
  namespaced: true,
  state: {
    singerCategories: [],
    singerInfo: {
      info: {},
      data: []
    },
    singerList: {
      info: {},
      data: []
    }
  }
}
export default singer
