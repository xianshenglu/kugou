import type { FC } from 'react'
import SongList from '../../components/song/SongList'
import { useGetSongListQuery } from './songListApi'

const SongListContainer: FC = () => {
  const { data: playlistData = [] } = useGetSongListQuery()

  return <SongList songList={playlistData} />
}

export default SongListContainer
