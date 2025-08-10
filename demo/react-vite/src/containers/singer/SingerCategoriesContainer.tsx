import React, { Component } from 'react'
import SingerCategories from '../../components/singer/SingerCategories'
import { connect } from 'react-redux'
import { fetchSingerCategoriesIfNeeded } from '../../redux/actions/singerCategories'

class SingerCategoriesContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSingerCategoriesIfNeeded())
  }
  render() {
    return <SingerCategories {...this.props} />
  }
}

const mapStateToProps = ({ singerCategories }) => singerCategories
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingerCategoriesContainer)
