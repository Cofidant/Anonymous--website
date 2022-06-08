import React from 'react'
import "./Therapy.css";


export default function Therapy() {
    return (
        <div className='wrapper'>
            <div className='therapy-session'>

                {/* Left side*/}
                <div className='speak'>
                    <h2>Speak to a Therapy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec duis elementum lobortis amet quis diam urna.
                        Nibh in diam faucibus nibh dictum sed tempus.</p>
                    <p>Consequat elementum est quam purus, massa.
                        Mauris adipiscing ac massa risus tempus ut lacinia nisl.
                        Imperdiet consectetur ac egestas nunc eget nunc.
                        Purus eget sed egestas tempus nunc commodo proin. Elit cras sed lectus justo.
                        Ut a ultrices pulvinar pulvinar nisl id tempus, est ultricies.</p>
                </div>

                {/* Right Side*/}
                <div className='speak-img'>
                    <img src='/images/About-1.png' alt='' className='about-1' />
                    <img src='/images/About-11.png' alt='' className='about-11' />
                </div>
            </div>
        </div>
    )
}