import axios from 'axios'
import { isObject } from '../utils'
const requestErrorHandler = error => {
  const isMsgValid =
    isObject(error) &&
    typeof error.message === 'string' &&
    error.message.trim() !== ''
  if (isMsgValid) {
    alert(error.message)
  } else {
    alert('System error, please contact administrator!')
  }
  return Promise.reject(error)
}

const http = axios.create({})

http.interceptors.response.use(response => {
  const { data } = response
  // todo add other error scenarios
  if (data.status === 0) {
    return requestErrorHandler(data)
  }
  return response
}, requestErrorHandler)

export default http
