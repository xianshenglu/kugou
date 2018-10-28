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
    singerListInfo: {
      info: {},
      data: []
    }
  }
}
export default singer
