import React, { Component } from 'react'
import NewSongs from '../../components/newSong/NewSongs'
import { connect } from 'react-redux'
import { fetchNewSongsIfNeeded } from '../../redux/actions/newSongs'
import { FETCH_NEW_SONGS_IF_NEEDED } from '../../constants/actionType'

class NewSongsContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchNewSongsIfNeeded(FETCH_NEW_SONGS_IF_NEEDED))
  }
  render() {
    return <NewSongs {...this.props} />
  }
}

const mapStateToProps = ({ newSongs: { songs, sliderData } }) => ({
  songs,
  sliderData
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSongsContainer)
