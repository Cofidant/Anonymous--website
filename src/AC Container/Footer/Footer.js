import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-row'>
                    {/* column 1 */}
                    <div className='col'>
                        <h4>Our Story</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec duis elementum lobortis amet quis diam urna. 
                        Nibh in diam faucibus nibh dictum sed tempus. 
                        </p>
                    </div>
                    {/* column 2 */}
                    <div className='col'>
                        <h4>About Us</h4>
                        <ul className='list-unstyled'>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Our Vision</a></li>
                            <li><a href="#">Our Partners</a></li>
                        </ul>
                    </div>
                    {/* column 3 */}
                    <div className='col'>
                        <h4>Help Center</h4>
                        <ul className='list-unstyled'>
                            <li><a href="#">anonymousconfidant@gmail.com</a></li>
                            <li><p>+2349025024319</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}