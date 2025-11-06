import { useMemo, type FC } from 'react'
import SongListInfo from './SongListInfo'
import { useGetSongListInfoQuery } from './useSongListInfo'
import { useParams } from 'react-router-dom'
import { Loading } from 'src/shared/components/Loading'

const SongListInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, error } = useGetSongListInfoQuery(id!)
  const songsData = useMemo(() => ({ list: data?.songs.list.info! }), [data])

  if (isLoading) return <Loading/>
  if (error) return <div>Error loading playlist info</div>
  if (!data) return null

  return <SongListInfo songsData={songsData} listInfo={data.info.list} />
}

export default SongListInfoPage

