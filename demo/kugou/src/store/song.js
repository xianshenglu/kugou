import axios from 'axios'
import api from '../assets/js/api'
const song = {
  namespaced: true,
  state: {
    songList: [],
    songListInfo: {
      info: {
        list: {}
      },
      songs: {
        list: {
          info: []
        }
      }
    }
  }
}
export default song
