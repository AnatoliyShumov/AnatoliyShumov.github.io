import axios from 'axios';
import * as types from './action-types';
import history from '../../components/history/history'
// import Router from 'next/router';
import { useRouter } from 'next/router'

export const  search = value => {
    return {type: types.SEARCH, value};
}
export const  searchSuccess = data => {
    return {type: types.GET_SEARCH_SUCCESS, payload:data};
}

export const clearInputValue = () => {
    return {type: types.CLEAR_INPUT_VALUE}
}

export const  ShowFilm = data => {
    return {type: types.SHOW_FILM, payload:data};
}

export const  withShowFilm = id => {
    return (dispatch) => {
        const queryToUrl = id;
        const url = `http://api.tvmaze.com/shows/${queryToUrl}`;

        axios.get(url)
            .then(({data}) => {
                if(data) {
                    dispatch(ShowFilm(data))
                    // const router = useRouter()
                    // router.push({pathname: `/filmDeskription`, query: {id}})
                    // Router.push({pathname: `/film`, query: {id}})
                    // console.log(history)
                }
            })
            .catch(err => {

            });
    }
}

export const withSearch = (query) => {
    return (dispatch) => {
        const queryToUrl = query;
        const url = `http://api.tvmaze.com/search/shows?q=${queryToUrl}`;

        axios.get(url)
            .then(({data}) => {
                if(data) {
                    dispatch(searchSuccess(data))
                    router.push({pathname: `/film`, query: {id}})
                    console.log(history)
                }
            })
            .catch(err => {

            });
    }
};