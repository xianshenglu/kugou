import React, { Component } from 'react'
import SongListInfo from '../../components/song/SongListInfo'
import { connect } from 'react-redux'
import { fetchSongListInfoIfNeeded } from '../../redux/actions/songListInfo'

class SongListInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongListInfoContainer)
