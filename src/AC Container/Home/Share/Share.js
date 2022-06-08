import React from 'react'
import "./Share.css";


export default function Share() {
    return (
        <div className='wrapper'>
            <div className='share-session'>

                {/* Right Side*/}
                <div className='share-img'>
                    <img src='/images/About-2.png' alt='' className='share-1' />
                    <img src='/images/About-11.png' alt='' className='share-11' />
                </div>

                {/* Left side*/}
                <div className='share'>
                    <h2>Share Your Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec duis elementum lobortis amet quis diam urna.
                        Nibh in diam faucibus nibh dictum sed tempus.</p>
                    <p>Consequat elementum est quam purus, massa.
                        Mauris adipiscing ac massa risus tempus ut lacinia nisl.
                        Imperdiet consectetur ac egestas nunc eget nunc.
                        Purus eget sed egestas tempus nunc commodo proin. Elit cras sed lectus justo.
                        Ut a ultrices pulvinar pulvinar nisl id tempus, est ultricies.</p>
                </div>
            </div>
        </div>
    )
}