import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import api from '../../constants/api'
import { PENDING, SUCCESS } from 'src/constants/status'

const fetchKeywordSearch = async (keyword: string) => {
  const response = await axios.get(`${api.keywordSearch}${keyword}`)
  return {
    list: response.data.data.info,
    total: response.data.data.total,
    status: SUCCESS
  }
}

export const useKeywordSearch = ({ keyword = '', enabled = true } = {}) => {
  return useQuery({
    queryKey: ['keywordSearch', keyword],
    queryFn: () => fetchKeywordSearch(keyword),
    enabled: enabled && !!keyword,
    initialData: {
      list: [],
      total: 0,
      status: PENDING
    },
  })
}

export default useKeywordSearch
