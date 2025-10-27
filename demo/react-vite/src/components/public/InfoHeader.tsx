import type { FC } from 'react'
import { Fragment } from 'react'
import styles from './InfoHeader.module.less'

interface InfoHeaderProps {
  name: string;
  imgurl: string;
  renderUpdatedTime?(...args: unknown[]): unknown;
}

const InfoHeader: FC<InfoHeaderProps> = ({ 
  name, 
  imgurl, 
  renderUpdatedTime = () => undefined 
}) => {
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

export default InfoHeader
