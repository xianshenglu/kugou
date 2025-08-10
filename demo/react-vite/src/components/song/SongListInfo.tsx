import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'

class SongListInfo extends Component {
  render() {
    const {
      songsData: { list: songs },
      listInfo: { specialname, imgurl, intro }
    } = this.props
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
}
SongListInfo.propTypes = {
  songsData: PropTypes.shape({
    // page pagesize total was prepared for load more
    page: PropTypes.number.isRequired,
    pagesize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired
  }).isRequired,
  listInfo: PropTypes.object.isRequired
}
export default SongListInfo
