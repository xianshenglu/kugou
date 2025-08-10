import { StrictMode } from 'react'
// todo
// import "@babel/polyfill";
import { createRoot } from 'react-dom/client'
import './assets/css/index.less'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import AppContainer from './AppContainer'
import '@shared/mock/index'

const root = createRoot(document.getElementById('root')!)
root.render(
  // <HashRouter basename="/vue/demo/kugou-react/build/">
  <StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  </StrictMode>
)

serviceWorker.unregister()
