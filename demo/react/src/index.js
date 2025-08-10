import '@babel/polyfill'
import 'url-search-params-polyfill'
import React from 'react'
import { createRoot } from "react-dom/client";
import './assets/css/index.less'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './redux/reducers'
import AppContainer from './AppContainer'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
const root = createRoot(document.getElementById("root"));
root.render(
  // <HashRouter basename="/vue/demo/kugou-react/build/">
  <HashRouter basename="/">
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
