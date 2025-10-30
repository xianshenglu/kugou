import { getSubAppsConf } from '../models/subApps'
import WujieReact from 'wujie-react'

export function WujieContainer() {
  const subAppsConf = getSubAppsConf()
  return (
    <>
      {subAppsConf.map(({ name, url }) => {
        return (
          <div className="subAppContainer" key={name}>
            <h4>{name}</h4>
            <WujieReact
             // @ts-expect-error waiting for third party types
              name={name}
              url={url}
              sync={true}
              fetch={fetch}
            ></WujieReact>
          </div>
        )
      })}
    </>
  )
}
