import React, { useState, useEffect } from 'react';
import API from '../../API';
import { useDispatch } from 'react-redux';
import Rating from "../../assets/img/Rating.png";
import PlayNow from "../../assets/img/Playnow.png";


const api = new API();

const Preview = ({ setShowPreview, selectedMovieId }) => {
    const [movie, setMovie] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getMovie(selectedMovieId)
            .then(movie => {
                setMovie(movie);
            })
            .catch(error => {
                alert('Faild to connect API: /movie/:id/');
            });
    }, []);

    console.log('movie', movie);

    return (
        <>

            {movie && (
                <div class="active-movie">

                    <button class="close"><a href="/">x</a></button><div class="play-movie">
                        <div class="movie-img"><img src={movie.image} alt="iceAge" /></div>
                        <div class="discription">
                            <h2>{movie.name}</h2>
                            <p>Movie</p>
                            {/* <img src={Rating} alt="Rating" /> */}
                            <h4>{movie.rating}</h4>
                            <p>{movie.movie_duration}Minutes-USA</p>
                            <div class="genre">
                                <p>Action</p>
                                <p>Crime</p>
                                <p>Drama</p>
                                <p>Fantasy</p>
                                <p>Thriller</p>
                            </div>

                            <p id="about">
                                {movie.description}
                            </p>

                            <a href={movie.trailer_link} target="_blank"><button class="playnow-Btn">
                                Play Now<img src={PlayNow} alt="Play" />
                            </button></a>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Preview
