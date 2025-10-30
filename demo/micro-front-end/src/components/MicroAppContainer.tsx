import { useEffect, useState } from 'react'
import { getSubAppsConf } from '../models/subApps'
import microApp from '@micro-zoe/micro-app'

export function MicroAppContainer() {
  const subAppsConf = getSubAppsConf()
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    microApp.start({
      // 'router-mode': 'native',
    })
    setIsReady(true)
    return () => {
      microApp.unmountAllApps().then(
        () => {
          console.log('unmountAllApps success')
        },
        () => {
          console.log('unmountAllApps failed')
        }
      )
    }
  }, [])
  return (
    <>
      {isReady &&
        subAppsConf.map(({ name, url }) => {
          return (
            <div className="subAppContainer" key={name}>
              <h4>{name}</h4>
              <micro-app
                className="sub-app"
                name={name}
                url={url}
                iframe
              ></micro-app>
            </div>
          )
        })}
    </>
  )
}
