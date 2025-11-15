import { useQuery } from '@tanstack/react-query'
import { getSongList } from './songList.repo'
import type { PlaylistSummary } from '@shared/domains/playlist/model'

export const useGetSongListQuery = () => {
  return useQuery<PlaylistSummary[]>({
    queryKey: ['songList'],
    queryFn: getSongList
  })
}
