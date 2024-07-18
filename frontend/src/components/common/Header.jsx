import React from 'react'
import logo from "../../assets/img/CINEMA-PARADISO.png"
import Home from "../../assets/img/Home.png"

function Header() {
    return (
        <header>
            <a href="/"
            ><img class="logo" src={logo} alt="logo" href="/" />
            </a>
            <ul class="nav">
                <li><a href="/"><img src={Home} alt="home" /></a></li>
                <li><a href="/categories">Category</a></li>
                <li><a href="/watchlists">My Watchlist</a></li>
            </ul>
        </header>
    )
}

export default Header