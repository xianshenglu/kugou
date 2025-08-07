import React, { Component } from 'react'
import SingerInfo from '../../components/singer/SingerInfo'
import { connect } from 'react-redux'
import { fetchSingerInfoIfNeeded } from '../../redux/actions/singerInfo'

class SingerInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
    } = this.props
    dispatch(fetchSingerInfoIfNeeded(id))
  }
  render() {
    return <SingerInfo {...this.props} />
  }
}

const mapStateToProps = ({ singerInfo: { songsData, listInfo } }) => ({
  songsData,
  listInfo
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingerInfoContainer)
