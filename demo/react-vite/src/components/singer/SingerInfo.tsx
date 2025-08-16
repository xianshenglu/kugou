import React, { Component, Fragment } from 'react'
import InfoHeader from '../public/InfoHeader'
import AppMusicList from '../public/AppMusicList'
import InfoDescription from '../public/InfoDescription'

interface SingerInfoProps {
  songsData: {
    page?: number;
    pagesize: number;
    list: unknown[];
    total: number;
  };
  listInfo: object;
}

class SingerInfo extends Component<SingerInfoProps> {
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
export default SingerInfo
