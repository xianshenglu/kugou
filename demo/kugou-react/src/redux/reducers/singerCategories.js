import {
  FETCH_SINGER_CATEGORIES,
  RECEIVE_SINGER_CATEGORIES
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
import { singerList } from '../../constants/router'

const initialState = { singerCategories: [] }
const singerCategoriesHandler = (state = initialState, action) => {
  const map = {
    [FETCH_SINGER_CATEGORIES]() {
      return {
        status: PENDING
      }
    },
    [RECEIVE_SINGER_CATEGORIES]() {
      let singerCategories = action.response.data.list
      singerCategories = singerCategories.reduce((re, obj) => {
        obj.path = singerList + obj.classid
        obj.name = obj.classname
        let level1CategoryName = obj.classname.substring(0, 2)
        let findCategories = re.find(o => o.category === level1CategoryName)
        if (findCategories !== undefined) {
          findCategories.data.push(obj)
        } else {
          re.push({
            category: level1CategoryName,
            data: [obj]
          })
        }
        return re
      }, [])

      return {
        status: SUCCESS,
        singerCategories
      }
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default singerCategoriesHandler
