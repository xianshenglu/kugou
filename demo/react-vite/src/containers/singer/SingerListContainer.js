import React, { Component } from 'react'
import SingerList from '../../components/singer/SingerList'
import { connect } from 'react-redux'
import { fetchSingerListIfNeeded } from '../../redux/actions/singerList'

class SingerListContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
    } = this.props
    dispatch(fetchSingerListIfNeeded(id))
  }
  render() {
    return <SingerList {...this.props} />
  }
}

const mapStateToProps = ({ singerList: { singersData, listInfo } }) => ({
  singersData,
  listInfo
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingerListContainer)
