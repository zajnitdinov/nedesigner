import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import App from "./components/App";
import "./scss/index.scss";
import reducer from './reducers'

const rootElement = document.getElementById("root");
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement);
