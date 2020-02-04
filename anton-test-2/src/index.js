import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Routes from "./components/routers/routes";
import configureStore from "./components/redux/store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes store={store} />
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
