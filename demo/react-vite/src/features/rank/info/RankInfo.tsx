import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../../../shared/components/InfoHeader'
import AppMusicList from '../../../shared/components/AppMusicList'
import { formatDate } from '../../../shared/helpers/utils'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './RankInfo.module.less'
import classNames from 'classnames'
import type { RankInfoSongs, RankItem } from '@shared/domains/rank/model'
interface RankInfoProps {
  songsData: RankInfoSongs;
  listInfo: RankItem;
}

const RankInfo: FC<RankInfoProps> = ({ songsData, listInfo }) => {
  const renderUpdatedTime = (updatedTime: string) => {
    return () => (
      <time className={styles.RankInfo__updatedTime}>
        {'Last updated: ' + updatedTime}
      </time>
    )
  }

  const renderMusicSequence = (index: number) => {
    const sequence = index + 1
    return (
      <div
        className={
            
          classNames(styles.RankInfo__musicSequence, styles['RankInfo__musicSequence--' + sequence])
        }
      >
        {sequence}
      </div>
    )
  }

  const { rankname, imgUrl: imgurl } = listInfo
  
  const infoHeaderProps = {
    name: rankname,
    imgurl,
    renderUpdatedTime: renderUpdatedTime(
      formatDate(songsData.timestamp * 1000)
    )
  }

  return (
    <Fragment>
      <InfoHeader {...infoHeaderProps} />
      <AppMusicList
        data={songsData.list}
        renderMusicSequence={renderMusicSequence}
        test-id="page-rank-info"
      />
    </Fragment>
  )
}

export default RankInfo
