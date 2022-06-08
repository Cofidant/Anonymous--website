import React from 'react'
import Landing from './Landing/Landing'
import Homebase from './Homebase/Homebase'
import Therapy from './Therapy/Therapy'
import Share from './Share/Share'
import Thought from './Thought/Thought'
import Vision from './Vision/Vision'
import Counsel from './Counsel/Counsel'
import People from './People/People'
import './Home.css'

export default function Home() {
    return (
        <div className='main'>
            <div className='home-container'>
                <Landing/>
                <Homebase/>
            </div>
            <div className='therap'>
                <Therapy/>
                <Share/>
                <Thought/>
                <Vision/>
                <Counsel/>
                <People/>
            </div>
        </div>

    )
}