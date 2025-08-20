import React, { Component, Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import { formatDate } from '../../assets/js/utils'
import styles from './RankInfo.module.less'
import classNames from 'classnames'

interface RankInfoProps {
  songsData: {
    list: unknown[];
    timestamp: number;
    page: number;
    pagesize: number;
  };
  listInfo: object;
}

class RankInfo extends Component<RankInfoProps> {
  renderUpdatedTime(updatedTime) {
    return () => (
      <time className={styles.RankInfo__updatedTime}>
        {'上次更新时间: ' + updatedTime}
      </time>
    )
  }
  renderMusicSequence(index) {
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
  render() {
    const {
      songsData,
      listInfo: { rankname, imgurl }
    } = this.props
    // console.log(this.props)
    const infoHeaderProps = {
      name: rankname,
      imgurl,
      renderUpdatedTime: this.renderUpdatedTime(
        formatDate(songsData.timestamp * 1000)
      )
    }
    return (
      <Fragment>
        <InfoHeader {...infoHeaderProps} />
        <AppMusicList
          data={songsData.list}
          renderMusicSequence={this.renderMusicSequence}
        />
      </Fragment>
    )
  }
}
export default RankInfo
