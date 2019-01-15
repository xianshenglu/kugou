import React, { Component } from 'react'
import SongList from '../../components/song/SongList'
import { connect } from 'react-redux'
import { fetchSongListIfNeeded } from '../../redux/actions/songList'
import { FETCH_SONG_LIST_IF_NEEDED } from '../../constants/actionType'

class SongListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSongListIfNeeded(FETCH_SONG_LIST_IF_NEEDED))
  }
  render() {
    return <SongList {...this.props} />
  }
}

const mapStateToProps = ({ songList }) => songList
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListContainer)
