import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import './SongListInfo.less'
import InfoDescription from '../public/InfoDescription'

class SongListInfo extends Component {
  render() {
    console.log(this.props)
    const {
      songsData: {
        list: { info: songs }
      },
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
    page: PropTypes.number.isRequired,
    pagesize: PropTypes.number.isRequired,
    list: PropTypes.shape({
      info: PropTypes.array.isRequired,
      timestamp: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  listInfo: PropTypes.object.isRequired
}
export default SongListInfo
