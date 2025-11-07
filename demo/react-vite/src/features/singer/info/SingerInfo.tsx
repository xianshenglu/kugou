import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../../../shared/components/InfoHeader'
import AppMusicList from '../../../shared/components/AppMusicList'
import InfoDescription from '../../../shared/components/InfoDescription'
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
      <AppMusicList data={data} test-id="page-singer-info" />
    </Fragment>
  )
}

export default SingerInfo

