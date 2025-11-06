import type { FC } from 'react'
import SongList from './SongList'
import { useGetSongListQuery } from './useSongList'

const SongListPage: FC = () => {
  const { data: playlistData = [] } = useGetSongListQuery()

  return <SongList songList={playlistData} />
}

export default SongListPage

