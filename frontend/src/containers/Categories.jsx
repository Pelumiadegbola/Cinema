import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addWatchlist, fetchFromLocalStorage } from '../reducks/watchlists/operations';
import { getWatchlist } from '../reducks/watchlists/selectors';
import IconFav from '../assets/img/Star1.png';
import Preview from '../components/common/Preview';
import Header from '../components/common/Header';
import { getMovies } from '../reducks/movies/selectors';
import API from '../API';


const api = new API();

const Categories = () => {
    const [categoryAnimated, setCategoryAnimated] = useState(null);
    const [categoryCrime, setCategoryCrime] = useState(null);
    const [categoryRomance, setCategoryRomance] = useState(null);
    const [categoryAction, setCategoryAction] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

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
        api.getMovies({ category_id: '1' })
            .then(movies => {
                setCategoryAnimated(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '2' })
            .then(movies => {
                setCategoryCrime(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '3' })
            .then(movies => {
                setCategoryRomance(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '4' })
            .then(movies => {
                setCategoryAction(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    }, []);

    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}

            <Header />

            <div class="container1">

                <div class="animated">

                    <h1>Animated</h1>
                </div>
                {categoryAnimated && categoryAnimated.results.length > 0 ? (
                    <div class="animated-movies">

                        {categoryAnimated.results.map(movie => (

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
                                        Watch Trailer
                                    </button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies here yet...</p>
                )}


                <div class="crime">

                    <h1>Comedy</h1>
                </div>
                {categoryCrime && categoryCrime.results.length > 0 ? (

                    <div class="crime-movies">

                        {categoryCrime.results.map(movie => (
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
                                        Watch Trailer
                                    </button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies here yet...</p>
                )}

                <div class="action">

                    <h1>Horror</h1>
                </div>
                {categoryAction && categoryAction.results.length > 0 ? (
                    <div class="action-movies">
                        {categoryAction.results.map(movie => (
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
                                        Watch Trailer
                                    </button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies here yet...</p>
                )}

                <div class="romance">

                    <h1>Drama</h1>
                </div>
                {categoryRomance && categoryRomance.results.length > 0 ? (
                    <div class="romance-movies">
                        {categoryRomance.results.map(movie => (
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
                                        Watch Trailer
                                    </button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies here yet...</p>
                )}

            </div>

        </>
    );
};

export default Categories;