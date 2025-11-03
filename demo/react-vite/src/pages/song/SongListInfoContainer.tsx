import { useMemo, type FC } from 'react'
import SongListInfo from './SongListInfo'
import { useGetSongListInfoQuery } from './songListInfoApi'
import { useParams } from 'react-router-dom'
import { Loading } from 'src/components/Loading'

const SongListInfoContainer: FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, error } = useGetSongListInfoQuery(id!)
  const songsData = useMemo(() => ({ list: data?.songs.list.info! }), [data])

  if (isLoading) return <Loading/>
  if (error) return <div>Error loading playlist info</div>
  if (!data) return null

  return <SongListInfo songsData={songsData} listInfo={data.info.list} />
}

export default SongListInfoContainer
