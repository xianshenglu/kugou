import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import api from '../../constants/api'
import type { HotSearchResponseDto } from '@shared/domains/search/dto'
import { PENDING, SUCCESS } from 'src/constants/status'

const fetchHotSearch = async () => {
  const response = await axios.get<HotSearchResponseDto>(api.hotSearch)
  return {
    list: response.data.data.info,
    status: SUCCESS
  }
}

export const useHotSearch = ({enabled = true}={} ) => {
  return useQuery({
    queryKey: ['hotSearch'],
    queryFn: fetchHotSearch,
    enabled,
    initialData: {
      list: [],
      status: PENDING
    }
  })
}
