import API from '../../API';
import { addWatchlistAction, deleteWatchlistAction, fetchWatchlistAction } from './action';

const api = new API();
const WATCHLIST_KEY = 'WATCHLIST_KEY';

export const fetchFromLocalStorage = () => {
    return async dispatch => {
        let watchlistJSON = localStorage.getItem(WATCHLIST_KEY);
        let watchlist = [];
        if (watchlistJSON) {
            watchlist = JSON.parse(watchlistJSON);
        }
        dispatch(fetchWatchlistAction(watchlist));
    };
};

export const addWatchlist = image => {
    return async (dispatch, getState) => {
        let prevWatchlist = getState().watchlists.list;
        const nextWatchlist = [image, ...prevWatchlist];
        setToLocalStorage(nextWatchlist);
        dispatch(addWatchlistAction(nextWatchlist));
    };
};

export const deleteWatchlist = id => {
    return async (dispatch, getState) => {
        let prevWatchlist = getState().watchlists.list;
        const nextWatchlist = prevWatchlist.filter(image => image.id != id);
        setToLocalStorage(nextWatchlist);
        dispatch(deleteWatchlistAction(nextWatchlist));
    };
};

const setToLocalStorage = watchlists => {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlists));
};
