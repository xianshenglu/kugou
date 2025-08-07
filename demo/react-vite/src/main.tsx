import { StrictMode } from "react";
import "./index.css";
// todo
// import "@babel/polyfill";
import { createRoot } from "react-dom/client";
import "./assets/css/index.less";
// import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./redux/reducers";
import AppContainer from "./AppContainer";
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware as any, logger)
);
const root = createRoot(document.getElementById("root")!);
root.render(
  // <HashRouter basename="/vue/demo/kugou-react/build/">
  <StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  </StrictMode>
);

// serviceWorker.unregister();
