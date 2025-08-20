import React, { Component, Fragment } from 'react'
import styles from './InfoHeader.module.less'

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
          className={styles.InfoHeader__head}
          style={{ backgroundImage: 'url(' + imgurl + ')' }}
        >
          <h6 className={styles.InfoHeader__title}>{name}</h6>
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
