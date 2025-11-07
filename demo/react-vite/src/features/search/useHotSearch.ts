import { useQuery } from '@tanstack/react-query'
import { getHotSearch } from './search.repo'
import { PENDING, SUCCESS } from 'src/shared/constants/status'

export const useHotSearch = ({enabled = true}={} ) => {
  return useQuery({
    queryKey: ['hotSearch'],
    queryFn: async () => {
      const list = await getHotSearch()
      return {
        list,
        status: SUCCESS
      }
    },
    enabled,
    initialData: {
      list: [],
      status: PENDING
    }
  })
}
