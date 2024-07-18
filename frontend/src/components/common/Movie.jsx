import React from 'react'
import Tenet from '../../assets/img/Tenet.png'
import watchTrailer from '../../assets/img/Watch-Trailer.png'
import Aladin from "../../assets/img/Aladin.png";
import AStarisBorn from "../../assets/img/AStarisBorn.png";
import Battleship from "../../assets/img/Battleship.png";
import BigHero6 from "../../assets/img/BigHero6.png";
import Strong from "../../assets/img/12Strong.png";

function Movie() {
    return (
        <>
            <div class="card">
                <div class="img-container">
                    <img src={Tenet} alt="Tenet" />
                </div>
                <div class="info">
                    <h4>Tenet</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="img-container">
                    <img src={Aladin} alt="Aladin" />
                </div>
                <div class="info">
                    <h4>Aladin</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="img-container">
                    <img src={AStarisBorn} alt="AStarisBorn" />
                </div>
                <div class="info">
                    <h4>AStarisBorn</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="img-container">
                    <img src={Battleship} alt="Battleship" />
                </div>
                <div class="info">
                    <h4>Battleship</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="img-container">
                    <img src={BigHero6} alt="BigHero6" />
                </div>
                <div class="info">
                    <h4>BigHero6</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="img-container">
                    <img src={Strong} alt="Strong" />
                </div>
                <div class="info">
                    <h4>12Strong</h4>
                    <p>TV-MA | Action, Crime</p>

                    <button class="trailer-Btn">
                        <img src={watchTrailer} alt="watchTrailer" />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Movie