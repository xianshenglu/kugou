import React, { Component } from 'react'
import NewSong from '../../components/new_song/NewSong'
import { connect } from 'react-redux'
import { fetchNewSongIfNeeded } from '../../redux/actions/newSong'
import { FETCH_NEW_SONG_IF_NEEDED } from '../../constants/actionType'

const mapStateToProps = ({ newSong }, ownProps) => {
  const { songs, sliderData } = newSong
  return { songs, sliderData }
}
const mapDispatchToProps = null
class NewSongContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNewSongIfNeeded(FETCH_NEW_SONG_IF_NEEDED))
  }
  render() {
    return <NewSong {...this.props} />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSongContainer)
