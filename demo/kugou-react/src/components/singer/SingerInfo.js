import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import './SingerInfo.less'
import InfoDescription from '../public/InfoDescription'

class SingerInfo extends Component {
  render() {
    const {
      songsData: { list: songs },
      listInfo: { singername, imgurl, intro }
    } = this.props
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
}
SingerInfo.propTypes = {
  songsData: PropTypes.shape({
    page: PropTypes.number,
    pagesize: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  listInfo: PropTypes.object.isRequired
}
export default SingerInfo
