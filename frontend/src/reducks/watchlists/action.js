export const ADD_WATCHLIST = 'ADD_WATCHLIST';
export const addWatchlistAction = watchlist => {
    return {
        type: 'ADD_WATCHLIST',
        payload: watchlist
    };
};
export const FETCH_WATCHLIST = 'FETCH_WATCHLIST';
export const fetchWatchlistAction = watchlist => {
    return {
        type: 'FETCH_WATCHLIST',
        payload: watchlist
    };
};
export const DELETE_WATCHLIST = 'DELETE_WATCHLIST';
export const deleteWatchlistAction = watchlist => {
    return {
        type: 'DELETE_WATCHLIST',
        payload: watchlist
    };
};
