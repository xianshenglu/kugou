import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './InfoHeader.less'
class InfoHeader extends Component {
  render() {
    const { name, imgurl, renderUpdatedTime } = this.props
    return (
      <Fragment>
        <div
          className="InfoHeader__head"
          style={{ backgroundImage: 'url(' + imgurl + ')' }}
        >
          <h6 className="InfoHeader__title">{name}</h6>
          {renderUpdatedTime()}
        </div>
      </Fragment>
    )
  }
}
InfoHeader.propTypes = {
  name: PropTypes.string.isRequired,
  imgurl: PropTypes.string.isRequired,
  renderUpdatedTime: PropTypes.func
}
InfoHeader.defaultProps = {
  renderUpdatedTime: () => undefined
}
export default InfoHeader
