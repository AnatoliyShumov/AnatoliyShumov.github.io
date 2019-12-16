import * as types from "../actions/action-types";


export default function reducer(state = [], action) {
    switch(action.type) {
        case types.SHOW_FILM: {
            const {payload} = action;
            return {...state, ...payload};
        }
        default:
            return state;
    }
}

