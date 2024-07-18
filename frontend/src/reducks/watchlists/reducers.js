import * as Actions from './action';
import initialState from '../store/initialState';

export const WatchlistReducer = (state = initialState.watchlists, action) => {
    switch (action.type) {
        case Actions.ADD_WATCHLIST:
            return {
                ...state,
                list: action.payload
            };
        case Actions.FETCH_WATCHLIST:
            return {
                ...state,
                list: action.payload
            };
        case Actions.DELETE_WATCHLIST:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
