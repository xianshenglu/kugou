import React, { Component } from 'react'
import SingerInfo from '../../components/singer/SingerInfo'
import { connect } from 'react-redux'
import { fetchSingerInfo } from '../../redux/actions/singerInfo'

class SingerInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: { params }
    } = this.props
    dispatch(fetchSingerInfo(params.id))
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
