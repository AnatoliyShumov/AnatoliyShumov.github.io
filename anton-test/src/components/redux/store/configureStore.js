import rootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
// import storage from 'redux-persist/es/storage'

// const loggerMiddleware = createLogger()//if nedd add to middleware;

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = composeEnhancers(
    applyMiddleware(...middleware),
)(createStore);

// const config = {
//   key: 'root',
//   storage,
//   blacklist: ['productItemList']
// };

// const combinedReducer = persistReducer(config, rootReducer);

const createAppStore = () => {
    let store = configureStore(rootReducer);
    let persistor = persistStore(store);

    return { persistor, store }
};

export default createAppStore