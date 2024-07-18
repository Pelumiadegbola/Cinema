import React from 'react'
import logo from '../../assets/img/CINEMA-PARADISO.png';
import copyright from '../../assets/img/Copyright.png';

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-logo">
                    <img src={logo} alt="logo" href="/" />
                </div>

                <div class="about-us">
                    <p class="info">
                        Cinema Paradiso is the world’s leading community for creators to
                        share, grow, and get hired.
                    </p>
                    <h2>Contact</h2>
                    <p>E-mail : movie@cinemaparadiso.com | Hotline: +1 131 138 138</p>
                </div>
                <div class="copyright">
                    <img src={copyright} alt="Copyright" />
                </div>
            </footer>
        </>
    )
}

export default Footer