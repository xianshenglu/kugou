import type { FC } from 'react'
import SongList from './SongList'
import { useGetSongListQuery } from './useSongList'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const SongListPage: FC = () => {
  const query = useGetSongListQuery()

  return (
    <QueryBoundary query={query}>
      {(data) => <SongList songList={data} />}
    </QueryBoundary>
  )
}

export default SongListPage
