import React, { Component } from 'react'
import SingerList from '../../components/singer/SingerList'
import { connect } from 'react-redux'
import { fetchSingerListIfNeeded } from '../../redux/actions/singerList'
import { useParams } from 'react-router-dom'

class SingerListContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      params: { id }
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
function SingerListContainerWrapper(props) {
  const params = useParams()
  return <SingerListContainer {...props} params={params} />
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingerListContainerWrapper)
