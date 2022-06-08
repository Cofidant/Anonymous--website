import React from 'react'
import "./Thought.css";


export default function Thought() {
    return (
        <div className='wrapper'>
            <div className='thought-session'>

                {/* Left side*/}
                <div className='thought'>
                    <h2>Give you Thought on Issues</h2>
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
                <div className='thought-img'>
                    <img src='/images/About-3.png' alt='' className='issue-1' />
                    <img src='/images/About-11.png' alt='' className='issue-11' />
                </div>
            </div>
        </div>
    )
}