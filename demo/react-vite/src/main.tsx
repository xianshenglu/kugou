import { StrictMode } from 'react'
// todo
// import "@babel/polyfill";
import { createRoot } from 'react-dom/client'
import './shared/css/index.less'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'
import store from './shared/redux/store'
import App from './App'

const root = createRoot(document.getElementById('root')!)
root.render(
  // <HashRouter basename="/vue/demo/kugou-react/build/">
  <StrictMode>
    <HashRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </HashRouter>
  </StrictMode>
)

serviceWorker.unregister()
