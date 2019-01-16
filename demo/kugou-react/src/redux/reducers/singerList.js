import {
  FETCH_SINGER_LIST,
  RECEIVE_SINGER_LIST
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { $_xsl__replaceImgUrlSize } from '../../assets/js/utils'
import { singerList } from '../../constants/router'

const initialState = {
  singersData: { list: [], page: 1, pagesize: 30, total: 300 },
  listInfo: { classid: 0, classname: '' }
}
const singerListHandler = (state = initialState, action) => {
  const map = {
    [FETCH_SINGER_LIST]() {
      return {
        status: PENDING
      }
    },
    [RECEIVE_SINGER_LIST]() {
      console.log(action.response.data)
      let {
        singers: {
          list: singersData,
          list: { info: singers },
          page,
          pagesize
        },
        classid,
        classname
      } = action.response.data
      Object.assign(singersData, { list: singers, page, pagesize })
      delete singersData.info
      const listInfo = { classid, classname }
      singersData.list.forEach(obj => {
        obj.imgurl = $_xsl__replaceImgUrlSize(obj.imgurl)
        obj.id = obj.singerid
        obj.path = singerList + obj.singerid
        obj.name = obj.singername
      })
      return {
        status: SUCCESS,
        singersData,
        listInfo
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default singerListHandler
