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
RankInfo.propTypes = {
  songsData: PropTypes.shape({
    list: PropTypes.array.isRequired,
    timestamp: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    pagesize: PropTypes.number.isRequired
  }).isRequired,
  listInfo: PropTypes.object.isRequired
}
export default RankInfo
