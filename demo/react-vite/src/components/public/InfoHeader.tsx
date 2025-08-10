import React, { Component, Fragment } from 'react'
import './InfoHeader.less'

interface InfoHeaderProps {
  name: string;
  imgurl: string;
  renderUpdatedTime?(...args: unknown[]): unknown;
}

class InfoHeader extends Component<InfoHeaderProps> {
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
InfoHeader.defaultProps = {
  renderUpdatedTime: () => undefined
}
export default InfoHeader
