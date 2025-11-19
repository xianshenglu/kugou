import { useMemo, type FC } from 'react'
import SongListInfo from './SongListInfo'
import { useGetSongListInfoQuery } from './useSongListInfo'
import { useParams } from 'react-router-dom'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const SongListInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const query = useGetSongListInfoQuery(id!)
  const songsData = useMemo(() => ({ list: query.data?.songs.list.info! }), [query.data])

  return (
    <QueryBoundary query={query}>
      {(data) => {
        return <SongListInfo songsData={songsData} listInfo={data.info.list} />
      }}
    </QueryBoundary>
  )
}

export default SongListInfoPage
