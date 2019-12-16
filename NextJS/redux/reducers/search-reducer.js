import * as types from "../actions/action-types";


const initialState = {contents: [], value: ''};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case types.SEARCH: {
            const {value} = action;
            return {...state, value,};
        }
        case types.GET_SEARCH_SUCCESS: {
           const data = action.payload;
           console.log(state)
            return {
                ...state,
                contents: [...data]
           };
        }
        case types.CLEAR_INPUT_VALUE: {
            return {
                ...state,
                value: ''
            };
        }
        default:
            return state;
    }
}

