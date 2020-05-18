import React from "react";
import ReactDOM from "react-dom";
//Let's import Redux First.
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { promiseMiddleware } from "redux-promise";

import App from "./components/App/App";
import reducers from "./reducers";

import "./index.css";

const middleWaredStore = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(<App />, document.getElementById("root"));
