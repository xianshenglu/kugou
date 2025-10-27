import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'
import type { SingerInfoDto, SingerSongsDto } from '@shared/domains/singer/dto'
interface SingerInfoProps {
  songsData: SingerSongsDto;
  listInfo: SingerInfoDto;
}

const SingerInfo: FC<SingerInfoProps> = ({ songsData, listInfo }) => {
  const {
    songsData: { list: songs },
    listInfo: { singername, imgurl, intro }
  } = { songsData, listInfo }

  const infoHeaderProps = {
    name: singername,
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

export default SingerInfo
