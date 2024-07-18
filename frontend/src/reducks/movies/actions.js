export const FETCH_MOVIE = "FETCH_MOVIE";
export const fetchMoviesAction = movies => {
    return {
        type: "FETCH_MOVIE",
        payload: { movies }
    };
};
