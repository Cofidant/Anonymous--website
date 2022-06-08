import React from 'react'
import './People.css'

export default function People() {
    return (
        <div className='people'>
            <h2>What People Say About US</h2>
            <div className='people-content'>
                
                {/* Left side*/}
                <div className='people-left'>
                    <img src='/images/model.png' alt='' />
                </div>

                {/* Right Side*/}
                <div className='people-right'>
                    <img src='/images/quote-icon.png' alt='' className='quote-1' />
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec duis elementum lobortis amet quis diam urna. 
                    Nibh in diam faucibus nibh dictum sed tempus. 
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec duis elementum lobortis amet quis diam urna. 
                    Nibh in diam faucibus nibh dictum sed tempus. 
                    </p>
                    <img src='/images/quote-icon.png' alt='' className='quote-2' />
                </div>
            </div>
            <img src='/images/model-overlay.png' alt='' className='model-overlay'/>
        </div>

    )
}