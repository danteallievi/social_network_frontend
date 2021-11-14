import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";
import ReactDOM from "react-dom";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
