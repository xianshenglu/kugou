import React, { Component } from 'react'
import SongListInfo from '../../components/song/SongListInfo'
import { connect } from 'react-redux'
import { fetchSongListInfoIfNeeded } from '../../redux/actions/songListInfo'
import { useParams } from 'react-router-dom'

class SongListInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      params: { id }
    } = this.props
    dispatch(fetchSongListInfoIfNeeded(id))
  }
  render() {
    return <SongListInfo {...this.props} />
  }
}

const mapStateToProps = ({ songListInfo: { songsData, listInfo } }) => ({
  songsData,
  listInfo
})
const mapDispatchToProps = null

function SongListInfoContainerWrapper(props) {
  const params = useParams()
  return <SongListInfoContainer {...props} params={params} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListInfoContainerWrapper)
