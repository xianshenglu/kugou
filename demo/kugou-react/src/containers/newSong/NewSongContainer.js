import React, { Component } from 'react'
import NewSong from '../../components/new_song/NewSong'
import { connect } from 'react-redux'
import { fetchNewSongIfNeeded } from '../../redux/actions/newSong'
import { FETCH_NEW_SONG_IF_NEEDED } from '../../constants/actionType'

class NewSongContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNewSongIfNeeded(FETCH_NEW_SONG_IF_NEEDED))
  }
  render() {
    return <NewSong {...this.props} />
  }
}

const mapStateToProps = ({ newSong: { songs, sliderData } }, ownProps) => {
  return { songs, sliderData }
}
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSongContainer)
