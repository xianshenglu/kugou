import React, { Component } from 'react'
import SingerInfo from '../../components/singer/SingerInfo'
import { connect } from 'react-redux'
import { fetchSingerInfoIfNeeded } from '../../redux/actions/singerInfo'
import { useParams } from 'react-router-dom'

class SingerInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      params: { id }
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

function SingerInfoContainerWrapper(props) {
  const params = useParams()
  return <SingerInfoContainer {...props} params={params} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingerInfoContainerWrapper)
