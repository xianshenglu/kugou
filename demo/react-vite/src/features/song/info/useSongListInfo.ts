import { useQuery } from '@tanstack/react-query'
import { getSongListInfo } from './songListInfo.repo'
import type { PlaylistInfoData } from '@shared/domains/playlist/model'

export const useGetSongListInfoQuery = (id: string) => {
  return useQuery<PlaylistInfoData>({
    queryKey: ['songListInfo', id],
    queryFn: () => getSongListInfo(id)
  })
}
