// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import styles from './index.module.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import { microFrontEndMode } from './models/microFrontEndMode.ts'
import { MicroAppContainer } from './components/MicroAppContainer.tsx'
import { WujieContainer } from './components/WujieContainer.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <HashRouter>
    <App />
    <div className={styles.subAppsContainer}>
      <Routes>
        <Route path={microFrontEndMode.MicroApp} element={<MicroAppContainer />} />
        <Route path={microFrontEndMode.Wujie} element={<WujieContainer />} />
      </Routes>
    </div>
  </HashRouter>
  // </StrictMode>
)
