import * as types from './actionTypes';
import {userService} from '../../services/data.services';


export const getData = (username, password) => {

    return (dispatch, getState) =>
        new Promise(function(resolve, reject) {
            dispatch(request({ username }));

            userService.getData()
                .then(
                    user => {
                        // dispatch(success(user));
                        // history.push('/');
                        resolve(dispatch(success(user)));
                    },
                    error => {
                        // dispatch(failure(error));
                        reject(dispatch(failure(error)));

                        // dispatch(alertActions.error(error));
                        // console.log(error)
                    }
                );
        });
    function request(user) { return { type: types.GET_ITEM_REQUEST, user } }
    function success(user) { return { type: types.GET_ITEM_SUCCESS, user } }
    function failure(error) { return { type: types.GET_ITEM_FAILURE, error } }
}