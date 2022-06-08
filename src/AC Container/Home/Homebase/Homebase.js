import React from 'react'
import './Homebase.css'

export default function Homebase() {
    return (
        <div className='homebase-container'>
            <div className='homebase-parent'>
                <img src={require ('../../../Assets/Home/web-footer.png')} alt='no internet connnection'/>
            </div>
        </div>
    )
}