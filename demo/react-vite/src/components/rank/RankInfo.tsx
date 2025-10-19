import type { FC } from 'react'
import { Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import { formatDate } from '../../assets/js/utils'
import styles from './RankInfo.module.less'
import classNames from 'classnames'
import type { RankInfoSongsDto, RankItemDto } from '@shared/domains/rank/dto'
interface RankInfoProps {
  songsData: RankInfoSongsDto;
  listInfo: RankItemDto;
}

const RankInfo: FC<RankInfoProps> = ({ songsData, listInfo }) => {
  const renderUpdatedTime = (updatedTime: string) => {
    return () => (
      <time className={styles.RankInfo__updatedTime}>
        {'上次更新时间: ' + updatedTime}
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

  const { rankname, imgurl } = listInfo
  
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
      />
    </Fragment>
  )
}

export default RankInfo
