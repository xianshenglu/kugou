import axios from 'axios'
const http = axios.create({})
http.interceptors.response.use(response => response, function(error) {
  const isMsgValid =
    typeof error === 'object' && error !== null && String(error.message) !== ''
  if (isMsgValid) {
    alert(error.message)
  } else {
    alert('System error, please contact administrator!')
  }
  return Promise.reject(error)
})
export default http
