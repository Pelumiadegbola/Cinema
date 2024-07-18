import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../reducks/movies/operations';
import Header from "../components/common/Header";
import leftArrow from '../assets/img/LeftArrow.png';
import rightArrow from "../assets/img/RightArrow.png"
import iceAge from "../assets/img/ice age2.png"
import path from "../assets/img/Path.png";
import WatchTrailer from "../assets/img/Watch-Trailer.png";
import React, { useEffect, useState } from 'react';
import { getMovies } from '../reducks/movies/selectors';
import API from '../API';
import { getWatchlist } from '../reducks/watchlists/selectors';
import { addWatchlist, fetchFromLocalStorage } from '../reducks/watchlists/operations';
import Preview from '../components/common/Preview';
import IconFav from '../assets/img/Star1.png';


const api = new API();
const Home = () => {
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const movies = getMovies(selector);
    const watchlist = getWatchlist(selector);
    const clickfav = movie => {
        dispatch(addWatchlist(movie));
    };
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);
    };

    useEffect(() => {
        dispatch(fetchFromLocalStorage);
        api.getMovies({ release_type: 'Coming Soon' })
            .then(movies => {
                setMoviesCommingSoon(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ release_type: 'Newly Released' })
            .then(movies => {
                setMoviesNewReleased(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, [movies]);

    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
            <Header />
            <div class="container">
                <div class="top">
                    <img class="path" src={path} alt="path" />
                    <img class="backgroundImg" src={iceAge} alt="IceAge" />
                    <h2>ICE AGE</h2>
                    <p>
                        With global warming threatening their once-icy domain with widespread
                        flooding, Manny (Ray Romano), Sid (John Alberto Leguizamo) and Diego
                        (Denis Leary) set out to find a safe haven. Along the way, another
                        mammoth (Queen Latifah), who thinks she is an opossum, joins the
                        travellers on their perilous quest.
                    </p>
                    <button class="watch-now-btn"><a href="https://www.youtube.com/watch?v=VUSAwCHuNLo" target="_blank">Watch Now</a></button>
                </div>


                <div class="newly-released">


                    <h1>Newly Released</h1>

                    <div class="arrows">
                        <img src={leftArrow} />
                        <img src={rightArrow} />
                    </div>
                </div>

                <div class="newly-released-movies">
                    {moviesNewReleased && moviesNewReleased.results.length > 0 ? (
                        moviesNewReleased.results.map(movie => (



                            <div class="card">
                                {movie &&
                                    Object.values(watchlist).filter(
                                        watchlistMovie => movie.id == watchlistMovie.id
                                    ).length === 0 && (
                                        <img
                                            class="fav"
                                            onClick={() => {
                                                clickfav(movie);
                                            }}
                                            src={IconFav}
                                            alt=""
                                        />
                                    )}
                                <div class="img-container">
                                    <img class="images" onClick={() => clickMovie(movie.id)}
                                        src={movie.image} />
                                </div>
                                <div class="info">
                                    <h4>{movie.name}</h4>
                                    <p>TV-MA | Action, Crime</p>

                                    <a href={movie.trailer_link} target="_blank"><button class="trailer-Btn">
                                        <img src={WatchTrailer} />
                                    </button></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No movies here yet...</p>
                    )}

                </div>



                <div class="upcoming">

                    <h1>Upcoming</h1>

                    <div class="arrows">
                        <img src={leftArrow} />
                        <img src={rightArrow} />
                    </div>
                </div>

                <div class="upcoming-movies">
                    {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                        moviesComingSoon.results.map(movie => (

                            <div class="card">
                                {movie &&
                                    watchlist &&
                                    Object.values(watchlist).filter(
                                        watchlistMovie => movie.id == watchlistMovie.id
                                    ).length === 0 && (
                                        <img
                                            class="fav"
                                            onClick={() => {
                                                clickfav(movie);
                                            }}
                                            src={IconFav}
                                            alt="heart"
                                        />
                                    )}
                                <div class="img-container">
                                    <img class="images" onClick={() => clickMovie(movie.id)}
                                        src={movie.image} />
                                </div>
                                <div class="info">
                                    <h4>{movie.name}</h4>
                                    <p>TV-MA | Action, Crime</p>

                                    <a href={movie.trailer_link} target="_blank"><button class="trailer-Btn">
                                        <img src={WatchTrailer} />
                                    </button></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No movies here yet...</p>
                    )}

                </div>
            </div>

        </>
    );
};

export default Home;