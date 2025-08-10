import React, { Component, Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'

interface SongListInfoProps {
  songsData: {
    // page pagesize total was prepared for load more
    page: number;
    pagesize: number;
    total: number;
    list: unknown[];
  };
  listInfo: object;
}

class SongListInfo extends Component<SongListInfoProps> {
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
export default SongListInfo
