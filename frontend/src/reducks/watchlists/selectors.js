import { createSelector } from 'reselect';

const watchlistSelector = state => state.watchlists;

export const getWatchlist = createSelector([watchlistSelector], state => state.list);
