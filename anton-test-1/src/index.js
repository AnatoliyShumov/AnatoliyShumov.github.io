import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import WithAuth from './components/hoc/withAuth';
import createAppStore from "./components/redux/store/configureStore";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './components/routers/routes'

const { persistor, store } = createAppStore()

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    {/*<WithAuth>*/}
                    <Routes store={store} />
                    <App />
                    {/*<Routes store={store} />*/}
                    {/*</WithAuth>*/}
                </BrowserRouter>
            </PersistGate>
        </Provider>,
        document.getElementById('root'),
    );
};

renderApp();
