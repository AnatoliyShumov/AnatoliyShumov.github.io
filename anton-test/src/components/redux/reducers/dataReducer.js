import * as types from "../actions/actionTypes";


import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const initialState = {
    items: [],
};
const productItemList =  (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ITEM_SUCCESS :
            return {
                ...state,
                items: action.user.data.map(item => {
                        return {
                            ...item,
                            comments: `https://news.ycombinator.com/item?id=${item.id}`
                        }
                })
            };
        default:
            return state;
    }
};

const productItemPersistConfig = {
    key: 'productItem',
    storage: storage,
    blacklist: ['isLoggingIn']
};

export default  persistReducer(productItemPersistConfig, productItemList);