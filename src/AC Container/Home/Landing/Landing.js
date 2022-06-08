import React from 'react'
import "./Landing.css";

const logo = {
    width: '33px', 
    height: '24px'
}

export default function Landing() {
    return (
        <div className='wrapper'>
            <div className='logo-css'>
                <img src='/logo.svg' alt='logo' style={logo} />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Conselling</a>
                    </li>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Join Us</a>
                    </li>
                </ul>
            </nav>
            <div className='landing-container'>
                <div className='landing-parent'>
                    <h1>CAPTURE THE WHOLE <br/> WORLD WITH YOU WITH <br/> <div className='AC'> ANONYMOUS CONFIDANT </div></h1>
                    <p className='landing-subtitle'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec duis elementum lobortis amet quis diam urna.
                    Nibh in diam faucibus nibh dictum sed tempus
                    </p>
                    <div>
                        <a href='#'>
                            <button className='btn primary-btn'>
                                GET STARTED NOW
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}