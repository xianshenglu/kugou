import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'
import type { SingerInfoData } from '@shared/domains/singer/model'

const SingerInfo: FC<SingerInfoData> = ({ info, data }) => {
  const { name, imgUrl, intro } = info

  const infoHeaderProps = {
    name,
    imgurl: imgUrl
  }

  return (
    <Fragment>
      <InfoHeader {...infoHeaderProps} />
      <InfoDescription description={intro} />
      <AppMusicList data={data} />
    </Fragment>
  )
}

export default SingerInfo
