import {combineReducers} from 'redux';
import search from './search-reducer'
import showFilm from './film-reducer'

const rootReducer = combineReducers({
    search,
    showFilm
});

export default rootReducer;