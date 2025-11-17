import type { FC } from 'react'
import SongList from './SongList'
import { useGetSongListQuery } from './useSongList'
import { Loading } from 'src/shared/components/Loading'

const SongListPage: FC = () => {
  const { data, error, isLoading } = useGetSongListQuery()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading song list</div>
  if (!data) return null

  return <SongList songList={data} />
}

export default SongListPage

