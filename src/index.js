import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers/index";
const store = createStore(
  reducers, //son todos los reducers
  {}, //es el estado incial
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
