import React from 'react'
import './AppContent.less'
import AppNav from './AppNav'
import AppHeader from './AppHeader'
function AppContent({ hasNav, children }) {
  let className = hasNav ? 'AppContent AppContent--hasNav' : 'AppContent'
  return (
    <React.Fragment>
      <AppHeader />
      {hasNav ? <AppNav /> : undefined}
      <main className={className}>{children}</main>
    </React.Fragment>
  )
}
export default AppContent
