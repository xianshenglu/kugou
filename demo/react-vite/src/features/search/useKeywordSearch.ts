import { useQuery } from '@tanstack/react-query'
import { getKeywordSearch } from './search.repo'
import { PENDING, SUCCESS } from 'src/shared/constants/status'

export const useKeywordSearch = ({ keyword = '', enabled = true } = {}) => {
  return useQuery({
    queryKey: ['keywordSearch', keyword],
    queryFn: async () => {
      const data = await getKeywordSearch(keyword)
      return {
        ...data,
        status: SUCCESS
      }
    },
    enabled: enabled && !!keyword,
    initialData: {
      list: [],
      total: 0,
      status: PENDING
    },
  })
}

export default useKeywordSearch
