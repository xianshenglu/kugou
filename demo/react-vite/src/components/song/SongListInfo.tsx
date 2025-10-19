import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'
import type { PlaylistDetailSummary, PlaylistSong } from '@shared/domains/playlist/model'
interface SongListInfoProps {
  songsData: {
    // page pagesize total was prepared for load more
    page: number;
    pagesize: number;
    total: number;
    list: PlaylistSong[];
  };
  listInfo: PlaylistDetailSummary;
}

const SongListInfo: FC<SongListInfoProps> = ({ songsData, listInfo }) => {
  const {
    songsData: { list: songs },
    listInfo: { specialname, imgurl, intro }
  } = { songsData, listInfo }

  const infoHeaderProps = {
    name: specialname,
    imgurl
  }

  return (
    <Fragment>
      <InfoHeader {...infoHeaderProps} />
      <InfoDescription description={intro} />
      <AppMusicList data={songs} />
    </Fragment>
  )
}

export default SongListInfo
