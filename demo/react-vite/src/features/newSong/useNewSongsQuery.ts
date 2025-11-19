import { useQuery } from '@tanstack/react-query'
import { getNewSongs } from './newSongs.repo'
import type { NewSongsData } from './newSongs.repo'

export const useNewSongsQuery = () => {
  return useQuery<NewSongsData>({
    queryKey: ['newSongs'],
    queryFn: getNewSongs
  })
}

