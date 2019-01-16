import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import './RankInfo.less'
import { formatDate } from '../../assets/js/utils'

class RankInfo extends Component {
  renderUpdatedTime(updatedTime) {
    return () => (
      <time className="RankInfo__updatedTime">
        {'上次更新时间: ' + updatedTime}
      </time>
    )
  }
  renderMusicSequence(index) {
    const sequence = index + 1
    return (
      <div
        className={
          'RankInfo__musicSequence RankInfo__musicSequence--' + sequence
        }
      >
        {sequence}
      </div>
    )
  }
  render() {
    const {
      rankInfo: {
        songs,
        info: { rankname, imgurl }
      }
    } = this.props
    const infoHeaderProps = {
      name: rankname,
      imgurl,
      renderUpdatedTime: this.renderUpdatedTime(
        formatDate(songs.timestamp * 1000)
      )
    }
    return (
      <Fragment>
        <InfoHeader {...infoHeaderProps} />
        <AppMusicList
          data={songs.list}
          renderMusicSequence={this.renderMusicSequence}
        />
      </Fragment>
    )
  }
}
RankInfo.propTypes = {
  rankInfo: PropTypes.shape({
    songs: PropTypes.shape({
      list: PropTypes.array.isRequired,
      timestamp: PropTypes.number.isRequired
    }).isRequired,
    info: PropTypes.shape({
      rankname: PropTypes.string.isRequired,
      imgurl: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
export default RankInfo
