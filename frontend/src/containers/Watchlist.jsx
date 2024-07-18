import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteWatchlist, fetchFromLocalStorage } from '../reducks/watchlists/operations';
import { getWatchlist } from '../reducks/watchlists/selectors';
import IconFav from '../assets/img/Remove.png';
import Preview from '../components/common/Preview';
import Header from '../components/common/Header';


function Watchlist() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const watchlist = getWatchlist(selector);
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);
    };
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    });
    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
            <Header />
            <div class="container">

                <div class="upcoming">

                    <h1>My Watchlist</h1>

                </div>

                <div class="upcoming-movies">
                    {watchlist && watchlist.length > 0 ? (
                        watchlist.map(watchlist => (

                            <div class="card">

                                <img
                                    class="fav"
                                    onClick={() => {
                                        dispatch(deleteWatchlist(watchlist.id));
                                    }}
                                    src={IconFav}
                                    alt=""
                                />

                                <div class="img-container">
                                    <img class="images" onClick={() => clickMovie(watchlist.id)}
                                        src={watchlist.image} />
                                </div>
                                <div class="info">
                                    <h4>{watchlist.name}</h4>
                                    <p>TV-MA | Action, Crime</p>

                                    <a href={watchlist.trailer_link} target="_blank"><button class="trailer-Btn">
                                        Watch Trailer
                                    </button></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <p>No movies here yet...</p>
                            <p>To add movies to your watchlist click the star on the top right corner of the movie</p>
                        </>
                    )}

                </div>
            </div>

        </>
    );
};

export default Watchlist;
